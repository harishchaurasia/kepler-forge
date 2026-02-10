import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import { Cpu, Code, Boxes } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description: "Technical capabilities and expertise areas at Kepler Forge.",
};

const technologies = [
  {
    title: "Simulation Systems",
    description: "Large-scale simulation infrastructure for training, research, and entertainment applications.",
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
];

export default function TechnologyPage() {
  return (
    <Section>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Core technical capabilities and expertise areas
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <Link key={tech.href} href={tech.href}>
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Icon className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>{tech.title}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
