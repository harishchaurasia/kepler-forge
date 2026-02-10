"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/webgl/hero-scene").then((mod) => ({ default: mod.HeroScene })),
  {
    ssr: false,
    loading: () => null,
  }
);

// Fallback SVG component
function HeroFallbackSVG() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-30">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" stroke="#ff6b35" strokeWidth="2" fill="url(#gradient)" opacity="0.3" />
        <circle cx="200" cy="200" r="100" stroke="#f7931e" strokeWidth="2" fill="none" opacity="0.4" />
        <circle cx="200" cy="200" r="50" stroke="#ffd23f" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="200" cy="200" r="5" fill="#ffffff" />
      </svg>
    </div>
  );
}

export function Hero() {
  const [showWebGL, setShowWebGL] = React.useState(false);

  React.useEffect(() => {
    // Only try to load WebGL after component mounts
    setShowWebGL(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border/50">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* WebGL Scene - positioned far back with low opacity */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        {showWebGL ? (
          <React.Suspense fallback={<HeroFallbackSVG />}>
            <HeroScene />
          </React.Suspense>
        ) : (
          <HeroFallbackSVG />
        )}
      </div>
      
      {/* Glassmorphic overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-6 md:px-8 py-32 md:py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2.5 rounded-full glass-strong border border-primary/30 text-primary text-sm font-medium mb-8 backdrop-blur-md">
              Engineering-First Studio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-bold mb-8 leading-[1.1]"
          >
            <span className="block">Forging Intelligent</span>
            <span className="block gradient-text-primary">Worlds</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Premium engineering-first game-tech & simulation studio
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="px-8 py-6 text-base font-medium glow-primary hover:glow-primary-lg transition-all">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base font-medium border-2 hover:bg-accent/10 hover:border-primary/50 transition-all">
              <Link href="/work">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
