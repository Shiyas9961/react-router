import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isLoggedIn } from '../commoneItems/commen'
import { isAllowedUser } from '../commoneItems/commen'

const LoginCheck = () => {

  const {pathname} = useLocation()

  const checkUser = isAllowedUser(pathname)

  if(isLoggedIn() && checkUser){
    return <Outlet/>
  }else{
    return <Navigate to='/login'/>
  }
}

export default LoginCheck