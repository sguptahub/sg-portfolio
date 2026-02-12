import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InnovationLab() {
  return (
    <section id="innovation" className="py-24 bg-slate-900/40 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Exploring the <span className="text-emerald-400">Future of Development</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Experimenting with AI-native tools and vibe coding
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Vibe Coding Matters for TPMs</h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                The future of program management includes rapid prototyping, building internal tools, and creating proof-of-concepts without waiting for engineering sprints.
              </p>
              <p>
                Vibe coding—instructing AI agents to build applications through natural language—makes this possible. I'm exploring how TPMs can leverage these tools to:
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Build dashboards and tracking tools in hours, not weeks",
                  "Create working prototypes for stakeholder alignment",
                  "Automate repetitive workflows without coding knowledge",
                  "Move from 'spec writer' to 'builder' mindset"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="p-1 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 group">
              <div className="bg-slate-900 rounded-[calc(1rem-1px)] overflow-hidden">
                <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                   <span className="text-muted-foreground font-mono text-xs">SEO Audit Tool Preview</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">SEO & Accessibility Auditor</h4>
                  <p className="text-sm text-muted-foreground mb-4">Built: 4 hours | Tech: Replit AI</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="h-9 px-4 border-white/10 hover:bg-white/5">
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 px-4 text-muted-foreground">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 group">
              <div className="bg-slate-900 rounded-[calc(1rem-1px)] overflow-hidden">
                <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                   <span className="text-muted-foreground font-mono text-xs">Community Platform Preview</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">Community Connect Platform</h4>
                  <p className="text-sm text-muted-foreground mb-4">Built: Cursor AI | Modern web app</p>
                  <Button variant="outline" size="sm" className="h-9 px-4 border-white/10 hover:bg-white/5">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
