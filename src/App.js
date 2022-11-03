
  
  import React, { useEffect, useState } from 'react'

  function Child() {
      const [count, setCount] = useState(0)
      const [count1, setCount1] = useState(0)
      useEffect(()=>{
        console.log('Use Effect Hook called')
      },[count1])
      //cDM
      useEffect(()=>{
          console.log('Component Mounted Successfully')
      },[])
      // useEffect accepts 2 parameters : 1. callBack function 2. Dependency List (Array)
      useEffect(()=>{
          console.log('Component Updated Successfully')
      },[count])
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <h1>{count1}</h1>
        <button onClick={()=>setCount1(count1 + 1)}>Increment</button>
      </div>
    )
  }



//   PS
// so, 
// useEffect with No dependency => called on every render

// useEffect with Empty Dependency=> called only once during 1st render

// useEffect with dependency => called on updation of dependency list

// right?
  
  export default Child






