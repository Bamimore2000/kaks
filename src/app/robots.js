export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/private/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/private"],
      },
    ],
    sitemap: "https://kaksgroup.com/sitemap.xml",
  };
}
