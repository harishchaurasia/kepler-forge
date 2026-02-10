import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Kepler Forge - build cutting-edge game-tech and simulation systems.",
};

const openRoles = [
  {
    title: "Systems Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    description: "Design and implement large-scale simulation systems. Deep expertise in systems programming, performance optimization, and distributed systems.",
    requirements: [
      "5+ years of systems programming experience",
      "Expertise in C++ and systems architecture",
      "Experience with simulation or game engine development",
      "Strong performance optimization skills",
    ],
  },
  {
    title: "Real-time Rendering Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    description: "Build high-performance rendering pipelines for games and simulations. Expertise in graphics programming, GPU optimization, and modern rendering techniques.",
    requirements: [
      "3+ years of graphics programming experience",
      "Expertise in Vulkan, DirectX 12, or Metal",
      "Strong understanding of GPU architecture",
      "Experience with shader optimization",
    ],
  },
];

export default function CareersPage() {
  return (
    <Section>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Join us in forging intelligent worlds. We're looking for exceptional engineers 
          who share our passion for technical excellence.
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {openRoles.map((role) => (
          <Card key={role.title}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                  <CardDescription className="text-base">
                    {role.department} • {role.location}
                  </CardDescription>
                </div>
                <Button asChild>
                  <a href={`mailto:careers@keplerforge.com?subject=Application: ${role.title}`}>
                    Apply
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{role.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {role.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-2xl mx-auto prose prose-invert">
        <h2 className="text-3xl font-semibold mb-4">Why Join Kepler Forge?</h2>
        <ul>
          <li>Work on cutting-edge technology</li>
          <li>Collaborate with world-class engineers</li>
          <li>Autonomy and ownership over your work</li>
          <li>Competitive compensation and benefits</li>
          <li>Remote-friendly culture</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Application Process</h2>
        <p>
          Our interview process focuses on technical depth and systems thinking:
        </p>
        <ol>
          <li>Initial screening call</li>
          <li>Technical interview (systems design or coding)</li>
          <li>On-site or virtual interview with the team</li>
          <li>Offer and negotiation</li>
        </ol>

        <p className="mt-8">
          Don't see a role that fits? We're always interested in hearing from exceptional 
          engineers. Reach out to{" "}
          <a href="mailto:careers@keplerforge.com" className="text-primary">
            careers@keplerforge.com
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
