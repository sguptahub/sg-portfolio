import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder for future sections to allow scrolling */}
        <div className="h-screen w-full bg-background/50 flex items-center justify-center border-t border-white/5">
          <p className="text-muted-foreground">More content coming soon...</p>
        </div>
      </main>
    </div>
  );
}
