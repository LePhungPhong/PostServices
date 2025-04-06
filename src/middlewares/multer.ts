import express, { Request, Response } from 'express';
import Busboy from 'busboy';
import AWS from 'aws-sdk';

const app = express();

const s3 = new AWS.S3({
    endpoint: new AWS.Endpoint('sgp1.digitaloceanspaces.com'),
    accessKeyId: process.env.DO_SPACES_KEY as string,
    secretAccessKey: process.env.DO_SPACES_SECRET as string,
});
app.post('/upload', (req: Request, res: Response) => {
    const busboy = new Busboy({ headers: req.headers });

    busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, filename: string, encoding: string, mimetype: string) => {
        const fileKey = `uploads/${Date.now()}_${filename}`;

        const uploadParams: AWS.S3.PutObjectRequest = {
            Bucket: 'your-space-name',
            Key: fileKey,
            Body: file,
            ContentType: mimetype,
            ACL: 'public-read',
        };

        s3.upload(uploadParams, (err, data) => {
            if (err) {
                console.error('Lỗi upload:', err);
                return res.status(500).json({ error: 'Upload thất bại' });
            }
            res.status(200).json({
                message: 'Upload thành công',
                url: data.Location,
            });
        });
    });
    req.pipe(busboy);
});

