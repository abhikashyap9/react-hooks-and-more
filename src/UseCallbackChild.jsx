import React,{memo} from 'react'

function UseCallbackChild({passedValue,func,count}) {
    console.log('I am child use callback child')
    console.log('I am child callback',passedValue)


  return (
    <div>I am Use Callback Child</div>
  )
}

export default memo(UseCallbackChild)