import { motion } from "framer-motion";
import { Shield, Target, Map, FlaskConical, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const frameworkSteps = [
  { icon: Shield, title: "GOVERN FIRST", description: "Establish AI guardrails before deployment—bias detection, explainability, responsible AI practices" },
  { icon: Target, title: "ASSESS STRATEGIC FIT", description: "Identify use cases with 10x impact potential, not 10% improvements" },
  { icon: Map, title: "MAP TO WORKFLOWS", description: "Connect AI tools to actual work processes, not just 'try Copilot'" },
  { icon: FlaskConical, title: "PILOT WITH RIGOR", description: "30-90 day experiments with clear success criteria and phased rollout" },
  { icon: BarChart3, title: "MEASURE AT 3 LEVELS", description: "Activity (30 days) → Project (90 days) → Organization (6-18 months)" },
  { icon: Rocket, title: "SCALE SYSTEMATICALLY", description: "Standardize what works, build AI literacy, embed into processes" },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight"
          >
            How I Lead AI/GenAI Programs
          </motion.h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            After shipping 5+ AI systems from pilot to production, I've developed a repeatable framework I call <span className="text-emerald-400 font-bold">APEX-AI</span>:
          </p>
        </div>

        {/* Visual Diagram Placeholder */}
        <div className="mb-20 py-12 px-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {["Govern", "Assess", "Map", "Pilot", "Measure", "Scale"].map((step, i) => (
            <div key={step} className="flex items-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                  {i + 1}
                </div>
                <span className="mt-2 text-xs font-bold text-white uppercase tracking-widest">{step}</span>
              </div>
              {i < 5 && <div className="hidden md:block w-12 h-px bg-white/10" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all"
            >
              <step.icon className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          <blockquote className="max-w-4xl text-2xl md:text-3xl font-medium text-white/90 italic mb-12 leading-relaxed">
            "This approach has delivered <span className="text-emerald-400">$10M+ in cost savings</span>, <span className="text-emerald-400">80% fraud reduction</span>, and <span className="text-emerald-400">75% downtime reduction</span> across enterprise AI programs."
          </blockquote>
          
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-10 h-14 font-bold shadow-lg shadow-emerald-500/20">
            Download APEX-AI Framework Guide
          </Button>
        </div>
      </div>
    </section>
  );
}
