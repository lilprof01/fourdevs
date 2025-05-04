import { Outlet } from "react-router-dom"
import { Header, MobileNav, ScrollToTop, Footer } from "../components/UI"
import { useEffect, useState } from "react";

const Layout: React.FC = () => {
  const [openNav, setOpenNav] = useState<Boolean>(false);

  const handleOpenNav = (): void => {
    setOpenNav((prev) => !prev);
  };

  useEffect (() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (openNav) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  },[openNav])

  return (
    <main>
      <ScrollToTop />
      <Header openNav={openNav} handleOpenNav={handleOpenNav} />
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
      <Outlet context={{setOpenNav}} />
      <Footer />
    </main>
  )
}

export default Layout
