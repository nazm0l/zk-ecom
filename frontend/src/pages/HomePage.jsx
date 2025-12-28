import ContactDetailsSection from "../components/ContactDetailsSection";
import CustomProjectSection from "../components/CustomProjectSection";
import FeatureCards from "../components/FeatureCards";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContactDetailsSection />
      <CustomProjectSection />
      <FeatureCards />
    </>
  );
}
