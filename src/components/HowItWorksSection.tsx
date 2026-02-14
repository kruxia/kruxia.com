import { Phone, Map, Wrench, LifeBuoy } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  { icon: Phone, title: 'Discovery Call', desc: 'We learn about your business, map your processes, and identify the highest-value automation opportunities.' },
  { icon: Map, title: 'Assessment & Roadmap', desc: 'We deliver a clear report: which processes to automate first, expected ROI, technical requirements, and a phased plan.' },
  { icon: Wrench, title: 'Implementation', desc: 'We build and deploy your AI workflows. You see results — working automation, cost tracking, audit trails.' },
  { icon: LifeBuoy, title: 'Ongoing Support', desc: 'From training and support to fully-managed service — we meet you where you are. You own your technology: No dependency, no lock-in.' },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-alt-section section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" /> How It Works
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          From First Call to Running Workflows in Weeks
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Gradient connection line */}
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20" />

        {steps.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.12}>
            <div className="text-center relative">
              <div className="p-1 rounded-full bg-card mx-auto mb-4 relative z-10 w-fit">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <s.icon size={22} className="text-accent" />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
