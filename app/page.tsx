import Carousel from '@/components/ui/carousel';
import HeroSection from '@/components/hero-section';
import LatestTestsSection from '@/components/latest-tests-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Full-width component */}
      <Carousel />

      {/* Content sections with consistent spacing */}
      <div className="space-y-8">
        <HeroSection />
        <LatestTestsSection />
      </div>
    </div>
  );
}
