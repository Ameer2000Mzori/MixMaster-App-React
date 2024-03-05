import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-[100%] h-[10vh] bg-[#f8ede2] flex flex-col text-center items-center justify-center">
        <ul className="flex flex-row gap-4 font-mono text-black-600 text-[15px] font-bold">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/newsletter'}>NewsLetter</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
