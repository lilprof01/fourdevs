// import React from 'react'
import { Link } from "react-router-dom"
import logo from '/logo.png'

const Footer = () => {
  return (
    <footer className="px-10 lg:px-20 py-5 bg-[#F4F4F4]">
        <main className="pt-5 pb-5 max-sm:px-5 flex flex-col sm:flex-row justify-between align-middle max-sm:gap-5">
            <div>
                <Link to={'/'}><img alt="logo" src={logo} title="logo-image" className="object-fit object-center" /></Link>
                <p className="font-medium text-[16px] text-zinc-700 mb-2">Stay connected. Let build something great together</p>
                <div className="flex max-sm:flex-wrap gap-2">
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                </div>
            </div>

            <div className="pl-10 max-sm:pl-2">
                <h1 className="font-medium text-xl mb-5">Quick Links</h1>
                <div className="flex flex-col gap-3">
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>Home</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>About</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>Services</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>Submit a Gig</Link>
                </div>
            </div>

            <div className="pl-10 max-sm:pl-2">
                <h1 className="font-medium text-xl mb-5">Follow Us</h1>
                <div className="flex flex-col gap-3">
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>Facebook</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>Instragram</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>X(Twitter)</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={''}>Threads</Link>
                </div>
            </div>

            <div className="pl-10 max-sm:pl-2">
                <h1 className="font-medium text-xl mb-5">Contact Us</h1>
                <div className="flex flex-col gap-3">
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={'mailto:hello@fourdevs.com'}>hello@fourdevs.com</Link>
                    <Link className="hover:underline transform hover:translate-x-2 text-[16px] text-text transition-all" to={'tel:+234-(000)-(0000)'}>+234-(000)-(0000)</Link>
                </div>
            </div>
        </main>
    </footer>
  )
}

export default Footer
