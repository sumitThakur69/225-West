import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/sanity.client";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://225-west.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/workspaces`, priority: 0.9 },
    { url: `${baseUrl}/events`, priority: 0.9 },
    { url: `${baseUrl}/gallery`, priority: 0.7 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
    { url: `${baseUrl}/policies`, priority: 0.3 },
  ];

  const [events, workspaces] = await Promise.all([
    client.fetch(`*[_type == "event" && defined(slug.current)]{ slug, _updatedAt }`).catch(() => []),
    client.fetch(`*[_type == "workspace" && defined(slug.current)]{ slug, _updatedAt }`).catch(() => []),
  ]);

  const eventUrls = events.map((e: any) => ({
    url: `${baseUrl}/events/${e.slug.current}`,
    lastModified: new Date(e._updatedAt),
    priority: 0.7,
  }));

  const workspaceUrls = workspaces.map((w: any) => ({
    url: `${baseUrl}/workspaces/${w.slug.current}`,
    lastModified: new Date(w._updatedAt),
    priority: 0.7,
  }));

  return [...staticPages, ...eventUrls, ...workspaceUrls];
}
