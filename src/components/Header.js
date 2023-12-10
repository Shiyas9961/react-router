import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginCheck from './LoginCheck'
import { isLoggedIn, logOut } from '../commoneItems/commen'
import NavLinks from './Link/NavLinks'

const Header = () => {
  const item = isLoggedIn()
  const navigate = useNavigate()
  const name = item ? JSON.parse(localStorage.getItem("details")).user : null


  const handleLogout = () => {
    logOut()
    navigate('/login')
  }
  return (
    <div>
      <header>
        <nav>
          {/* NavLink is help us to give a class when this components is ative */}
          <div className='normal-nav'>
            <NavLinks to='/'>Home</NavLinks>
            <NavLinks to='/usage'>Usage</NavLinks>
            <NavLinks to='/settings'>Settings</NavLinks>
            <NavLinks to='/users'>Users</NavLinks>
          </div>
          <div className='logout-nav'>
            <span className='logout-btn' onClick={handleLogout}>
              {
                item ? `Logout ${name}` : null
              }
            </span>
          </div>
        </nav>
    </header>
    <main>
      <LoginCheck/>
    </main>
    </div>
  )
}

export default Header