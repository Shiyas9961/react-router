import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/usage'>Usage</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    </div>
  )
}

export default Header