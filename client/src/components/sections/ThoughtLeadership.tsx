import { motion } from "framer-motion";
import { Link2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  { title: "The Entity and The Approach: Understanding Agentic AI", url: "https://www.linkedin.com/pulse/entity-approach-simple-framework-understand-ai-agents-sanjay-hoz3c/" },
  { title: "Responsible AI and Explainable AI", url: "https://www.linkedin.com/pulse/responsible-ai-explainable-perfect-partnership-sanjay-gupta-pmp-csm-lfpkc/" },
  { title: "Demystifying Explainable AI", url: "https://www.linkedin.com/pulse/demystifying-explainable-ai-its-role-trustworthy-gupta-pmp-csm-h4uqc/" },
  { title: "The Rising Need for Responsible AI", url: "https://www.linkedin.com/pulse/rising-need-responsible-ai-sanjay-gupta-pmp-csm-yzl9c/" },
];

const skillGroups = [
  {
    title: "AI/ML SPECIALIZATION",
    skills: ["Agentic AI", "GenAI/LLMs", "Vibe Coding", "Responsible AI", "Explainable AI", "MLOps", "AI Governance"]
  },
  {
    title: "PROGRAM MANAGEMENT",
    skills: ["Cross-Functional Leadership", "Stakeholder Management", "Risk & Issue Management", "Dependency Management", "Change Management", "Vendor Management"]
  },
  {
    title: "METHODOLOGIES",
    skills: ["Agile/Scrum", "SAFe", "OKRs", "Waterfall", "Hybrid"]
  },
  {
    title: "PLATFORMS & TOOLS",
    skills: ["AWS", "GCP", "Vertex AI", "Azure", "Jira", "Confluence", "monday.com"]
  }
];

export function ThoughtLeadership() {
  return (
    <section id="thoughts" className="py-24 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Contributing to the <span className="text-emerald-400">AI Discourse</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest text-emerald-400/80">Published Articles</h3>
            <div className="space-y-4">
              {articles.map((article) => (
                <a 
                  key={article.title}
                  href={article.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Link2 className="w-4 h-4" />
                    </div>
                    <span className="text-white group-hover:text-emerald-400 transition-colors font-medium">{article.title}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <a 
              href="https://www.linkedin.com/in/sgupta78/recent-activity/articles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-emerald-400 font-bold hover:underline"
            >
              View All Articles →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest text-emerald-400/80">Expertise Areas</h3>
            <div className="space-y-10">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-100 border-white/10 px-3 py-1 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
