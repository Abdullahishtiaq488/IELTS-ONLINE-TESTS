import Carousel from '@/components/ui/carousel';
import LatestTestsSection from '@/components/home/latest-tests-section';
import TipsSection from '@/components/home/tips-section';
import WhyUseSection from '@/components/home/why-use-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import FeaturesSection from '@/components/home/features-section';
import ContactSection from '@/components/home/contact-section';
import PartnersSection from '@/components/home/partners-section';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <h1 className="sr-only">The IELTS Project - Your Path to Higher Scores</h1>

      {/* Full-width component */}
      <section aria-labelledby="carousel-heading">
        <h2 id="carousel-heading" className="sr-only">Featured highlights</h2>
        <Carousel />
      </section>

      {/* Content sections with consistent spacing */}
      <div className="space-y-0">
        <section aria-labelledby="latest-tests-heading">
          <LatestTestsSection />
        </section>

        <section aria-labelledby="why-use-heading">
          <WhyUseSection />
        </section>

        {/* <section aria-labelledby="stats-heading">
          <StatsSection />
        </section> */}

        <section aria-labelledby="features-heading">
          <FeaturesSection />
        </section>

        <section aria-labelledby="testimonials-heading">
          <TestimonialsSection />
        </section>

        <section aria-labelledby="tips-heading">
          <TipsSection />
        </section>

        <section aria-labelledby="contact-heading">
          <ContactSection />
        </section>

        <section aria-labelledby="partners-heading">
          <PartnersSection />
        </section>
      </div>
    </div>
  );
}
