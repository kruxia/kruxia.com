import { useState, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const NewsletterSection = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="bg-alt-section section-padding">
      <div className="container-narrow max-w-2xl text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Newsletter
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Get the Kruxia Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Practical AI automation strategies, real cost breakdowns, and use cases you can act on. No hype, no fluff — just what works. Published weekly.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-success font-semibold">
              <CheckCircle size={20} />
              You're subscribed! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                required
                type="email"
                maxLength={255}
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:brightness-110 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Free, weekly. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
