import allowedPath from './allowedPath.json'
import { matchPath } from 'react-router-dom'

const saveInfo = (data) => {
    localStorage.setItem("details",JSON.stringify(data))
}

const logOut = () => {
    localStorage.removeItem("details")
}

const isLoggedIn = () => {

    try{
        const val = JSON.parse(localStorage.getItem("details"))
        return !!val
    }catch(err){
        return false
    }
}

const getRolesFromPath = (pathname) => {
    for(const [path, obj] of Object.entries(allowedPath)){
        if(matchPath(path, pathname)){
            return obj.roles
        }
    }
    return null
}

const getRoles = () => {
    try{
        const val = JSON.parse(localStorage.getItem("details")) || {}
        const roles = val.role || []
        return roles
    }catch(err){
        return []
    }
}

const isRouteMatch = (roles) => {
    if(!roles){
        return true
    }
    const userRole = getRoles()
    const filteredRole = roles.filter(item => userRole.includes(item))
    return filteredRole.length ? true : false
}

const isAllowedUser = (pathname) => {
    const roles = getRolesFromPath(pathname)
    const isAllow = isRouteMatch(roles)
    return isAllow
}

export {
    saveInfo,
    logOut,
    isLoggedIn,
    isAllowedUser
}