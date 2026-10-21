import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import TrustedBrands from '@/components/TrustedBrands';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import CaseStudy from '@/components/CaseStudy';
import GrowthPartner from '@/components/GrowthPartner';
import Awards from '@/components/Awards';
import FounderTeam from '@/components/FounderTeam';
import FeaturedOn from '@/components/FeaturedOn';
import FAQ from '@/components/FAQ';
import BlogInsights from '@/components/BlogInsights';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="top">
        <Hero />
        <StatsBand />
        <TrustedBrands />
        <Reviews />
        <Services />
        <CaseStudy />
        <GrowthPartner />
        <Awards />
        <FounderTeam />
        <FeaturedOn />
        <FAQ />
        <BlogInsights />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
