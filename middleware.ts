import { Hono } from "hono";
import { handle } from "hono/vercel";
import { NextRequest, NextResponse } from "next/server";

const app = new Hono();

const getLocaleFromHeader = (header: string | undefined): string => {
  return header?.split(",")[0]?.split("-")[0] || "en";
};

app.use("*", async (ctx, next) => {
  const locale = getLocaleFromHeader(ctx.req.header("accept-language"));
  const req = ctx.req.raw as NextRequest;

  req.cookies.set("locale", locale);

  return next();
});

app.all("*", async (ctx) => {
  const locale = getLocaleFromHeader(ctx.req.header("accept-language"));
  const response = NextResponse.next({
    request: ctx.req.raw as NextRequest,
  });

  response.cookies.set("locale", locale, {
    path: "/",
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
});

export const middleware = handle(app);
