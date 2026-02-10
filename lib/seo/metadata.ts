import { Metadata } from "next";
import { getLabs, getWork } from "@/lib/content/loader";

export function generateSiteMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keplerforge.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Kepler Forge",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kepler Forge",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://keplerforge.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://keplerforge.com"}/logo.png`,
    description: "Premium engineering-first game-tech & simulation studio",
    sameAs: [
      // Add social media links here when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@keplerforge.com",
      contactType: "Customer Service",
    },
  };
}

export async function generateArticleSchema(
  title: string,
  description: string,
  date: string,
  url: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "Kepler Forge",
    },
    publisher: {
      "@type": "Organization",
      name: "Kepler Forge",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://keplerforge.com"}/logo.png`,
      },
    },
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
        }
      : undefined,
    url,
  };
}

export async function generateBreadcrumbSchema(paths: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: paths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: path.name,
      item: path.url,
    })),
  };
}
