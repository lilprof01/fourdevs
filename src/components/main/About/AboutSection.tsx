
import Footer from '@/components/UI/Footer'
import ActionSection from '@/components/UI/ActionSection'
import Image from './ImageCarousel'
import bgImage from '../../../assets/AboutImage.png'
import FAQ from '../FAQ'

const AboutSection = () => {
  return (
    <div>
      <main className='text-center mt-10 mb-10'>
        <h1 className='text-2xl text-primary font-semibold aboutText'>About Us</h1>
      </main>
      <div className='max-sm:px-10 px-20 lg:px-28'>
        <h1 className='font-semibold text-5xl max-sm:text-3xl capitalize text-center'>Who we are</h1>
        <p className='mt-10 pElement text-text max-sm:text-[16px] text-xl font-semibold text-center'>FOURDEVS is a dynamic digital services agency built to deliver. From startups to established companies, we help ambitious teams build world-class software, design intuitive exepriences, and streamline their digital operations. We're not just task excutors-we are creative partners committed to the full life cycle of your project.</p>
      </div>

      <main>
        <Image/>
      </main>

      <div className='max-sm:px-4 text-center px-20 lg:px-28 mt-16'>
        <h1 className='text-2xl mb-3 max-sm:mb-1 text-center text-primary font-semibold aboutText'>Why We Exist</h1>
        <h2 className='text-center max-sm:text-3xl font-semibold text-5xl capitalize'>Our Mission</h2>
        <p className='mt-10 max-sm:mt-5 pElement text-zinc-800 max-sm:text-[16px] text-xl font-semibold'>Our mission is simple - to transform complex ideals into powerful digital products that perfom. We believe in creating solution that are not just functional, but scalable, beautiful and future ready.</p>
      </div>

      <div className='max-sm:px-10 px-20 lg:px-28 mt-16'>
        <h1 className='font-semibold max-sm:text-3xl text-5xl text-center max-sm:mb-5 mb-10 capitalize'>What makes us different?</h1>
        <ul className='list-disc max-sm:text-[16px] pElement px-6 text-zinc-800 text-xl'>
          <li>Gid-Based Expertise: We handle focused, fast-moving projects with prision.</li>
          <li>Transparent process: You know exactly where your project stand at every stage.</li>
          <li>Design-Driven Execution: We balance engineering power user design thinking.</li>
          <li>Global Reach: We've worked with clients across continents adapting to needs and scaling</li>
        </ul>
      </div>

      <section className='max-sm:px-10 px-20 lg:px-28 mt-16'>
        <h2 className='font-semibold max-sm:text-2xl text-3xl  mb-3 capitalize'>Core Values:</h2>
        <ul className='list-disc max-sm:text-[16px] pElement px-6 text-zinc-800 text-xl'>
          <li>Innovation - We embrace change and continuosly evolve.</li>
          <li>Integrity - We do what we say and say what we mean</li>
          <li>Speed - We deliver on time, every time.</li>
          <li>Collaboration - We grow through team work and client synergy</li>
          <li>Excellence- We strive for greatness code in every line of code and every pixel we place. </li>
        </ul>
      </section>

      <main className='max-sm:px-10 px-20 lg:px-28 mt-16'>
        <h1 className='font-semibold max-sm:text-2xl text-3xl  mb-3 capitalize'>Team & Vision</h1>
        <p className='text-zinc-800 max-sm:text-lg text-[16px] font-semibold'>Vision Statement: To empower businesses through scalable, efficent, and beautiful digital solutions.</p>
        <p className='text-zinc-800 text-xl max-sm:text-[16px] font-semibold'>Optional- [Photos or avatars of team members with short bios]</p>
        <p className='max-sm:text-xl text-3xl  mb-3'>Core Values:</p>
        <ul className='list-disc pElement max-sm:text-[16px] px-6 text-zinc-800 text-xl font-semibold'>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Speed</li>
          <li>Collaboration</li>
          <li>Excellence</li>
        </ul>
      </main>
      
      <div>
        <FAQ />
      </div>

      <div>
        <ActionSection/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutSection
