import { motion } from "framer-motion";
import { Linkedin, Mail, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-slate-900/40 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's <span className="text-emerald-400">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Interested in AI/GenAI programs, enterprise transformation, or collaboration? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-24">
          <a href="https://github.com/sguptahub" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-emerald-400 h-14 px-8">
              <Globe className="w-5 h-5 mr-3" /> GitHub Profile
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/sgupta78/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-emerald-400 h-14 px-8">
              <Linkedin className="w-5 h-5 mr-3" /> LinkedIn Profile
            </Button>
          </a>
          <a href="mailto:reachsanjay78@gmail.com">
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-emerald-400 h-14 px-8">
              <Mail className="w-5 h-5 mr-3" /> Email Me
            </Button>
          </a>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-emerald-400 h-14 px-8">
              <FileText className="w-5 h-5 mr-3" /> Download Resume
            </Button>
          </a>
          <a href="https://www.mygreatlearning.com/eportfolio/sanjay-gupta3" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-emerald-400 h-14 px-8">
              <Globe className="w-5 h-5 mr-3" /> View ePortfolio
            </Button>
          </a>
        </div>

        <div className="text-center pt-12 border-t border-white/5">
          <p className="text-sm text-muted-foreground/60">
            Built with Replit AI using vibe coding • © 2026 Sanjay Gupta
          </p>
        </div>
      </div>
    </footer>
  );
}
