import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { isAllowedUser } from '../../commoneItems/commen'

const NavLinks = (props) => {
  const to = props.to

  const fullPath = useResolvedPath(to)

  const isAllow = isAllowedUser(fullPath.pathname)

  return isAllow && <NavLink {...props}/>
}

export default NavLinks