import React, { useContext } from 'react';
import {FirstName,LastName,Document} from './Context'


function Contextchild3() {
  const {name,lastname}=useContext(FirstName)

  return (
    <div>

       {/* <FirstName.Consumer>
          { (fname) => {return (
          <h1>{fname}</h1>
          ) }}
       </FirstName.Consumer> 
       <FirstName.Consumer>
        {(lname)=> {return <h1 className='Abhishek'>My name is  {lname}</h1>}}
       </FirstName.Consumer> */}

       {name}
       {lastname}

      

       <Document.Consumer>
        {({name,lastname})=>{return <h1>{name}{lastname}</h1>}}
       </Document.Consumer>

       

       


    </div>
  )

}

export default Contextchild3
