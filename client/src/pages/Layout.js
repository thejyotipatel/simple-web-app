import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
function Layout() {
  return (
    <div className='container'>
      <Header />
      <div className='center-page'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
