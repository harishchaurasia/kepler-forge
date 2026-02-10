import * as React from "react";
import { getLabs } from "@/lib/content/loader";
import { FeaturedLabsClient } from "./featured-labs-client";

export async function FeaturedLabs() {
  const labs = await getLabs();
  const featured = labs.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return <FeaturedLabsClient labs={featured} />;
}
