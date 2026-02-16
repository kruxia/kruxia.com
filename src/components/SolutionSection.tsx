import { Zap, Brain, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: Zap,
    title: 'Automate the Work Nobody Wants to Do',
    desc: <>Invoice processing, purchase order routing, refund decisions, data extraction — <a href="https://kruxiaflow.com" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Kruxia Flow</a> handles the repetitive, multi-step processes that eat your team's time.</>,
    proof: 'Give your team back hours every week',
  },
  {
    icon: Brain,
    title: 'Make Smarter Decisions, Faster',
    desc: 'Our workflows analyze contracts in seconds instead of hours. Exceptions route to the right person automatically. Low-risk items auto-approve while complex cases get human judgment.',
    proof: 'Approvals in days, not weeks',
  },
  {
    icon: Shield,
    title: 'Never Lose a Transaction, Never Blow Your Budget',
    desc: 'Every workflow survives crashes and picks up exactly where it left off. Every AI call is tracked and budget-enforced. Complete audit trail for every decision.',
    proof: 'Complete cost visibility — no surprise bills',
  },
];

const SolutionSection = () => (
  <section id="solution" className="bg-alt-section section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" /> How We Help
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Automation That Actually Works
        </h2>
        <p className="text-muted-foreground text-lg">
          We automate your operations with cost controls, crash recovery, and audit trails built in.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.12}>
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 flex-1">{f.desc}</p>
              <div className="rounded-lg bg-success/10 border border-success/20 px-4 py-3">
                <p className="text-sm font-semibold text-success">{f.proof}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
