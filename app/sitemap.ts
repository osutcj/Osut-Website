import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://osut.org";

  const routes = [
    "",
    "/despre-noi",
    "/biroul-de-conducere",
    "/biroul-de-conducere-extins",
    "/educational",
    "/green",
    "/proiecte-si-initiative",
    "/contact",
    "/butonul-rosu",
    "/donat",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
