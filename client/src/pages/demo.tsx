import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "wouter";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </a>
          </Link>
          <span className="font-bold text-xl tracking-tighter">SANJAY GUPTA</span>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO & Accessibility Auditor - Demo</h1>
            <p className="text-xl text-muted-foreground">Watch the Vibe Coding process in action.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl"
          >
            <video 
              src="/assets/seo-demo.mp4" 
              controls 
              className="w-full h-full object-contain"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link href="/case-study/vibe-coding">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                Read the Case Study
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function Button({ children, className, size, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`inline-flex items-center justify-center font-bold transition-all ${size === 'lg' ? 'h-12 px-6 text-lg' : 'h-10 px-4'} ${className}`}
    >
      {children}
    </button>
  );
}
