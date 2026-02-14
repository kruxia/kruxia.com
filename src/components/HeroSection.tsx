import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { focusContactName } from '@/lib/focusContact';

const HeroSection = () => (
  <section className="bg-dark-section relative overflow-hidden pt-16">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
      backgroundSize: '40px 40px',
    }} />

    <div className="container-narrow relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[90vh] py-20 px-6">
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wide uppercase mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          AI Automation for Your Business
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6 text-primary-foreground">
          Your business runs on processes.{' '}
          <span className="text-gradient-accent">Let AI run them for you.</span>
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-lg mb-10 leading-relaxed">
          Kruxia helps small and mid-size businesses implement AI workflow automation that saves time, controls costs, and never drops the ball. We handle the technology — you see the results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="#contact"
            onClick={focusContactName}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-xl shadow-accent/30"
          >
            Talk to Us <ArrowRight size={18} />
          </a>
          <a
            href="#problem"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-primary-foreground/90 hover:bg-white/5 transition-all"
          >
            See How It Works <ChevronDown size={18} />
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/50">
          <span>Operating since 2014</span>
          <span className="hidden sm:inline">·</span>
          <span>Open Source Technology</span>
          <span className="hidden sm:inline">·</span>
          <span>Chicago Metro Area</span>
        </div>
      </motion.div>

      {/* Right: Invoice card with orbital rings */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative max-w-[540px] justify-self-center lg:justify-self-end"
      >
        {/* Orbital rings — z-10 sits between background and card (z-[11]) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] pointer-events-none hidden sm:block z-10">
          <div className="orbital-ring orbital-ring-1">
            <div className="orbital-dot orbital-dot-1" />
          </div>
          <div className="orbital-ring orbital-ring-2">
            <div className="orbital-dot orbital-dot-2" />
          </div>
        </div>

        {/* Floating badges */}
        <div className="hidden sm:block absolute -top-4 -right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 shadow-lg text-sm font-bold text-primary-foreground animate-hero-float">
          ↓ <span className="text-success">98%</span> cost reduction
        </div>
        <div className="hidden sm:block absolute -bottom-3 -left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 shadow-lg text-sm font-bold text-primary-foreground animate-hero-float-delayed">
          ↻ Auto-recovery built in
        </div>

        {/* Invoice card — z-[11] above orbital rings, below floating badges (z-20) */}
        <div className="relative z-[11] bg-[#0b1222] rounded-2xl p-6 md:p-8 text-white shadow-2xl overflow-hidden border border-white/[0.08]">
          {/* Shimmer bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] shimmer-bar" />

          <div className="flex justify-between items-center mb-5 pb-4 border-b border-white/[0.08]">
            <span className="font-heading text-lg font-bold">Invoice Processing</span>
            <span className="text-[0.7rem] font-bold tracking-wide uppercase text-accent bg-accent/15 px-3 py-1 rounded-full">Live</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-[0.7rem] font-semibold tracking-widest uppercase text-white/40 mb-1">Manual Cost</div>
              <div className="font-heading text-3xl font-extrabold tracking-tight text-white/30 line-through decoration-destructive">$12.50</div>
            </div>
            <div>
              <div className="text-[0.7rem] font-semibold tracking-widest uppercase text-white/40 mb-1">With Kruxia</div>
              <div className="font-heading text-3xl font-extrabold tracking-tight text-success">$0.18</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-success bg-success/10 rounded-lg px-3 py-1.5 mb-5">
            ▼ $12.32 saved per invoice
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm text-white/70 px-3 py-2.5 bg-white/[0.04] rounded-xl border border-white/[0.05] transition-all hover:bg-white/[0.07]">
              <span className="w-7 h-7 rounded-lg bg-accent/15 text-accent text-[0.7rem] font-extrabold flex items-center justify-center shrink-0">AI</span>
              Extract data from PDF
              <span className="ml-auto text-xs font-semibold text-success font-heading">$0.08</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70 px-3 py-2.5 bg-white/[0.04] rounded-xl border border-white/[0.05] transition-all hover:bg-white/[0.07]">
              <span className="w-7 h-7 rounded-lg bg-accent/15 text-accent text-[0.7rem] font-extrabold flex items-center justify-center shrink-0">AI</span>
              Validate against purchase order
              <span className="ml-auto text-xs font-semibold text-success font-heading">$0.05</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70 px-3 py-2.5 bg-white/[0.04] rounded-xl border border-white/[0.05] transition-all hover:bg-white/[0.07]">
              <span className="w-7 h-7 rounded-lg bg-secondary/15 text-secondary text-[0.7rem] font-extrabold flex items-center justify-center shrink-0">✓</span>
              Auto-approve or route to reviewer
              <span className="ml-auto text-xs font-semibold text-success font-heading">$0.05</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
