import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Remarks = () => {
  const {remarks} = useOutletContext()
  console.log(remarks[0])

  return (
    <div className='remarks'>
      <h1>{remarks[0]}</h1>
    </div>
  )
}

export default Remarks