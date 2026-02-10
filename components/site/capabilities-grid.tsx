"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cpu, Code, Boxes, Sparkles } from "lucide-react";

const capabilities = [
  {
    title: "Simulation Systems",
    description: "Large-scale simulation infrastructure for training, research, and entertainment.",
    href: "/technology/simulation",
    icon: Cpu,
  },
  {
    title: "Engine & Tooling",
    description: "Custom game engines, optimization tools, and development pipelines.",
    href: "/technology/engine",
    icon: Code,
  },
  {
    title: "XR / Spatial",
    description: "Immersive experiences for AR, VR, and mixed reality platforms.",
    href: "/technology/xr",
    icon: Boxes,
  },
  {
    title: "Applied AI",
    description: "Intelligent systems for behavior simulation and procedural generation.",
    href: "/technology",
    icon: Sparkles,
  },
];

export function CapabilitiesGrid() {
  return (
    <section className="py-32 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-6">What We Forge</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Core capabilities that power our work
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link href={capability.href} className="group block h-full">
                  <Card className="h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 group-hover:bg-opacity-80">
                    <CardHeader className="p-8">
                      <div className="mb-6 inline-flex p-4 rounded-xl glass-strong border border-primary/30 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{capability.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{capability.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
