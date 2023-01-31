import React,{useState} from 'react'
import List from './UseDefferedHook'

function UseDeffered() {
  const [input,setInput]=useState("")
  
  function handleChange(e){
    setInput(e.target.value)
  }

  return (
    <>
    <div>UseTransition</div>
    <input type="text" value={input} onChange={handleChange}/>
    <List input={input}/>
    </>
)


}

export default UseDeffered