import AnimatedSection from './AnimatedSection';

const NewsletterSection = () => {
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

          <div className="flex justify-center">
            <iframe
              src="https://kruxia.substack.com/embed"
              width="480"
              height="150"
              className="max-w-full rounded-lg overflow-hidden"
              style={{ border: 'none', background: 'transparent' }}
              title="Subscribe to Kruxia Newsletter"
            />
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Free, weekly. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsletterSection;
