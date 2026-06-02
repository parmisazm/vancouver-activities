import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vancouveractivities.com";
  const now = new Date();

  const mainPages = [
    { url: `${baseUrl}`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/things-to-do`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/kids-activities`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/outdoor-adventures`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/free-things-to-do`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/indoor-activities`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/birthday-parties`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/summer-camps`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/this-weekend`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/events`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/seasonal-guide`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/rainy-day-activities`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/restaurants`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${baseUrl}/submit-event`, changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const blogPosts = [
    { url: `${baseUrl}/blog/best-playgrounds-vancouver`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/rainy-day-indoor-activities`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/family-hikes-vancouver`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/free-things-to-do-spring`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/toddler-activities-vancouver`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/best-splash-pads-vancouver`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return [...mainPages, ...blogPosts].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
