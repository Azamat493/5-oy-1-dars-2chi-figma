import AnyTimSection from "./components/AnyTimeSection";
import CostSection from "./components/CostSection";
import DashboardSection from "./components/DashboardSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ProductSection from "./components/ProductSection";
import StatsSection from "./components/StatsSection";
import SupportSection from "./components/SupportSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <DashboardSection />
      <SupportSection />
      <CostSection />
      <AnyTimSection />
      <ProductSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default App;