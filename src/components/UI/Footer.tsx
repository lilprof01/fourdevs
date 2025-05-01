// import React from 'react'
import { Link } from "react-router-dom"
import logo from '/logo.png'

const Footer = () => {
  return (
    <footer className="px-10  max-sm:px-0 py-5 bg-zinc-100">
        <main className="pt-5 pb-5 max-sm:px-5 px-10 grid lg:grid-cols-4  max-md:grid-cols-2 min-md:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-7 gap-3 justify-center">
            <div>
                <Link to={'/'}><img alt="logo" src={logo} title="logo-image" className="object-fit object-center" /></Link>
                <p className="font-semibold text-[16px] text-zinc-700 mb-2">Stay connected. Let build something great together</p>
                <div className="flex max-sm:flex-wrap gap-2">
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                    <i className="p-4 bg-blue-500 w-[22px] h-[22px] rounded"></i>
                </div>
            </div>

            <div className="pl-10 max-sm:pl-2">
                <h1 className="font-semibold text-xl">Quick Links</h1>
                <div className="flex flex-col">
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>Home</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>About</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>Services</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>Submit a Gig</Link>
                </div>
            </div>

            <div className="pl-10 max-sm:pl-2">
                <h1 className="font-semibold text-xl">Follow Us</h1>
                <div className="flex flex-col">
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>Facebook</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>Instragram</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>X(Twitter)</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={''}>Threads</Link>
                </div>
            </div>

            <div className="pl-10 max-sm:pl-2">
                <h1 className="font-semibold text-xl">Contact Us</h1>
                <div className="flex flex-col">
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={'mailto:hello@fourdevs.com'}>hello@fourdevs.com</Link>
                    <Link className="hover:underline font-semibold transform hover:translate-x-2 text-[16px] text-zinc-800 transition-all" to={'tell:+234-(000)-(0000)'}>+234-(000)-(0000)</Link>
                </div>
            </div>
        </main>
    </footer>
  )
}

export default Footer
