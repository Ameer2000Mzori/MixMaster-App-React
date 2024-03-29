import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-[100%] h-[10vh] bg-[#f8ede2] flex flex-col text-center items-center justify-center z-10">
        <ul className="flex flex-row gap-4 font-mono text-black-600 text-[15px] font-bold">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
