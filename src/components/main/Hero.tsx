import { CtaBtn, TrustedUser } from "../UI";
import heroImg from "/hero-img.png"

const Hero = () => {
  return (
    <section className="bg-light flex justify-center items-center align-middle px-10 lg:px-20 py-10">
      <div className="h-full w-full flex flex-col lg:flex-row items-center align-middle gap-20">
        {/* left div */}
        <div className="h-full w-full flex flex-col justify-center items-center lg:items-baseline text-center lg:text-left gap-5">
          <TrustedUser />
          <h1 className="text-3xl sm:text-6xl font-medium">Building Digital <span className="text-deep">Solutions</span> For Every Vision</h1>
          <p className="sm:text-2xl text-text w-[90%]">Your Trusted Partner For Delivering High-Quality Gigs And Digital Solutions.</p>
          <div className="flex justify-center lg:justify-between items-center align-middle gap-4 sm:gap-9">
            <CtaBtn style="py-3 px-6 sm:px-8 whitespace-nowrap" text="Get Started" />
            <p className="text-deep sm:text-lg">Learn More &rarr;</p>
          </div>
        </div>

        {/* right div */}
        <div className="h-full sm:w-[80%] lg:flex justify-center items-center align-middle">
          <img alt="hero image" src={heroImg} className="object-fit object-center w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
