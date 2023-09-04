import React, { useState } from 'react'
import HorizontalLinearStepper from './HorizontalLinearStepper'
import { Context } from './Contexts'
import './App.css'
import { Home, HomeMini, Person } from '@mui/icons-material'

const App = () => {
  const [user,setUser]=useState({
    name:"",
    email:"",
    age:"",
    education:"",
    institute:"",
    course:"",
    company:"",
    jobtitle:"",
    responsibility:"",
    cinstitute:"",
    courseenroll:"",
    country:"",
    goal:"",
    elistening:"",
    ereading:"",
    espeaking:"",
    ewriting:"",
    feepaid:"",
    feeamount:"",
    gic:"",
    feegic:"",
  })
  const [count,setCount]=useState(-1);
//  console.log(user);
  return (
    <div className='BOX'>
    <div className='Navbar'>
    <div className='heading'>
    <h2 >SOP GENERATOR</h2>

    </div>
    <div className='NavIcons'>
    <Home className='icons'/>
    <Person className='icons'/>
    </div>

    </div>
    <div className='container'>
      
    <Context.Provider value={{user,setUser,count,setCount}}>
    <HorizontalLinearStepper/>

    </Context.Provider>
    <h5 className='warning'>Please Save all details , to move next steps</h5>
    </div> 

    </div>
  )
}

export default App