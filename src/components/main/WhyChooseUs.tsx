import check from "/icons/check.svg";
import flash from "/icons/flash.svg";
import tools from "/icons/tools.svg";
import mirror from "/icons/mirror.svg";
import illustration from "/illustration/illustrations.png";

const WhyChooseUs = () => {

  return (
    <section className="px-10 lg:px-20 py-10">
      <div className="h-full w-full flex flex-col lg:flex-row items-center align-middle gap-2">
        {/* details section */}
        <div className="h-full w-full items-center lg:items-baseline lg:text-left flex flex-col justify-center align-middle gap-10">
          <div className="flex flex-col justify-center align-middle gap-4 w-[90%] sm:w-full">
            <p className="text-lg text-deep">| Why Choose Us</p>
            <p className="text-2xl sm:text-4xl font-medium">Why FOURDEVS</p>
            <p className="text-[16px] sm:text-base">
              We don’t just complete projects — we build partnerships,
              prioritize quality, and deliver results that speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%] mt-5">
            <div className="w-full h-full flex justify-between items-center align-middle gap-3 border border-[#D9D9D9] p-3 rounded-xl">
              <div className="bg-deep rounded-lg p-2">
                <img alt="icon" src={check} />
              </div>
              <p>Experienced. Trusted. Proven.</p>
            </div>
            <div className="w-full h-full flex justify-between items-center align-middle gap-3 border border-[#D9D9D9] p-3 rounded-xl">
              <div className="bg-deep rounded-lg p-2">
                <img alt="icon" src={flash} />
              </div>
              <p>Experienced. Trusted. Proven.</p>
            </div>
            <div className="w-full h-full flex justify-between items-center align-middle gap-3 border border-[#D9D9D9] p-3 rounded-xl">
              <div className="bg-deep rounded-lg p-2">
                <img alt="icon" src={tools} />
              </div>
              <p>Experienced. Trusted. Proven.</p>
            </div>
            <div className="w-full h-full flex justify-between items-center align-middle gap-3 border border-[#D9D9D9] p-3 rounded-xl">
              <div className="bg-deep rounded-lg p-2">
                <img alt="icon" src={mirror} />
              </div>
              <p>Experienced. Trusted. Proven.</p>
            </div>
          </div>
        </div>

        {/* illustration */}
        <div className="h-full w-full p-4 rounded-xl relative flex justify-center items-center align-middle">
          <img alt="illustration" src={illustration} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
