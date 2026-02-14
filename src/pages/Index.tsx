import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ProcessUseCasesSection from '@/components/ProcessUseCasesSection';
import UseCasesSection from '@/components/UseCasesSection';
import WhyKruxiaSection from '@/components/WhyKruxiaSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessUseCasesSection />
      <UseCasesSection />
      <WhyKruxiaSection />
      <HowItWorksSection />
      <ContactSection />
      <NewsletterSection />
    </main>
    <Footer />
  </>
);

export default Index;
