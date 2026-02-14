import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '10+', label: 'Years operating', sublabel: 'Since 2014' },
  { value: '$100K–$300K', label: 'Average annual savings', sublabel: 'From process automation' },
  { value: '$0.18', label: 'AI cost per invoice', sublabel: 'vs $12.50 manual' },
  { value: '74%', label: 'Of SMBs would adopt AI', sublabel: 'With clearer ROI evidence' },
];

const SocialProofSection = () => (
  <section id="proof" className="bg-light-section section-padding">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Results
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-number mb-2" style={{ color: 'hsl(42 100% 45%)' }}>{s.value}</div>
              <p className="font-semibold text-foreground text-sm mb-1">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Placeholder testimonials */}
      <AnimatedSection delay={0.2}>
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {[
            { quote: 'Kruxia automated our entire invoice processing pipeline. We went from 400 hours of manual work to fully autonomous AI processing.', name: 'Coming Soon', role: 'Client testimonials' },
            { quote: 'The audit trail alone justified the investment. Every decision is documented, every cost is tracked. Our auditors love it.', name: 'Coming Soon', role: 'Client testimonials' },
          ].map((t, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6">
              <p className="text-foreground leading-relaxed italic mb-4">"{t.quote}"</p>
              <p className="text-sm font-semibold text-muted-foreground">{t.name} — {t.role}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SocialProofSection;
