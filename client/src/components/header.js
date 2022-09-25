import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link className='link' to={'/'}>
        Home
      </Link>
      <button className='btn'>Logout</button>
    </header>
  )
}

export default Header
