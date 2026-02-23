import { motion } from "framer-motion";
import { Shield, Target, Map, FlaskConical, BarChart3, Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const frameworkSteps = [
  { icon: Target, title: "1. ASSESS", description: "Identify use cases with 10x impact potential, not 10% improvements. Find where AI actually matters." },
  { icon: Map, title: "2. MAP", description: "Connect tools to workflows. Define which tool for which task and where AI assists vs. executes." },
  { icon: FlaskConical, title: "3. PILOT", description: "Run focused 30-90 day experiments with clear success criteria (Shadow → Supervised → Autonomous)." },
  { icon: BarChart3, title: "4. MEASURE", description: "Track impact across 3 levels: Activity (30 days), Project (90 days), and Organization (6-18 months)." },
  { icon: Rocket, title: "5. SCALE", description: "Standardize what works, build AI literacy, and embed AI into the default operating model." },
];

export function Approach() {
  return (
    <section id="approach" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              The <span className="text-emerald-400">APEX-AI</span> Framework
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After leading multiple AI programs from pilot to production, I developed APEX-AI, a structured execution framework that turns experimentation into measurable enterprise value.
            </p>
            
            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">GOVERN</h3>
                  <p className="text-xs text-emerald-400/80 font-bold uppercase tracking-widest">The Foundation</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Establish AI guardrails first—Security, Ethics, Risk, and Compliance. Governance enables execution by building trust.
              </p>
            </div>

            <a href="/assets/APEX-AI-Framework-Guide.docx" download>
              {/*   <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full h-14 font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]">
                <Download className="mr-2 w-5 h-5" /> Download Framework Guide
              </Button> */}
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <step.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight uppercase">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 p-8 rounded-2xl bg-emerald-500/5 border border-dashed border-emerald-500/20 text-center"
            >
              <p className="text-white/90 italic text-lg leading-relaxed">
                "This framework moves organizations from 'AI assisted' to 'Autonomous Agents' with disciplined execution."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
