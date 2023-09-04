import React, { useState } from 'react'
import HorizontalLinearStepper from './HorizontalLinearStepper'
import { Context } from './Contexts'
import './App.css'

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
    <h2 className='heading'>SOP GENERATOR</h2>
    <div className='container'>
      
    <Context.Provider value={{user,setUser,count,setCount}}>
    <HorizontalLinearStepper/>

    </Context.Provider>
    </div> 

    </div>
  )
}

export default App