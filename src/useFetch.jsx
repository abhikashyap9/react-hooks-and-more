import React,{useEffect, useLayoutEffect, useState,useRef} from 'react'


export const useFetch=(options)=>{
    const [data,setData]=useState(null)
    console.log(options)
    const saveOnSuccess=useRef(options.onSuccess)
      
    useEffect(()=>{
        let isCancelled=true;
        if(options.url){
           
            fetch(options.url)
            .then((response)=>response.json())
            .then((json)=>{
                saveOnSuccess?.current?.(json)
                setData(json)})
        }
        return () => {
            isCancelled=false;
            console.log(isCancelled)
        }
        
    },[options.url]);
    console.log(data)
    return {
        data,
    }
}