import { CtaBtn, TrustedUser } from "../UI";
import heroImg from "/hero-img.png"

const Hero = () => {
  return (
    <section className="h-screen bg-secondary flex justify-center items-center align-middle px-20 py-14">
      <div className="h-full w-full flex items-center align-middle gap-20">
        {/* left div */}
        <div className="h-full w-full flex flex-col justify-center gap-5">
          <TrustedUser />
          <h1 className="text-4xl sm:text-6xl font-medium">Building Digital <span className="text-primary">Solutions</span> For Every Vision</h1>
          <p className="text-2xl text-[#5A5A5A] w-[90%]">Your Trusted Partner For Delivering High-Quality Gigs And Digital Solutions.</p>
          <div className="flex items-center align-middle gap-9">
            <CtaBtn style="py-3 px-8 whitespace-nowrap" text="Get Started" />
            <p className="text-primary text-lg">Learn More &rarr;</p>
          </div>
        </div>

        {/* right div */}
        <div className="hidden h-full w-[80%] lg:flex justify-center items-center align-middle">
          <img alt="hero image" src={heroImg} className="object-fit object-center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
