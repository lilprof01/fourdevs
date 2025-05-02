import { Link } from "react-router-dom"
import CtaBtn from "./CtaBtn"
import logo from "/logo.png"

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center align-middle py-5 px-5 sm:px-20">
      <div className="h-full">
        <Link to={'/'}><img alt="logo" src={logo} title="logo-image" className="object-fit object-center" /></Link>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center align-middle gap-12 links red">
          <li className="hover:text-deep transition-all duration-300 text-lg"><Link to="/">Home</Link></li>
          <li className="hover:text-deep transition-all duration-300 text-lg"><Link to="/about">About Us</Link></li>
          <li className="hover:text-deep transition-all duration-300 text-lg"><Link to="/service">Services</Link></li>
          <li className="hover:text-deep transition-all duration-300 text-lg"><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <CtaBtn style="hidden sm:block py-2 px-3.5" text="Submit a Gig" />

      {/* Hamburger menu */}

    </header>
  )
}

export default Header
