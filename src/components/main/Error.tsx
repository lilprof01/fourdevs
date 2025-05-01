// import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-black place-items-center place-content-center min-h-[100vh]'>
       <main className='text-white'>
            <h1 className='text-7xl max-sm:text-2xl shadow text-shadow-blue-500'>4😢4</h1>
            <p className='text-lg'>Page could not be found, <Link className='underline' to={'/'}> click Home page</Link></p>
       </main>
    </div>
  )
}

export default Error