import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-2 border-emerald-500/50">
                <img 
                  src="/assets/sanjay-headshot.jpg" 
                  alt="Sanjay Gupta - Senior Technical Program Manager"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay";
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-4xl font-bold text-white mb-8">From <span className="text-emerald-400">Builder</span> to Leader</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
              <p>
                My journey: <span className="text-white font-medium">Developer → Solution Architect → Technical Program Manager.</span>
              </p>
              <p>
                This progression gave me something most TPMs don't have: <span className="text-white">deep technical credibility.</span> I can architect solutions, speak engineering language, and translate complex AI systems into business outcomes.
              </p>
              <p>
                At Applied Materials and RingCentral, I've led programs spanning AI/ML, cloud transformation, IoT, and enterprise platforms—consistently delivering measurable impact through clarity, execution discipline, and stakeholder alignment.
              </p>
              <p>
                Outside tech, I apply the same endurance mindset to long-distance running as a Half-Marathon finisher. The parallels are real: pace yourself, focus on the next milestone, finish strong.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-6">Certifications</h3>
                <ul className="space-y-3">
                  {[
                    "Google Cloud Generative AI Leader (2025)",
                    "AWS Certified Solutions Architect (2018)",
                    "Certified Scrum Master - CSM (2014)",
                    "Project Management Professional - PMP (2007)"
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-3 text-sm text-white/90">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-6">Education</h3>
                <ul className="space-y-4">
                  {[
                    { title: "PG Program, AI/ML", school: "UT Austin (2020)" },
                    { title: "PG Diploma, Business Mgmt", school: "IMT India" },
                    { title: "B.E. Electronics", school: "MITS India" }
                  ].map((edu) => (
                    <li key={edu.title} className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-white">{edu.title}</span>
                      <span className="text-xs text-muted-foreground">{edu.school}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
