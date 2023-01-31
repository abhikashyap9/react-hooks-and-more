import Contextchild1 from './Contextchild1.jsx'
import { createContext } from 'react'



const FirstName=createContext(null);
const LastName=createContext();
export const Document=createContext({
  name:'Abhishek',
  lastname:'Bhadwal'
})

FirstName.displayName='Abhishek'
LastName.displayName='Bhadwal'
Document.displayName='Mixture'

function Toolbar(){
  
  
    return (
    <div>
    {/* <FirstName.Provider value={{name:'Abhishek'}}>      
    <LastName.Provider value={{lastname:'bhadwal'}}>
    <Contextchild1/>
    </LastName.Provider>
  
  </FirstName.Provider> */}
 

    <FirstName.Provider value={{name:'Abhishek',lastname:'bhadwal'}}>      
    
      <Contextchild1/>
    
    </FirstName.Provider>
    </div>
  )


}
export default Toolbar
export {FirstName,LastName}

// There are three steps to create a context api
// 1)Create Context
// 2)Creat a provider and specify value
//3)create consumer where we want to send data


// Or we can directly send data without a provider this is a way in this we don't need to specify provider
// export const Document=createContext({
//   name:'Abhishek',
//   lastname:'Bhadwal'
// })

// And the last thing we can also specify name to our provider
// FirstName.displayName='Abhishek'