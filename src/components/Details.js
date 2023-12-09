import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation, useNavigate, NavLink, Outlet } from 'react-router-dom'

const Details = () => {

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
            <NavLink end to=''>Marks</NavLink>
            <NavLink to='sports'>Sports</NavLink>
            <NavLink to='remarks'>Remarks</NavLink>
        </div>
        <div className='sub-body'>
            <Outlet context={data}/>
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