import * as React from "react";
import Link from "next/link";
import { getWork } from "@/lib/content/loader";
import { FeaturedWorkClient } from "./featured-work-client";

export async function FeaturedWork() {
  const work = await getWork();
  const featured = work.slice(0, 2);

  if (featured.length === 0) {
    return null;
  }

  return <FeaturedWorkClient work={featured} />;
}
