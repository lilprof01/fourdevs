import { Link } from "react-router-dom"
import CtaBtn from "./CtaBtn"
import logo from "/logo.png"

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center align-middle py-5 px-20">
      <div className="h-full">
        <img alt="logo" src={logo} className="object-fit object-center" />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center align-middle gap-12">
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="/">Home</a></li>
          <li className="hover:text-primary transition-all duration-300 text-lg"><Link to="/about">About Us</Link></li>
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="services">Services</a></li>
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <CtaBtn style="hidden sm:block py-2 px-3.5" text="Submit a Gig" />
    </header>
  )
}

export default Header
