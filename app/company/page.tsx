import { Metadata } from "next";
import { Section } from "@/components/site/section";

export const metadata: Metadata = {
  title: "Company",
  description: "About Kepler Forge - our mission, values, and engineering-first culture.",
};

export default function CompanyPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Company</h1>
        
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-xl text-muted-foreground mb-6">
            Kepler Forge is a premium engineering-first game-tech & simulation studio. 
            We forge intelligent worlds through cutting-edge technology and systems thinking.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Mission</h2>
          <p>
            Our mission is to build the most advanced simulation and game technology 
            systems, enabling new possibilities in training, research, and entertainment.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Values</h2>
          
          <h3 className="text-2xl font-semibold mt-6 mb-3">Engineering-First</h3>
          <p>
            We prioritize technical excellence and systems thinking. Every decision 
            is made with performance, correctness, and maintainability in mind.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Systems Thinking</h3>
          <p>
            We understand that complex systems require careful architecture. We design 
            for scalability, performance, and correctness from the ground up.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Continuous Learning</h3>
          <p>
            Technology evolves rapidly. We invest in research, experimentation, and 
            knowledge sharing to stay at the cutting edge.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Culture</h2>
          <p>
            Our culture is built on:
          </p>
          <ul>
            <li>Technical depth over marketing fluff</li>
            <li>Collaboration and knowledge sharing</li>
            <li>Autonomy and ownership</li>
            <li>Long-term thinking</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
