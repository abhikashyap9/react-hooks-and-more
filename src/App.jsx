
// import {useRef,useState,useEffect} from 'react'
// function App() {

// const [show,setShow]=useState(false)
// const popup =useRef()
// const button=useRef()
// console.log('POPUP=>',popup)
// console.log('button=>',button)

// // useEffect(()=>{
// //   if(popup.current===null || button.current===null) return

// //   const {bottom}=button.current.getBoundingClientRect()
// //   popup.current.style.top=`${bottom + 25}px`
// // },[show])


//   return (
//     <div className="App">
//           {/* <h1>HELLO WORLD</h1>
//           <h1>{JSON.stringify(data)}</h1>

//         <button onClick={()=>setUrl("/jack.json")}>JAck</button>
//         <button onClick={()=>setUrl("/sally.json")}>Sally</button>   */}
   
//     {/* {count}
//     <button onClick={()=>setCount(c=>c+1)}>Increment</button>
//     */}

//     <button ref={button} onClick={()=>setShow(prev=>!prev)}>
//     Click Here
//     </button>

//     {
//       show && (
//         <div ref={popup}>
//         This is a popup
//         </div>
//       )
//     }
   
//     </div>
//   )
// }

// export default App


import {useRef,useState,useEffect,useLayoutEffect} from 'react'


export default function App() {
  const popup =useRef()
  const button=useRef()
  const [show,setShow]=useState(false)
  console.log(popup)
useEffect(()=>{
 if(popup.current===null || button.current===null) return
 if(popup.current===undefined || button.current===undefined) return

 const {bottom}=button.current.getBoundingClientRect()
  popup.current.style.top=`${bottom + 125}px`
},[show])

  return (
    <>
   
    <button ref={button} onClick={()=>setShow(prev=>!prev)}>
    Click Here
   </button>

   {
       show && (
         <div style={{postion:'absolute'}} ref={popup}>
         This is a popup
         </div>
       )
    }
</>
  );
}

