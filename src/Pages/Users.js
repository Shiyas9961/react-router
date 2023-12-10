import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Users = () => {

    const [data, setData] = useState([])
    /* useSreach params will get what we give in params*/
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const cls = searchParams.get('class')

    useEffect(()=>{
        axios.get('data.json').then(res=>{
            setData(res.data)
        })
    },[])

    const handleChange = (e) => {
        const value = e.target.value
        setSearchParams({
            class : value
        })
    }

    const handleCell = (item) => {
        /* We can sent props through useNaviget as second Argument it is function */
        navigate(`${item.id}`,{
            state : {
                data : item
            }
        })
    }
  return (
    <div className='users-section'>
        <div className='select'>
            <select onChange={handleChange}>
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
        </div>
        {
            data.filter(each => {
                if(cls === null || cls === 'All'){
                    return true
                }else{
                    return cls === each.class
                }
            }).map(item => {
                return (
                    <div onClick={()=>handleCell(item)} className='users-inside' key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.address}</p>
                        <p>Class : {item.class}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users