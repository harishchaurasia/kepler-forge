"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { WorkPost } from "@/lib/content/loader";

interface FeaturedWorkClientProps {
  work: WorkPost[];
}

export function FeaturedWorkClient({ work }: FeaturedWorkClientProps) {
  const featured = work.slice(0, 2);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/20 to-background" />
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h2 className="font-bold mb-4">Featured Work</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Case studies and projects
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex border-2">
            <Link href="/work">View All</Link>
          </Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link href={`/work/${item.slug}`} className="group block h-full">
                <Card className="h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 group-hover:bg-opacity-80">
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{item.frontmatter.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.frontmatter.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    {item.frontmatter.client && (
                      <p className="text-sm font-medium text-primary mb-4">
                        Client: {item.frontmatter.client}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.frontmatter.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <time className="text-sm text-muted-foreground font-medium">
                      {new Date(item.frontmatter.date).toLocaleDateString("en-US", {
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
            <Link href="/work">View All Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
