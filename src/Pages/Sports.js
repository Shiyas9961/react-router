import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Sports = () => {

  const {sports ={}} = useOutletContext()
  
  return (
    <div className='sports'>
      <div>
        <span>{Object.keys(sports)[0]}</span>
        <span >
            {
              sports[Object.keys(sports)[0]] < 1 ? 'Participated' : 'Good'
            }
        </span>
      </div>
      <div>
        <span>{Object.keys(sports)[1]}</span>
        <span >
          {
            sports[Object.keys(sports)[1]] < 1 ? 'Participated' : 'Good'
          }
        </span>
      </div>
    </div>
  )
}

export default Sports