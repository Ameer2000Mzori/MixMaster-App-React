import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
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
