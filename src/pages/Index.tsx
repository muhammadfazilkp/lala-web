import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PopularStoriesSection from "../components/PopularStoriesSection";
import StatsSection from "../components/StatsSection";
import StoriesSection from "../components/StoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <StoriesSection />
        <HowItWorksSection />
        <PopularStoriesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
