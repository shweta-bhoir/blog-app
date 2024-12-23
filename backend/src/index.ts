import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono();
app.use("/*", cors());
app.route("/api/V1/user", userRouter);
app.route("/api/V1/blog", blogRouter);

export default app;
