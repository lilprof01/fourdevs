import { Features, Hero, WhyChooseUs } from "@/components/main";
import FAQ from "@/components/main/FAQ";
import { Header } from "@/components/UI";
const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
};

export default LandingPage;
