import { RotateCcw, Clock, Eye, Bot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const problems = [
  {
    icon: RotateCcw,
    title: 'Manual Recovery Eats Your Time',
    desc: 'When a process fails halfway through, someone has to trace what completed, what didn\'t, and restart from scratch. Every failure costs hours of skilled labor.',
  },
  {
    icon: Clock,
    title: 'Approvals Bottleneck Everything',
    desc: 'Purchase orders and invoices sit waiting for approvals that take weeks instead of days. Your cash flow suffers while your team chases signatures.',
  },
  {
    icon: Eye,
    title: 'Nobody Knows Where Things Stand',
    desc: 'When processes span CRM, email, spreadsheets, and accounting software, no single person or system knows the full status of anything.',
  },
  {
    icon: Bot,
    title: 'AI Pilots Stall Before Going Live',
    desc: 'Most AI projects never reach production — often because costs spiral without controls. Without experienced guidance and cost controls, automation becomes more expensive than the manual process.',
  },
];

const ProblemSection = () => (
  <section id="problem" className="bg-light-section section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" /> The Problem
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Every business is told to use AI.<br />Almost none know how to start.
        </h2>
        <p className="text-muted-foreground text-lg">
          The processes that keep your business running — invoices, approvals, purchase orders, refunds — still depend on email chains, spreadsheets, and someone remembering to follow up.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 h-full border border-border/60 hover:shadow-lg hover:shadow-accent/5 transition-all hover:-translate-y-1 border-t-2 border-t-transparent hover:border-t-destructive group">
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <p.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
