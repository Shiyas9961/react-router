import React, { useState, Suspense } from 'react'

const Comp = React.lazy(()=>{
  return import('../components/Section')
})

const Settings = () => {
  const [state, setState] = useState(false)
  //const Comp = mod.default || React.Fragment


  const handleClick = () => {
    /* import('../components/Section').then(res => {
      setMod(res)
    }) */
    setState(true)
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        state && (
          <Suspense fallback={<div>Loading...</div>}>
            <Comp/>
          </Suspense>
        )
      }
    </div>
  )
}

export default Settings