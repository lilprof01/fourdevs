import { FAQ, Features, Hero, Testimonial, WhyChooseUs } from "@/components/main";
import { Header } from "@/components/UI";
import ActionSection from "@/components/UI/ActionSection";
import Footer from "@/components/UI/Footer";
const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <FAQ />
      <Testimonial />
      <ActionSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
