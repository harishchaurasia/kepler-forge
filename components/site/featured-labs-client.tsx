"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { LabPost } from "@/lib/content/loader";

interface FeaturedLabsClientProps {
  labs: LabPost[];
}

export function FeaturedLabsClient({ labs }: FeaturedLabsClientProps) {
  const featured = labs.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h2 className="font-bold mb-4">Featured Labs</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Latest research and technical deep-dives
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex border-2">
            <Link href="/labs">View All</Link>
          </Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((lab, index) => (
            <motion.div
              key={lab.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link href={`/labs/${lab.slug}`} className="group block h-full">
                <Card className="h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 group-hover:bg-opacity-80">
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">{lab.frontmatter.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{lab.frontmatter.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {lab.frontmatter.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <time className="text-sm text-muted-foreground font-medium">
                      {new Date(lab.frontmatter.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link href="/labs">View All Labs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
