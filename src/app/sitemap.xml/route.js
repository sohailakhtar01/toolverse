export async function GET() {
  const baseUrl = "https://toolverse-brown.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/how-it-works",
    "/browse-tools",
    "/featured"
  ];

  const routes = staticRoutes.map((route) => {
    return `
      <url>
        <loc>${baseUrl}${route}</loc>
      </url>
    `;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.join("")}
    </urlset>
  `;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
