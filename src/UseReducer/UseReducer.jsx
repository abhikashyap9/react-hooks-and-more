// import React,{useReducer} from 'react'

// const intialState=0

// const reducer =(state,action)=>{
//     if(action.type==='INCREMENT'){
//         return state+1;
//     }
//     if(action.type==='DECREMENT'){
//         return state-1;
//     }
// }

// export const UseReducer=()=>{

//     const [state,dispatch]=useReducer(reducer,intialState)
//     console.log(state)
//   return (
//     <>
//         <div>
//             <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
//             <button onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button>
//         </div>
//     </>
//   )
// }


// import { isObject } from 'lodash'
// import React,{ useReducer } from 'react'
// import './App.css'

// const initalState=0

// const reducer=(state,action)=>{
//   console.log('reducer',state)
//     if(action.type==='ADD'){
    
//       return action.todos
//     }
//     else if(action.type==='DELETE'){
//        alert()
//         action.todos.filter((curr)=>{
//             if(curr.id!==action.del){
//               return curr
//             }
//         })
//     }
   
  
//   }



// function UseReducer() {
//    const [state,dispatch]=useReducer(reducer,initalState)
//    let todos=''
// const value=(e)=>{
//      todos=e.target.value;
  
// }

// const add=()=>{
//     console.log(todos)
//         dispatch({"type":"ADD",todos:todos})

   
// }

// const del=(curr)=>{
//   alert(curr)
//   dispatch({"type":"DELETE",del:curr})
// }
// let list={...state,state}

// console.log('Redu=>',list)
// Object.keys(list).map((curr)=>{console.log(curr)})

//   return (
//     <>
//     {Object.keys(list) &&
//     Object.keys(list).map((curr,index)=>{
//         console.log('inside',curr)
//      return (
//         <>
//          <h1 className='border' onClick={()=>del(curr)}> {curr} </h1>
//         </>
//      )
//     }
//     )}
//     <input type='text' placeholder='Enter Value' onChange={value}/>
//     <button type='submit' onClick={add}>Button</button> 
//     {/* <button type='submit' onClick={()=>dispatch({"Type":"DELETE"})}>Button</button>  */}
//    </>
//   )
// }

// export default UseReducer

import React,{useReducer,useState} from 'react'
// The initial state is the value the state is initialized with
// initial state
const initialState=0

const reducer=(state,action)=>{
console.log('state,action',action,state);
  let newState=''
  if(action.type=='add'){
    newState=action.value
    return newState
  }
  if(action.type=='delete'){
    return state-1
  }

  }



function UseReducer() {

  const [state,dispatch]=useReducer(reducer,initialState)
  const [value,setValue]=useState({})
  // An action object is an object that describes how to update the state
 const getValue=(e)=>{
 
  let val={val:e.target.value}
  setValue({...value,val})
 }

  const add={
    type:'add',
    value:value
  }

  const actionDe={
    type:'decrease',
  }
  console.log('state',state)
  console.log('reducer',reducer)
  console.log('initialState',initialState)
  console.log('dispatch',dispatch)

  console.log('value',value)
  // The dispatch is a special function that dispatches an action object.
  return (
    <>
    <div style={{display:'flex'}}>
    <input type='text' placeholder='Add a list' onChange={getValue}/>
    <button style={{backgroundColor:'black',color:'white',marginLeft:'10px'}} onClick={()=>dispatch(add)}>
      Add
    </button>
   </div>     
    <button onClick={()=>dispatch(actionDe)}>
    Decrease
    </button>
    </>
  )
}

export default UseReducer


