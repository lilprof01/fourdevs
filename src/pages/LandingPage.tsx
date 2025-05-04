import { FAQ, Features, Hero, Testimonial, WhyChooseUs } from "@/components/main";
import ActionSection from "@/components/UI/ActionSection";
import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandingPage = () => {
  const { setOpenNav } = useOutletContext<LayoutContext>();

  return (
    <main onClick={() => setOpenNav(false)}>
      <Hero />
      <Features miniTitle="Features |" title="What We Do" />
      <WhyChooseUs />
      <FAQ />
      <Testimonial />
      <ActionSection />
    </main>
  );
};

export default LandingPage;
