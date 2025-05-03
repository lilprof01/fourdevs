import { NavLink } from "react-router-dom";
import CtaBtn from "./CtaBtn";

interface mobileNavProps {
  openNav: Boolean;
  setOpenNav: Function;
}

const MobileNav: React.FC<mobileNavProps> = ({ openNav, setOpenNav }) => {
  return (
    <nav
      className={`mobile-nav h-screen w-[70vw] flex flex-col justify-start gap-10 py-26 px-2 fixed right-0 top-0 sm:hidden ${
        openNav ? "open-nav" : "close-nav"
      }`}
    >
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/"
        className="px-6 w-full mobile-links"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/about"
        className="px-6 w-full mobile-links"
      >
        About Us
      </NavLink>
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/service"
        className="px-6 w-full mobile-links"
      >
        Service
      </NavLink>
      <NavLink
        onClick={() => setOpenNav(!openNav)}
        to="/contact"
        className="px-6 w-full mobile-links"
      >
        Contact
      </NavLink>

      <CtaBtn style="py-2 px-3.5 w-[60%] ml-auto absolute bottom-5 right-5" text="Submit a Gig" />
    </nav>
  );
};

export default MobileNav;
