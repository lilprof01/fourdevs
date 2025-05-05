// import React from 'react'
import { Link } from "react-router-dom";
// import {Facebook, Instagram, Twitter} from "lucide-react"
import facebook from "/icons/facebook.svg";
import ig from "/icons/ig.svg";
import x from "/icons/x.svg";
import whatsapp from "/icons/whatsapp.svg";
import logo from "/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-10 lg:px-20 py-5 bg-[#F4F4F4]">
      <main className="pt-5 pb-5 max-sm:px-5 flex flex-col sm:flex-row justify-between align-middle max-sm:gap-5">
        <div className="flex flex-col gap-1 max-sm:gap-2">
          <Link to={"/"}>
            <img
              alt="logo"
              src={logo}
              title="logo-image"
              className="object-fit object-center"
            />
          </Link>
          <p className="w-[95%] font-medium text-[16px] text-[#5E5D5DBF] mb-2">
            Stay connected. Let build something great together
          </p>
          <div className="flex max-sm:flex-wrap gap-2">
            <Link
              to={"https://facebook.com"}
              target="_blank"
              className="flex justify-center items-center align-middle gap-2 bg-white border border-[#D9D9D9] rounded-full p-2 hover:bg-light transition-all duration-300"
            >
              <img alt="facebook" src={facebook} className="w-5 h-5" />
            </Link>
            <Link
              to={"https://instagram.com"}
              target="_blank"
              className="flex justify-center items-center align-middle gap-2 bg-white border border-[#D9D9D9] rounded-full p-2 hover:bg-light transition-all duration-300"
            >
              <img alt="ig" src={ig} className="w-5 h-5" />
            </Link>
            <Link
              to={"https://x.com"}
              target="_blank"
              className="flex justify-center items-center align-middle gap-2 bg-white border border-[#D9D9D9] rounded-full p-2 hover:bg-light transition-all duration-300"
            >
              <img alt="x" src={x} className="w-5 h-5" />
            </Link>
            <Link
              to={""}
              className="flex justify-center items-center align-middle gap-2 bg-white border border-[#D9D9D9] rounded-full p-2 hover:bg-light transition-all duration-300"
            >
              <img alt="whatsapp" src={whatsapp} className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="pl-10 max-sm:pl-2">
          <h1 className="font-medium text-xl mb-5">Quick Links</h1>
          <div className="flex flex-col gap-3">
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={"/service"}
            >
              Services
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={"/contact"}
            >
              Submit a Gig
            </Link>
          </div>
        </div>

        <div className="pl-10 max-sm:pl-2">
          <h1 className="font-medium text-xl mb-5">Follow Us</h1>
          <div className="flex flex-col gap-3">
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={""}
            >
              Facebook
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={""}
            >
              Instragram
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={""}
            >
              X(Twitter)
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={""}
            >
              Threads
            </Link>
          </div>
        </div>

        <div className="pl-10 max-sm:pl-2">
          <h1 className="font-medium text-xl mb-5">Contact Us</h1>
          <div className="flex flex-col gap-3">
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={"mailto:hello@fourdevs.com"}
            >
              hello@fourdevs.com
            </Link>
            <Link
              className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all"
              to={"tel:+234-(000)-(0000)"}
            >
              +234-(000)-(0000)
            </Link>
          </div>
        </div>
      </main>

      <div id="copyright" className="flex flex-col sm:flex-row justify-between items-center align-middle gap-2 mt-10 border-t border-[#D9D9D9] pt-5">
        <p className="text-center text-[#1E1C1C99] text-[16px]">
          Copyright: &copy; {currentYear} FOURDEVS. All rights reserved.
        </p>
        <p className="text-deep">The Four Devs Official Team</p>
      </div>
    </footer>
  );
};

export default Footer;
