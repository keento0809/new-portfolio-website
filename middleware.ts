import { Hono } from "hono";
import { handle } from "hono/vercel";
import { getCookie } from "hono/cookie";
import { NextRequest, NextResponse } from "next/server";

const app = new Hono();

app.use("*", async (ctx, next) => {
  const locale =
    ctx.req.header("accept-language")?.split(",")[0]?.split("-")[0] || "en";

  if (!getCookie(ctx, "LOCALE")) {
    const req = ctx.req.raw as NextRequest;
    req.cookies.set("LOCALE", locale);
  }

  return next();
});

app.all("*", async (ctx) => {
  return NextResponse.next({
    request: ctx.req.raw as NextRequest,
  });
});

export const middleware = handle(app);
