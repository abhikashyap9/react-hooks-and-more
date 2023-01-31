import React,{Component, useCallback, useState} from 'react'
import UseCallbackChild from './UseCallbackChild'

function Usecallback() {


  const [count,setCount]=useState(0)
  const [passedValue,setPassValue]=useState(0)
  

    // Main gothcha here is when we pass here
    //  this function as a prop to child Component
    //  then this starts to cause render in child
    //  component to stop this unneccessary rendering
    //  we use use callback hook


    // This is a memoized function *func
    const funct=useCallback(()=>{
       console.log('I am hook')
    },[passedValue])

  return (
    <div>
       <UseCallbackChild passedValue={passedValue} func={funct} />
       <button onClick={()=>setCount(count+1)}>{count} Value</button>
       {/* <button onClick={()=>setPassValue(passedValue+1)}>Increase Value</button> */}
    </div>
  )
}

export default Usecallback