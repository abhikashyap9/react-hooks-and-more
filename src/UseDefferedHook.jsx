import React,{useDeferredValue,useMemo} from 'react'

function List({input}) {

    // This hook is simple and just like use debouncing technique
    // We just put input inside this value
    const List_SIZE=20000
    const defferedInput =useDeferredValue(input)
    let Loading=()=>{
        if(!defferedInput && input.length>0){
        return (
            <>Loading...</>
        )
    }
    else{
        <></>
    }
}

    const List = useMemo(()=>{
        const l=[]
        for(let i=0;i<List_SIZE;i++){
            l.push(<div key ={i}>{defferedInput}</div>)
        }

        return l 
    },[defferedInput])


  return (<>
    {List}
    <Loading/>
    </>
    ) 


}

export default List