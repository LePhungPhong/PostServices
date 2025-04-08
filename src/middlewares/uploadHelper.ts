import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import Busboy from 'busboy';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const s3 = new AWS.S3({
    endpoint: new AWS.Endpoint('sgp1.digitaloceanspaces.com'),
    accessKeyId: process.env.DO_SPACES_KEY!,
    secretAccessKey: process.env.DO_SPACES_SECRET!,
});

export const uploadMediaMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const busboy = new Busboy({ headers: req.headers });
    const uploadPromises: Promise<AWS.S3.ManagedUpload.SendData>[] = [];
    const mediaUrls: string[] = [];

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        let fileCount = 0;
        const MAX_FILES = 5;
        if (++fileCount > MAX_FILES) {
            file.resume();
            busboy.removeAllListeners();
            return res.status(400).json({
                error: `Tối đa ${MAX_FILES} file được phép tải lên.`,
            });
        }
        if (!mimetype.startsWith('image/') && !mimetype.startsWith('video/')) {
            return res.status(400).json({ error: `Chỉ hỗ trợ ảnh hoặc video. File không hợp lệ: ${filename}` });
        }

        const folder = mimetype.startsWith('image/') ? 'images' : 'videos';
        const fileKey = `uploads/${folder}/${Date.now()}_${uuidv4()}_${filename}`;

        const uploadParams: AWS.S3.PutObjectRequest = {
            Bucket: 'your-space-name',
            Key: fileKey,
            Body: file,
            ContentType: mimetype,
            ACL: 'public-read',
        };

        uploadPromises.push(
            s3.upload(uploadParams).promise().then(result => {
                mediaUrls.push(result.Location);
                return result;
            })
        );

    });

    busboy.on('finish', async () => {
        try {
            await Promise.all(uploadPromises);
            req.body.mediaUrls = mediaUrls; // attach to body
            next(); // continue to controller
        } catch (err) {
            console.error('Lỗi upload file:', err);
            res.status(500).json({ error: 'Upload thất bại' });
        }
    });

    req.pipe(busboy);
};
