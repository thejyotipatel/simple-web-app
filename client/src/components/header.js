import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header({ logout, user }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      setTimeout(() => {
        navigate('/register')
      }, 2000)
    }
  }, [user, navigate])

  return (
    <header>
      {!user && (
        <Link className='btn' to={'/register'}>
          Register/Login
        </Link>
      )}
      {user && (
        <>
          <Link className='btn' to={'/'}>
            Profile
          </Link>
          <button className='btn' onClick={logout}>
            Logout
          </button>
        </>
      )}
    </header>
  )
}

export default Header
