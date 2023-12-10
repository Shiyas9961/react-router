import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom'
import NavLinks from './Link/NavLinks'

const Details = () => {

    /* useLoaction uses because we can catch the props from Outlet component */
    const locate = useLocation() 
    const state = locate.state || {}


    const [data, setData] = useState(state.data)
    const {userId} = useParams()
    const navigate = useNavigate()


    //const data = state.data || {}

    useEffect(()=>{
        if(!data){
            axios("/data.json").then(res=>{
                const user = res.data.find(item => {
                    return item.id === parseInt(userId)
                })
                setData(user)
            }).catch(err=>{
                console.log(err)
            })
        }
    },[userId, data])

    if(!data){
        return null
    }

  return (
    <div className='details'>
        <div className='details-inside'>
            <h1><span>Name :</span> {data.name}</h1>
            <p><span style={{fontWeight:'bold'}}>Adderss :</span> {data.address}</p>
            <p><span style={{fontWeight:'bold'}}>Phone :</span> {data.phone}</p>
            <p><span style={{fontWeight:'bold'}}>Class :</span> {data.class}</p>
        </div>
        <div className='sub-menu'>
            <NavLinks end to=''>Marks</NavLinks>
            <NavLinks to='sports'>Sports</NavLinks>
            <NavLinks to='remarks'>Remarks</NavLinks>
        </div>
        <div className='sub-body'>
            {/* We can sent props through Outlet with context prop */}
            <Outlet context={data}/>
            {/* Decsentent Route */}
            {/* <Routes>
                <Route path='' element={<Marks/>}/>
                <Route path='sports' element={<Sports/>}/>
                <Route path='remarks' element={<Remarks/>}/>
            </Routes> */}
        </div>
        <div className='button'>
            <button onClick={()=>{
                navigate('/users')
            }}>BACK</button>
        </div>
    </div>
  )
}

export default Details