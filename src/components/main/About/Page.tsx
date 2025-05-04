import AboutSection from "./AboutSection"
import { useOutletContext } from "react-router-dom";

interface LayoutContext {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const About = () => {
  const { setOpenNav } = useOutletContext<LayoutContext>();

  return (
    <div onClick={() => setOpenNav(false)}>
      <AboutSection/>
    </div>
  )
}

export default About
