import { 
  Navigation, 
  Footer, 
  HeroSection,
  ValuePropositions,
  ResearchCallout,
  FeaturedCaseStudies
} from '@/components';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Full-Screen Hero with Rotating Video Backgrounds */}
        <HeroSection />

        {/* Value Propositions - Confidence / Innovation / ROI */}
        <ValuePropositions />

        {/* Featured Case Studies */}
        <FeaturedCaseStudies />

        {/* Research Callout - NECS Study */}
        <ResearchCallout />
      </main>
      <Footer />
    </>
  );
}
