import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { InnovationLab } from "@/components/sections/InnovationLab";
import { Approach } from "@/components/sections/Approach";
import { ThoughtLeadership } from "@/components/sections/ThoughtLeadership";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <InnovationLab />
        <Approach />
        <ThoughtLeadership />
        <About />
        <Contact />
      </main>
    </div>
  );
}
