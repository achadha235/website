import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/api/og/*",
      },
    ],
    sitemap: "https://achadha.com/sitemap.xml",
  };
}
