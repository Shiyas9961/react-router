import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Remarks = () => {
  const {remarks} = useOutletContext()

  return (
    <div className='remarks'>
      <h1>{remarks[0]}</h1>
    </div>
  )
}

export default Remarks