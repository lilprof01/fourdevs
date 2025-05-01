// import React from 'react'
import CtaBtn from "./CtaBtn"
import bgImage from '../../assets/AboutImage.png'

const ActionSection = () => {
  return (
    <div
        className="md-[10rem] lg:mx-[15rem] mx-[15rem] max-sm:mx-[2rem] sm:mx-10 md:mx-14 p-5 max-sm:px-2 px-14 max-sm:py-3 py-14 my-10 mb-22 w-[100] text-center rounded-2xl text-white place-content-center"
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
        <h1 className='text-2xl mb-5 max-sm:mb-2 text-white font-semibold about'>Ready</h1>
        <h1 className='text-3xl max-sm:text-2xl my-2 font-semibold text-center text-white z-20'>Have a Project in Mind? Let’s Build It</h1>
        <p className='max-sm:text-[16px] text-xl text-zinc-300'>Whether you're launching a new product, or refreshing your brand presence, our team is equipped to guide and build alongside you from day one. We take your ideas seriously, craft with precision, and deliver with pride ensuring your digital vision becomes a high-impact reality.</p>
        <div className='place-items-center mt-8 '>
            <CtaBtn style="hidden sm:block py-3 px-8 cursor-pointer" text="Submit a Gig" />
        </div>
    </div>
  )
}

export default ActionSection
