import { prisma } from "../config/database";
import { getNatsClient, sc } from "../config/nats";

export async function listenProfileUpdated() {
  const nc = await getNatsClient();

  const sub = nc.subscribe("profile.updated");
  console.log("👂 Listening to event: profile.updated");

  for await (const msg of sub) {
    try {
      const data = JSON.parse(sc.decode(msg.data));

      console.log("📩 Received event: profile.updated", data);

      // Gộp lastname + firstname thành fullname (nếu có)
      const fullname = [data.lastname, data.firstname]
        .filter(Boolean) // bỏ undefined/null
        .join(" ")
        .trim();

      // Upsert (tạo mới nếu chưa có, cập nhật nếu đã có)
      await prisma.users.upsert({
        where: { id: data.user_id },
        update: {
          fullname,
          username: data.username,
        },
        create: {
          id: data.user_id,
          fullname,
          username: data.username,
        },
      });

      console.log(`✅ Profile upserted for user_id: ${data.user_id}`);
    } catch (err) {
      console.error("❌ Error handling profile.updated:", err);
    }
  }
}

export async function startAllListeners() {
  await Promise.all([listenProfileUpdated()]);
}
