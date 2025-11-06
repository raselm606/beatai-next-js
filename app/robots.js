export default function robots() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    rules: [
      {
        userAgent: "*",
        allow: isProd ? "/" : "",
        disallow: isProd ? "" : "/",
      },
    ],
    sitemap: isProd
      ? "https://beatai-next-js.vercel.app/sitemap.xml"
      : null,
  };
}
