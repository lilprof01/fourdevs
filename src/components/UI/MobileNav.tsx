import { NavLink } from "react-router-dom";

interface mobileNavProps {
  openNav: Boolean;
  setOpenNav: Function;
}

const MobileNav: React.FC<mobileNavProps> = ({ openNav, setOpenNav }) => {
  return (
    <nav
      className={`mobile-nav h-screen w-[70vw] flex flex-col justify-between gap-10 pt-26 pb-10 px-2 fixed right-0 top-0 lg:hidden ${
        openNav ? "open-nav" : "close-nav"
      }`}
    >
      <div className="flex flex-col gap-10">
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
          className="px-6 w-full mobile-links justify-self-end"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;
