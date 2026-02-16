import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mvzbaqgq', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-dark-section section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Get Started
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Stop Losing Money to Manual Processes?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Tell us about your business and the processes that keep you up at night. We'll show you what we can do for you — with real numbers.
            </p>
            <div className="space-y-3 mt-8">
              {[
                'We respond within 1 business day',
                'No sales pitch — just a real conversation',
                'Free 30-minute discovery call',
              ].map((promise) => (
                <div key={promise} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                    <span className="text-success text-xs">✓</span>
                  </span>
                  {promise}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thanks for reaching out!</h3>
                <p className="text-white/70">We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Name *</label>
                  <input
                    id="contact-name"
                    required
                    name="name"
                    type="text"
                    maxLength={100}
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Email *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={255}
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Company</label>
                  <input
                    name="company"
                    type="text"
                    maxLength={100}
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Company Size</label>
                  <select name="company_size" className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option value="" className="text-foreground">Select size</option>
                    <option value="1-19" className="text-foreground">1–19 employees</option>
                    <option value="20-99" className="text-foreground">20–99 employees</option>
                    <option value="100-499" className="text-foreground">100–499 employees</option>
                    <option value="500+" className="text-foreground">500+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">What processes are your biggest headaches?</label>
                  <textarea
                    name="message"
                    rows={3}
                    maxLength={1000}
                    className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell us about the processes you'd like to automate..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground hover:brightness-110 transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>Let's Talk <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
