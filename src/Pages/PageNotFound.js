import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1 style={{color:'red'}}>Page Not Found !</h1>
        <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default PageNotFound