import { FeaturesCard } from "../UI"
import laptop from "/icons/laptop.png";
import mobile from "/icons/mobile.png";
import palette from "/icons/palette.png";
import rotate from "/icons/rotate.png";
import broadcast from "/icons/broadcast.png";
import chart from "/icons/chart.png";


const Features = () => {
  return (
    <section className="px-20 py-10">
      <div className="text-center flex flex-col justify-center items-center w-[65%] gap-8 m-auto mb-10">
        <h3 className="text-primary text-lg">Features |</h3>
        <h2 className="text-4xl font-medium">What We Do</h2>
        <p className="text-text text-xl"> From concept to execution, we deliver digital services that move your business forward — fast, flexible, and built to last.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeaturesCard icon={laptop} title="Web Development" text="We build high-performance, secure, and scalable websites tailored to your brand and goals  optimized for every screen size and built with future-proof tech." />
        <FeaturesCard icon={mobile} title="App Development" text="From concept to code, we develop mobile apps for iOS and Android that are functional, user-friendly, and built to scale with your business." />
        <FeaturesCard icon={palette} title="UI/UX Design" text="Great design isn’t just about looks — it’s about experience. We create clean, intuitive interfaces that make navigation effortless and user journeys seamless." />
        <FeaturesCard icon={rotate} title="Automation & Integration" text="We connect your tools, platforms, and workflows so your business runs smarter from API setups to automated systems that save time and boost efficiency." />
        <FeaturesCard icon={broadcast} title="Social Media Marketing" text="We craft strategies that grow your brand on platforms like Instagram, Twitter, and LinkedIn — building engagement and trust where your audience lives." />
        <FeaturesCard icon={chart} title="SEO Optimization" text="We help your site rank higher with on-page SEO, technical audits, keyword targeting and performance enhancements driving consistent, organic traffic." />
      </div>
    </section>
  )
}

export default Features
