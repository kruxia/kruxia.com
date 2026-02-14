import { useState } from 'react';
import { Building2, Briefcase, Factory, Truck, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { focusContactName } from '@/lib/focusContact';

const useCases = [
  {
    id: 'accounting',
    icon: Building2,
    label: 'Accounting Firms',
    headline: 'Reconciliation, compliance, and client onboarding — automated',
    description:
      'Accounting firms are leading AI adoption, but moving from ChatGPT experiments to production workflows requires the right infrastructure. We automate the multi-step processes that consume your team\'s time — with complete audit trails your regulators will love.',
    highlights: [
      'AI-powered multi-entity reconciliation with immutable audit trail',
      'Automated client onboarding document processing and verification',
      'Regulatory filing preparation with built-in compliance checks',
      'Every AI decision tracked — ready for auditors anytime',
    ],
    cta: 'Talk to Us About Accounting Automation',
    statNumber: '46%',
    statHeadline: 'of accounting firms already use AI daily',
    statBody:
      '64% are planning AI investments this year. The firms that move to production workflows first will have a compounding advantage. We bridge the gap between experiments and reliable, auditable automation.',
    statSource: 'Intuit QuickBooks Accountant Technology Survey, 2025',
  },
  {
    id: 'services',
    icon: Briefcase,
    label: 'Professional Services',
    headline: 'From quote-to-cash in days, not weeks',
    description:
      'Professional services firms run on pipelines that span 5–6 tools. CRM to contracts to billing to project management — every handoff is a place where things get lost. We connect and automate the entire chain.',
    highlights: [
      'AI contract review in seconds instead of hours',
      'Automated proposal generation with dynamic pricing',
      'End-to-end quote-to-cash automation across your tool stack',
      'Exception routing so the right person handles the right issue',
    ],
    cta: 'Talk to Us About Services Automation',
    statNumber: '3.2 hrs',
    statHeadline: 'average time spent reviewing each contract',
    statBody:
      'AI contract review takes seconds. Combine that with automated approval routing and billing integration, and weeks of manual work collapse into days — so your team focuses on client delivery, not paperwork.',
    statSource: 'LegalOn 2025 In-House Legal Technology Survey',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    label: 'Manufacturing',
    headline: 'Compliance documentation that writes itself',
    description:
      'Manufacturing companies face $29,100 per employee in regulatory costs. OSHA, ISO, FDA — the documentation burden is enormous. AI workflows automate the creation, tracking, and auditing of compliance documentation with an immutable record.',
    highlights: [
      'Automated quality documentation with AI-powered analysis',
      'Supplier management workflows across ERP and MES',
      'Production scheduling with intelligent exception handling',
      'Complete audit trail for regulatory compliance',
    ],
    cta: 'Talk to Us About Manufacturing Automation',
    statNumber: '$29,100',
    statHeadline: 'per employee in annual regulatory costs',
    statBody:
      'AI-powered compliance workflows cut audit preparation time dramatically while maintaining bulletproof records. Automate the documentation burden so your team focuses on production.',
    statSource: 'National Association of Manufacturers (NAM)',
  },
  {
    id: 'distribution',
    icon: Truck,
    label: 'Distribution',
    headline: 'Auto-approve the routine, escalate the exceptions',
    description:
      'Distribution companies process thousands of purchase orders, invoices, and vendor interactions monthly. Most are routine. AI handles the bulk that follow the rules while routing exceptions to the right person instantly.',
    highlights: [
      'Auto-approve routine POs from known vendors within policy',
      'AI-powered invoice matching with discrepancy detection',
      'Vendor performance tracking and automated reporting',
      'Inventory reconciliation across locations and systems',
    ],
    cta: 'Talk to Us About Distribution Automation',
    statNumber: '90%',
    statHeadline: 'reduction in order processing time',
    statBody:
      'Automation eliminates manual data entry and approval bottlenecks. Your team stops spending their day on purchase orders that follow the same rules every time and focuses on the exceptions that matter.',
    statSource: 'National Association of Wholesaler-Distributors (NAW)',
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="industries" className="bg-light-section section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Industries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for How Your Business Actually Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're in accounting, professional services, manufacturing, or distribution — we've mapped the automation opportunities in your industry.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  i === active
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                }`}
              >
                <uc.icon size={16} />
                {uc.label}
              </button>
            ))}
          </div>

          {/* Two-column content */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: content */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {current.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {current.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {current.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-success" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={focusContactName}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  {current.cta} &rarr;
                </a>
              </div>

              {/* Right: stat card */}
              <div className="rounded-xl bg-primary/5 border border-primary/10 p-6 lg:p-8">
                <div className="text-4xl font-extrabold text-accent font-heading mb-2">
                  {current.statNumber}
                </div>
                <p className="text-lg font-bold text-foreground mb-3">
                  {current.statHeadline}{current.statSource && '*'}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {current.statBody}
                </p>
                {current.statSource && (
                  <p className="text-xs text-muted-foreground/60 mt-4 pt-3 border-t border-primary/10">
                    *{current.statSource}
                  </p>
                )}
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Don't see your industry? We probably cover it.{' '}
            <a href="#contact" onClick={focusContactName} className="text-accent font-semibold hover:underline">Get in touch</a>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default UseCasesSection;
