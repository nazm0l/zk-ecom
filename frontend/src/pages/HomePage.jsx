import ContactDetailsSection from "../components/ContactDetailsSection";
import CustomProjectSection from "../components/CustomProjectSection";
import FeatureCards from "../components/FeatureCards";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContactDetailsSection />
      <CustomProjectSection />
      <FeatureCards />
      <ProductSection />
    </>
  );
}
