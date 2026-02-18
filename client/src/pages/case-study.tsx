import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock, Globe, Shield, Zap, BarChart3, TrendingDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CaseStudyProps {
  params: { id: string };
}

const caseStudies = {
  "saas-governance": {
    title: "Enterprise SaaS Governance & AI-Driven Rationalization",
    company: "RingCentral",
    period: "2022–2025",
    context: "300+ SaaS applications with no centralized visibility, redundancy, or cost control",
    impact: [
      { label: "Savings", value: "$10M+", icon: TrendingDown },
      { label: "Apps Eliminated", value: "40–50", icon: CheckCircle2 },
      { label: "Stakeholder Agreement", value: "95%", icon: Globe },
      { label: "Assessment Time", value: "4 mo", icon: Clock }
    ],
    challenge: "RingCentral had accumulated 300+ SaaS applications across departments with no governance. Individual teams purchased tools independently, creating duplicate functionality, unnecessary spend, and security gaps. Manual portfolio assessment would take 6+ months and be outdated on completion. App owners resisted rationalization.",
    role: "I was assigned to design and operationalize this program from scratch. I built the governance framework (review process, approval criteria, escalation paths), established two governance councils (DRI Council for departments, Governance Council for high-spend reviews), secured CXO/SVP buy-in across Finance, IT, Security, Legal, and Innovation, and oversaw the Agentic AI solution to accelerate the initial assessment.",
    solution: [
      "Built governance framework: standardized review process, business case templates, escalation paths documented in project wiki",
      "Established DRI Council (senior reps per dept) and Governance Council (exec reviews for high-spend apps)",
      "Deployed Agentic AI on Google Vertex AI Agent Builder: integrated 5 data sources (HRIS, Finance, Procurement, SSO, Support) with RAG architecture for explainable recommendations",
      "Multi-modal interface: web chat + voice calling option for stakeholder accessibility",
      "Human-in-the-loop: all AI recommendations reviewed by governance councils before action",
      "Integrated Security team compliance checks (SSO/MFA, supply chain training), Finance business case template, and Data Privacy reviews into the process",
      "Automated renewal calendar and escalation path (manager → skip-level) — 80% reduction in last-minute escalations"
    ],
    tech: ["Vertex AI Agent Builder", "GCP", "GPT-4", "LangChain", "Pinecone", "RAG", "Python"],
    results: [
      "$10M+ in OpEx savings over 3 years through application consolidation",
      "40–50 applications eliminated with stakeholder agreement",
      "Assessment completed in 4 months vs. 6+ months for manual approach",
      "95% stakeholder agreement on AI recommendations vs. 60% for manual review decks",
      "Governance framework extended beyond cost optimization — now serves Security, Finance, and Data Privacy org-wide",
      "80% reduction in renewal escalations through automated calendar and notification system"
    ]
  },
  "fraud-detection": {
    title: "AI-Powered Fraud Detection Across Global Contact Centers",
    company: "RingCentral",
    period: "2022–2024",
    context: "Escalating fraud losses with 24–48 hour detection lag across 12 global contact centers serving 1,000+ agents",
    impact: [
      { label: "Fraud Reduction", value: "80%", icon: Shield },
      { label: "Detection Time", value: "Real-time", icon: Zap },
      { label: "Agents Trained", value: "1,000+", icon: CheckCircle2 },
      { label: "ROI Achieved", value: "Q1", icon: BarChart3 }
    ],
    challenge: "RingCentral's global contact centers had no real-time fraud detection. Manual review took 24–48 hours — by which time losses had occurred. With 1,000+ agents across 12 centers, the problem scaled with the business. Build vs. buy: custom model development would take 12+ months. Change management would be the harder challenge — any alert system would disrupt trained agent workflows.",
    role: "I led the full program lifecycle: evaluated 3 fraud detection platforms, selected Pindrop, partnered with their solution architects to optimize for RingCentral's fraud patterns, architected the phased global deployment (Pilot → Regional → Global), owned change management for 1,000+ agents, and established KPI frameworks and feedback loops for continuous model improvement.",
    solution: [
      "Vendor evaluation: assessed 3 platforms on AI accuracy, real-time capability, cloud integration, contact center deployment history",
      "Solution architecture: partnered with Pindrop to tune models for RingCentral-specific fraud patterns; integrated AWS-deployed platform with RingCentral's cloud contact center infrastructure",
      "Real-time fraud scoring during live calls — not post-call analysis",
      "Phased rollout: Pilot (2 centers) → Regional (6 centers) → Global (12 centers)",
      "Change management: developed agent playbooks for fraud alert scenarios, trained supervisors on escalation protocols before agent rollout, published fraud reduction metrics by center to drive adoption",
      "Feedback loops: agent outcomes fed back to Pindrop for model tuning — continuous accuracy improvement"
    ],
    tech: ["Pindrop AI Platform", "AWS", "RingCentral Contact Center", "Real-time Analytics", "ML Optimization"],
    results: [
      "80% reduction in fraud incidents within 6 months of global launch",
      "Detection time reduced from 24–48 hours to real-time during live calls",
      "1,000+ agents trained with 95% adoption in 3 months",
      "Zero production incidents across phased global rollout",
      "Measurable ROI achieved within first quarter of deployment",
      "KPI framework and feedback loops now serve as continuous improvement infrastructure"
    ]
  },
  "iot-maintenance": {
    title: "AI-Driven IoT Predictive Maintenance Platform",
    company: "Applied Materials",
    period: "2016–2020",
    context: "Unplanned equipment downtime causing production delays and 30–50% higher operational costs across global manufacturing",
    impact: [
      { label: "Downtime Reduction", value: "75%", icon: Zap },
      { label: "Cost Reduction", value: "30-50%", icon: TrendingDown },
      { label: "Connected Systems", value: "100+", icon: Globe },
      { label: "ROI Achieved", value: "12 mo", icon: BarChart3 }
    ],
    challenge: "Applied Materials' global semiconductor manufacturing facilities operated on reactive maintenance. Equipment failures were discovered after they occurred, causing unplanned downtime and production delays. Operational costs were 30–50% higher than a predictive model would require. Equipment failure signals existed in sensor data but weren't captured or analyzed at scale across 100+ connected systems globally.",
    role: "I led the end-to-end program: partnered with data science on ML model development for failure prediction, architected the edge computing infrastructure for real-time sensor analysis, established MLOps framework (automated retraining, A/B testing, performance monitoring), integrated predictions with maintenance scheduling systems, and managed global deployment coordination across 50+ engineers in USA, Asia, and Europe.",
    solution: [
      "Edge AI + Cloud ML: Real-Time Prediction at Manufacturing Scale",
      "ML model development: partnered with data science to build failure prediction models using historical sensor data; validated accuracy against historical failure events before production",
      "Edge architecture: deployed edge computing nodes at each facility for real-time sensor analysis with sub-second alert latency",
      "Cloud ML platform: Amazon SageMaker for model training, A/B testing, and automated retraining on new failure data",
      "MLOps framework: automated retraining pipeline, performance monitoring, data drift detection",
      "Maintenance integration: connected failure predictions with scheduling systems and alerting mechanisms",
      "Global deployment: coordinated 50+ engineers across USA, Asia, Europe through phased rollout"
    ],
    tech: ["AWS IoT Core", "Amazon SageMaker", "Edge Computing", "Python", "Lambda", "MLOps"],
    results: [
      "75% reduction in unplanned equipment downtime across global manufacturing facilities",
      "30–50% operational cost reduction — maintenance scheduled proactively",
      "ROI achieved within 12 months of production deployment",
      "99%+ customer satisfaction through shift from reactive to proactive maintenance",
      "Scalable platform supporting 100+ connected systems",
      "Platform architecture reusable across additional equipment types"
    ]
  },
  "vibe-coding": {
    title: "Vibe Coding: SEO & Accessibility Audit Tool",
    company: "Global Hackathon",
    period: "2025",
    context: "Build a production-ready SEO and accessibility audit tool in 8 hours using only conversational AI development",
    impact: [
      { label: "Build Time", value: "8 hrs", icon: Clock },
      { label: "Manual Code", value: "Zero", icon: Zap },
      { label: "Stack", value: "Full-stack", icon: Shield },
      { label: "Status", value: "Prod-ready", icon: CheckCircle2 }
    ],
    challenge: "The hackathon challenge was to build a comprehensive web-based SEO and accessibility audit tool that could analyze websites for meta tags, broken links, semantic HTML structure, image alt text, and accessibility compliance — and deliver it production-ready within 8 hours using only conversational AI development (no manual coding).",
    role: "I used 'Vibe Coding' — a conversational development approach where requirements, architecture decisions, and implementation details are communicated to an AI coding assistant (Replit AI) entirely through natural language prompts. The AI generates all code, configuration, and infrastructure. The developer's role shifts to system design, requirement articulation, and quality validation — not typing code.",
    solution: [
      "Articulated the full system architecture through structured natural language prompts",
      "Iteratively refined implementation through conversational feedback",
      "Zero manual code writing — all TypeScript, React components, Express APIs, and database migrations generated by Replit AI",
      "Validated output at each stage: tested features, provided feedback, and the AI adjusted the implementation"
    ],
    tech: ["React 18", "TypeScript", "Express.js", "PostgreSQL", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Drizzle ORM", "Vite"],
    results: [
      "Production-ready full-stack application delivered in 8 hours",
      "Comprehensive audit capabilities matching commercial SEO tools",
      "Modern tech stack with full type safety (TypeScript across frontend and backend)",
      "Proved the viability of Vibe Coding as a development methodology",
      "Demonstrated that well-articulated requirements can replace manual code writing"
    ]
  }
};

export default function CaseStudy({ params }: CaseStudyProps) {
  const data = caseStudies[params.id as keyof typeof caseStudies];

  if (!data) return <div className="min-h-screen bg-background flex items-center justify-center text-white">Case Study Not Found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </a>
          </Link>
          <span className="font-bold text-xl tracking-tighter text-white">SANJAY GUPTA</span>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4">
              <span>{data.company}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/30" />
              <span>{data.period}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {data.context}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {data.impact.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <item.icon className="w-6 h-6 text-emerald-400 mb-3" />
                <span className="text-2xl font-bold text-white mb-1">{item.value}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{data.challenge}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">My Role</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{data.role}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">The Solution</h2>
                <ul className="space-y-4">
                  {data.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Results & Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.results.map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-3">
                      <Zap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 sticky top-32">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {data.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-xs text-muted-foreground italic mb-6">
                    "This is the difference between an AI experiment and an AI-enabled business program."
                  </p>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full">
                    Contact for Insights
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-900/40">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground/60">
          Built with Replit AI • © 2025 Sanjay Gupta
        </div>
      </footer>
    </div>
  );
}
