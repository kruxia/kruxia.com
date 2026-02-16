import { FileText, ClipboardList, CreditCard, Handshake } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const processes = [
  {
    icon: FileText,
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    title: 'Invoice Processing',
    description:
      'We extract data from PDF invoices, validate against purchase orders, and auto-approve matches — routing exceptions to a human reviewer with the discrepancy highlighted.',
    stats: [
      { before: '$12.50', value: '$0.18', label: 'Cost per invoice' },
      { before: '15 min', value: 'seconds', label: 'Processing time' },
      { value: '90%', label: 'Auto-approved' },
    ],
  },
  {
    icon: ClipboardList,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    title: 'Purchase Order Routing',
    description:
      'Our system analyzes POs against company policies, auto-approves routine orders from known vendors, and escalates exceptions with a plain-English explanation of the flag.',
    stats: [
      { before: '1–3 weeks', value: '1–2 days', label: 'Approval cycle' },
      { value: '70%', label: 'Auto-approved' },
    ],
  },
  {
    icon: CreditCard,
    iconBg: 'bg-warning/10',
    iconColor: 'text-warning',
    title: 'Refund Decisions',
    description:
      'We evaluate refund requests using purchase history, sentiment analysis, and policy rules. Clear-cut cases are handled instantly. Edge cases are flagged with a confidence score.',
    stats: [
      { before: '~8 hrs', value: '< 30s', label: 'Response time' },
      { before: '$5–$12', value: '$0.12', label: 'Cost per decision' },
    ],
  },
  {
    icon: Handshake,
    iconBg: 'bg-success/10',
    iconColor: 'text-success',
    title: 'Client Onboarding',
    description:
      'Automate document collection, compliance verification, and account setup. Every step is tracked, every handoff is automatic, and nothing falls through the cracks.',
    stats: [
      { value: '80%', label: 'Less paperwork' },
      { value: '100%', label: 'Audit trail' },
    ],
  },
];

const ProcessUseCasesSection = () => (
  <section id="use-cases" className="bg-light-section section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Use Cases
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Processes your competitors are already automating.
        </h2>
        <p className="text-muted-foreground text-lg">
          The workflows we automate include the cost controls and audit trails your business needs.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-5">
        {processes.map((proc) => (
          <AnimatedSection key={proc.title}>
            <div className="bg-card border border-border rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div
                className={`w-12 h-12 rounded-[14px] ${proc.iconBg} flex items-center justify-center mb-5`}
              >
                <proc.icon size={24} className={proc.iconColor} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {proc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {proc.description}
              </p>
              <div className="flex gap-6 pt-4 border-t border-border">
                {proc.stats.map((stat) => (
                  <div key={stat.label}>
                    {stat.before ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading text-base font-extrabold text-destructive/50 line-through decoration-destructive/40 tracking-tight">
                          {stat.before}
                        </span>
                        <span className="font-heading text-base font-extrabold text-success tracking-tight">
                          {stat.value}
                        </span>
                      </div>
                    ) : (
                      <div className="font-heading text-xl font-extrabold text-foreground tracking-tight">
                        {stat.value}
                      </div>
                    )}
                    <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessUseCasesSection;
