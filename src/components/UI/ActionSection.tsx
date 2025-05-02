// import React from 'react'
import CtaBtn from "./CtaBtn";
import bgImage from "../../assets/AboutImage.png";

const ActionSection = () => {
  return (
    <section className="px-10 sm:px-20 py-10">
      <div
        className="p-8 sm:p-15 mb-10 w-full text-center rounded-2xl text-white place-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="mb-5 max-sm:mb-2 text-white font-semibold">| Ready</h1>
        <h1 className="text-4xl max-sm:text-2xl my-2 font-medium text-center text-white z-20">
          Have a Project in Mind? Let’s Build It
        </h1>
        <p className="max-sm:text-[16px] text-xl text-[#DBD9D9E5] sm:w-[85%] mx-auto">
          Whether you're launching a new product, or refreshing your brand
          presence, our team is equipped to guide and build alongside you from
          day one. We take your ideas seriously, craft with precision, and
          deliver with pride ensuring your digital vision becomes a high-impact
          reality.
        </p>
        <div className="place-items-center mt-8 ">
          <CtaBtn style="py-3 px-8 cursor-pointer" text="Submit a Gig" />
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
