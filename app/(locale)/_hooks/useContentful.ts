"use client";
import { createClient } from "contentful";

export const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
  });
};
