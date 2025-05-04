import { Outlet } from "react-router-dom"
import { Header, MobileNav, ScrollToTop, Footer } from "../components/UI"
import { useEffect, useState } from "react";

const Layout: React.FC = () => {
  const [openNav, setOpenNav] = useState<Boolean>(false);

  const handleOpenNav = (): void => {
    setOpenNav((prev) => !prev);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
  
    if (openNav) {
      html.classList.add("scroll-lock");
      body.classList.add("scroll-lock");
    } else {
      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");
    }
  
    return () => {
      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");
    };
  }, [openNav]);
  

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
