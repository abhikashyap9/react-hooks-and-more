import React,{useState} from 'react'

function Child1(props) {
 
    const {myValue,helloGuys}=props
    
    
  return (
    <div>
    <input type='text' onChange={myValue}/>
    <button onClick={helloGuys}>Helllo</button>
    </div>
  )


}


export default Child1