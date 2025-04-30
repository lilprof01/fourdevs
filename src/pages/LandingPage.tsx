import { Features, Hero, WhyChooseUs } from "@/components/main";
import Faq from "@/components/main/Faq";
import { Header } from "@/components/UI";
const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Faq />
    </main>
  );
};

export default LandingPage;
