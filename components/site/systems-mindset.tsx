"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Gauge, Zap, CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Performance",
    description: "Every system is optimized for real-time performance. We measure, profile, and optimize relentlessly.",
    icon: Gauge,
  },
  {
    title: "Iteration Speed",
    description: "Fast feedback loops enable rapid experimentation. Our tools and workflows prioritize developer velocity.",
    icon: Zap,
  },
  {
    title: "Correctness",
    description: "Systems must be correct by design. We use type safety, testing, and formal methods where appropriate.",
    icon: CheckCircle2,
  },
];

export function SystemsMindset() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/20 to-background" />
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-6">Systems Mindset</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Three principles that guide everything we build
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <div className="text-center p-8 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-strong border border-primary/30 mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{principle.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
