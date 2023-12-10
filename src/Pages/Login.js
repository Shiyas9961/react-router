import React, { useState } from 'react'
import { login } from '../api/usersApi'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleClick = (e) => {
        setError('')
        e.preventDefault()
        login(user).then(res => {
            navigate('/')
            setUser('')
        }).catch((err)=>{
            setError(err)
        })
    }
  return (
    <main className='login-page'>
        <label className={error.length ? 'error-msg' : 'hide-error'}>{error}</label>
        <label htmlFor="username"></label>
        <input value={user} id='username' type="text" onChange={(e)=>setUser(e.target.value)}/>
        <button onClick={handleClick} type='submit'>Login</button>
    </main>
  )
}

export default Login