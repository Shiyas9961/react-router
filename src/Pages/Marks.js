import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Marks = () => {
    const {marks = {}} = useOutletContext()

  return (
    <div className='marks'>
        <table>
            <tbody>
                {
                    Object.keys(marks).map((item)=>{
                        return (
                            <tr key={marks[item]}>
                                {
                                    [item,...marks[item]].map((each, index) => {
                                        return (
                                        <td key={index}>{each}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Marks