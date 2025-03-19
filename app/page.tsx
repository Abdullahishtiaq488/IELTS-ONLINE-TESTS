import Carousel from '@/components/ui/carousel';
import HeroSection from '@/components/HeroSection/hero-section';
import LatestTestsSection from '@/components/MockTests/latest-tests-section';
import TipsSection from '@/components/tips/tips-section';
import WhyUseSection from '@/components/home/why-use-section';
import StatsSection from '@/components/home/stats-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import FeaturesSection from '@/components/home/features-section';
import ContactSection from '@/components/home/contact-section';
import PartnersSection from '@/components/home/partners-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Full-width component */}
      <Carousel />

      {/* Content sections with consistent spacing */}
      <div className="space-y-8">
        <HeroSection />
        <LatestTestsSection />
        <WhyUseSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <TipsSection />
        <ContactSection />
        <PartnersSection />
      </div>
    </div>
  );
}
