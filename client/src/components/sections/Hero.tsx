import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, ChevronDown, DollarSign, Globe2 } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-[48px] font-bold tracking-tight text-white max-w-5xl mb-6 leading-[1.1]"
        >
          Senior TPM Leading <span className="text-emerald-400">AI/ML Programs</span> & <br className="hidden md:block" /> Enterprise-Scale Transformations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed"
        >
          Leading enterprise AI/ML programs and digital transformation at scale
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-emerald-600 text-white font-semibold h-12 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105"
            onClick={() => scrollTo("projects")}
          >
            View AI Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 px-8 rounded-full backdrop-blur-sm transition-all"
            onClick={() => scrollTo("approach")}
          >
            My Approach
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-muted-foreground hover:text-white h-12 px-8 rounded-full"
            onClick={() => scrollTo("thoughts")}
          >
            Thought Leadership <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 w-full max-w-4xl backdrop-blur-sm"
        >
          <div className="bg-background/80 p-6 flex flex-col items-center gap-2 hover:bg-background/60 transition-colors">
            <DollarSign className="w-6 h-6 text-emerald-400 mb-2" />
            <span className="text-3xl font-bold text-white">$10M+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Cost Savings</span>
          </div>
          <div className="bg-background/80 p-6 flex flex-col items-center gap-2 hover:bg-background/60 transition-colors">
            <TrendingDown className="w-6 h-6 text-emerald-400 mb-2" />
            <span className="text-3xl font-bold text-white">80%</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Fraud Reduction</span>
          </div>
          <div className="bg-background/80 p-6 flex flex-col items-center gap-2 hover:bg-background/60 transition-colors">
            <Globe2 className="w-6 h-6 text-emerald-400 mb-2" />
            <span className="text-3xl font-bold text-white">15+ Years</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">AI/Cloud Leadership</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
