import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono();

app.route("/api/V1/user", userRouter);
app.route("/api/V1/blog", blogRouter);

export default app;
