import { motion } from "framer-motion";
import { 
  Bot, 
  ShieldAlert, 
  Settings, 
  Zap, 
  ArrowUpRight, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "Agentic AI for SaaS Rationalization",
    context: "RingCentral | 2022-2025",
    stats: [
      { label: "Savings", value: "$10M+" },
      { label: "Apps Analyzed", value: "300+" },
      { label: "Stakeholder Agreement", value: "95%" }
    ],
    tech: "Google Vertex AI Agent Builder • GCP • Python • Multi-modal AI",
    description: "Built and operationalized enterprise-wide SaaS governance using Google Vertex AI Agent Builder. Deployed multi-modal interface (chat + voice calling) on GCP.",
    icon: Bot,
    cta: "Read Full Case Study",
    slug: "saas-governance",
    color: "from-emerald-500/20 to-emerald-500/0"
  },
  {
    id: 2,
    title: "AI-Powered Fraud Detection System",
    context: "RingCentral | 2022-2024",
    stats: [
      { label: "Fraud Reduction", value: "80%" },
      { label: "Contact Centers", value: "12" },
      { label: "Agents Trained", value: "1,000+" }
    ],
    tech: "Pindrop AI Platform • AWS • Cloud Contact Center Integration",
    description: "Led integration of Pindrop's AI-powered fraud detection. Partnered with solution architects on model optimization, drove global deployment and change management.",
    icon: ShieldAlert,
    cta: "Read Full Case Study",
    slug: "fraud-detection",
    color: "from-blue-500/20 to-blue-500/0"
  },
  {
    id: 3,
    title: "AI-Driven IoT Predictive Maintenance",
    context: "Applied Materials | 2016-2020",
    stats: [
      { label: "Downtime Reduction", value: "75%" },
      { label: "Cost Optimization", value: "30-50%" },
      { label: "Customer Sat", value: "99%+" }
    ],
    tech: "AWS IoT • ML • Edge Computing",
    description: "Delivered edge AI platform analyzing sensor data for equipment failure prediction. Integrated with maintenance scheduling, achieved enterprise-scale ROI.",
    icon: Settings,
    cta: "Read Full Case Study",
    slug: "iot-maintenance",
    color: "from-purple-500/20 to-purple-500/0"
  },
  {
    id: 4,
    title: "Vibe Coding: SEO Audit Tool",
    context: "Global Hackathon | 2025",
    stats: [
      { label: "Build Time", value: "4 Hours" },
      { label: "Manual Coding", value: "Zero" },
      { label: "Status", value: "Production" }
    ],
    tech: "Replit AI • Natural Language Prompts",
    description: "Pioneered vibe coding to build enterprise SEO/accessibility auditor through conversational AI.",
    icon: Zap,
    cta: "Read Case Study",
    slug: "vibe-coding",
    secondaryCta: "Watch Demo",
    secondarySlug: "/demo",
    color: "from-amber-500/20 to-amber-500/0"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Real AI Implementations, <span className="text-emerald-400">Real Business Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            { /* Case studies from production AI/ML programs */}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Gradient hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-semibold border-white/10 text-muted-foreground">
                    {project.context}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/5">
                  {project.stats.map((stat, sIndex) => (
                    <div key={sIndex} className="flex flex-col">
                      <span className="text-white font-bold text-lg">{stat.value}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-2">Technology Stack</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {project.tech}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {project.slug ? (
                    <Link href={`/case-study/${project.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-emerald-400 hover:text-emerald-300 group/btn font-semibold">
                        {project.cta} <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="link" className="p-0 h-auto text-emerald-400 hover:text-emerald-300 group/btn font-semibold">
                      {project.cta} <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  )}
                  {project.secondaryCta && (
                    <Link href={project.secondarySlug || "#"}>
                      <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-white group/btn text-sm">
                        {project.secondaryCta} <ExternalLink className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
