import { generateOrganizationSchema } from "@/lib/seo/metadata";

export async function StructuredData() {
  const organizationSchema = await generateOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
