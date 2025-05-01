import { FAQ, Features, Hero, Testimonial, WhyChooseUs } from "@/components/main";
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
