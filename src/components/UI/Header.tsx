import CtaBtn from "./CtaBtn"
import logo from "/logo.png"

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center align-middle py-5 px-5 sm:px-20">
      <div className="h-full">
        <img alt="logo" src={logo} className="object-fit object-center" />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center align-middle gap-12">
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="#">Home</a></li>
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="#">About Us</a></li>
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="#">Services</a></li>
          <li className="hover:text-primary transition-all duration-300 text-lg"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <CtaBtn style="sm:block py-2 px-3.5" text="Submit a Gig" />
    </header>
  )
}

export default Header
