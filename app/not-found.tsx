import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Page not found. The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </Section>
  );
}
