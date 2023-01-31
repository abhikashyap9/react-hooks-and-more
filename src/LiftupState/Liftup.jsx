import React from 'react'
import Child1 from './Child1'

function Parent() {
  
  const val=(e)=>{
    console.log(e.target.value);
  }
  const guys=()=>{
   console.log('helloo')
  }

  return (
    <div>
      <Child1 myValue={val}
              helloGuys={guys}
              
      />
    </div>
  )
}

export default Parent