import { env } from "./config/env";
import app from "./app";
import { startAllListeners } from "./services/listen.service";

app.listen(env.port, "0.0.0.0", () => {
  startAllListeners();
  console.log(`Server is running at http://localhost:${env.port}`);
});
