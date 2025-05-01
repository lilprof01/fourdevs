import { Features, Hero, Testimonial, WhyChooseUs, FAQ } from "@/components/main";
import { Header } from "@/components/UI";
const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <FAQ />
      <Testimonial />
    </main>
  );
};

export default LandingPage;
