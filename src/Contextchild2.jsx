import React,{useContext} from 'react'
import Contextchild3 from './Contextchild3'
import {FirstName} from './Context'

function Contextchild2() {
  const {name,lastname}=useContext(FirstName)
  alert(name)

  return (
    <div><Contextchild3/></div>
  )
}

export default Contextchild2