import { Link, useLocation } from "react-router-dom"
import CtaBtn from "./CtaBtn"
import logo from "/logo.png"
import React from "react";

interface headerProps {
  openNav: Boolean;
  handleOpenNav: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Header: React.FC<headerProps> = ({ openNav, handleOpenNav }) => {
  const pathName = useLocation();
  return (
    <header className="w-full flex justify-between items-center align-middle py-5 px-5 sm:px-20">
      <div className="h-full">
        <Link to={'/'}><img alt="logo" src={logo} title="logo-image" className="object-fit object-center" /></Link>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center align-middle gap-12 links">
          <li className={`hover:text-deep transition-all duration-300 text-lg ${pathName.pathname === "/" ? 'active' : ''}`}><Link to="/">Home</Link></li>
          <li className={`hover:text-deep transition-all duration-300 text-lg ${pathName.pathname === "/about" ? 'active' : ''}`}><Link to="/about">About Us</Link></li>
          <li className={`hover:text-deep transition-all duration-300 text-lg ${pathName.pathname === "/service" ? 'active' : ''}`}><Link to="/service">Services</Link></li>
          <li className={`hover:text-deep transition-all duration-300 text-lg ${pathName.pathname === "/contact" ? 'active' : ''}`}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <CtaBtn style="hidden lg:block py-2 px-3.5" text="Submit a Gig" />

      {/* Hamburger menu */}
      <div
        onClick={handleOpenNav}
        className={`hamburger h-10 w-10 lg:hidden flex flex-col justify-center items-end align-middle z-[100] hover:cursor-pointer`}
      >
        <div
          className={`h-1 w-12 bg-deep ${openNav ? "burger1" : "burger-1"}`}
        ></div>
        <div
          className={`h-1 w-8 bg-deep ${openNav ? "invisible" : "show"}`}
        ></div>
        <div
          className={`h-1 w-6 bg-deep ${openNav ? "burger2" : "burger-2"}`}
        ></div>
      </div>
    </header>
  )
}

export default Header
