import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "common-blogapp";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const jwt = c.req.header("Authorization") || "";
  if (!jwt) {
    c.status(403);
    return c.json({ error: "Unathrorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  console.log(payload);

  if (!payload) {
    c.status(403);
    return c.json({ error: "Unathrorized" });
  }

  c.set("userId", String(payload.id));
  await next();
});

blogRouter.post("/", async (c) => {
  //@ts-ignore
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "Inavlid data" });
  }
  const authorId = c.get("userId");
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: authorId,
      },
    });
    return c.json({ id: post.id });
  } catch (e) {
    c.status(411);
    return c.json({ Error: "Unable to add blog" });
  }
});

blogRouter.put("/", async (c) => {
  //@ts-ignore
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        published: body.published,
        content: body.content,
        title: body.title,
      },
    });
    return c.json({ id: post.id });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.json({ Error: "Unable to update blog" });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findMany();
    return c.json(post);
  } catch (e) {
    c.status(411);
    return c.json({ Error: "Unable to fetch blogs" });
  }
});

blogRouter.get("/:id", async (c) => {
  //@ts-ignore
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  var id = c.req.param("id");
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    return c.json(post);
  } catch (e) {
    c.status(411);
    return c.json({ Error: "Unable to fetch blogs" });
  }
});
