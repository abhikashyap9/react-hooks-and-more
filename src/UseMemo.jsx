import {useState,useMemo,memo} from 'react'

function Swatch({color}){
console.log('swatch',color)
return (
  <div style={{margin:2,width:75,height:75,backgroundColor:color}}>

  </div>
)
}
let MemomedSwatch=memo(Swatch)

function UseMemo() {
  const [appRenderIndex,setAppRenderIndex]=useState(0)
  const [color,setColor]=useState("red")
  console.log(`App Rendered ${appRenderIndex}`)
  const params=useMemo(()=>Swatch({color}),[color])

  return (
    <>
    <div>UseMemo</div>
    <button onClick={()=>setAppRenderIndex(appRenderIndex+1)}>
     ReRender APP
    </button>

    <button onClick={()=>setColor(color==='red'?"blue":"red")}>
      Change Color
    </button>

    <div>
    {params}
    {/* <Params params={color}/> */}
      {/* <MemomedSwatch params={params}/> */}
    </div>
    </>
  )
}

export default UseMemo

// memo is a higher-order component to memoize an entire functional component. 
// useMemo is a react hook to memoize a function within a functional component.