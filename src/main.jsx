import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Usecallback from './Usecallback'
import UseMemo  from './UseMemo'
import UseDeffered from './UseDeffered'
import Toolbar from './Context'
import Parent from './LiftupState/Liftup'
import UseReducer  from './UseReducer/UseReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <UseMemo/> */}
    {/* <Usecallback/> */}

    {/* <UseDeffered/> */}

    {/* <Toolbar/> */}

    {/* <Parent/> */}
    <UseReducer/>
    

  </React.StrictMode>,
)
