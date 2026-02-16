import { Calendar, GitBranch, Gauge, Server } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const trustPoints = [
  { icon: Calendar, metric: 'Since 2014', desc: 'A decade of delivering production systems, not PowerPoint decks.' },
  { icon: GitBranch, metric: 'Open Source', desc: 'Our technology is open source — you can inspect it, modify it, and you’re never locked in.' },
  { icon: Gauge, metric: 'Cost Controlled', desc: 'Every AI call is tracked and budget-enforced. You’ll always know what you’re spending.' },
  { icon: Server, metric: 'Runs Anywhere', desc: 'So efficient it runs on a $15 mini-computer. No expensive infrastructure required.' },
];

const industries = [
  'Health Insurance',
  'Marketing Services',
  'Publishing',
  'Retail Supply Chain',
  'Think Tanks',
  'Nonprofit',
  'Startups',
];

const WhyKruxiaSection = () => (
  <section id="why-kruxia" className="bg-dark-section section-padding">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Why Kruxia
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            We Don't Just Advise. We Build and Deploy.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            Kruxia builds solutions on open-source so <span className="font-bold text-white/90">you own your technology</span> with no vendor lock-in. Operating since 2014, we've built production systems for health insurers, publishers, retail suppliers, marketing services firms, and data science startups. That experience is why we created <a href="https://kruxiaflow.com" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Kruxia Flow</a> — the AI workflow engine — and why we deploy it for our clients.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            When you work with us, you get the team that built the technology, not a reseller reading documentation.
          </p>
          <div className="border-l-4 border-secondary pl-6 py-2">
            <p className="font-heading text-xl sm:text-2xl font-bold leading-snug text-white/90">
              Unlike strategy consultants who deliver decks or generic developers who can't architect production systems, Kruxia combines architectural sophistication with hands-on implementation.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 gap-5">
            {trustPoints.map((tp) => (
              <div key={tp.metric} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <tp.icon size={20} className="text-accent mb-3" />
                <p className="font-bold text-lg mb-1">{tp.metric}</p>
                <p className="text-sm text-white/60 leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Industries We've Served</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span key={industry} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default WhyKruxiaSection;
