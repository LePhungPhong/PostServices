import app from "./app";
import { prisma } from "./config/database";
import { startAllListeners } from "./services/listen.service";

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  try {
    // Kiểm tra kết nối Prisma
    await prisma.$connect();
    console.log("Đã kết nối thành công với cơ sở dữ liệu");
    await startAllListeners();
    // Khởi động server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server đang chạy tại http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Không thể kết nối với cơ sở dữ liệu:", error);
    process.exit(1);
  }
}

// Xử lý khi tắt server
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Đã ngắt kết nối cơ sở dữ liệu");
  process.exit(0);
});

startServer();
