import React, { useState } from 'react'
import  './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setshowlogin}) => {
  const [currstate,setcurrstate]=useState("Login")
  return (
    <div className='login-popup'>
   <form className='login-popup-container'>
    <div className='login-popup-title'>
      <h2>{currstate}</h2>
      <img onClick={()=>setshowlogin(false)}src={assets.cross_icon} alt=""/>
    </div>
    <div className='login-popup-inputs'>
      {currstate==="Login"?<></>: <input type="text" placeholder="name" />}
      
      <input type="email" placeholder="email" required/>
      <input type="password" placeholder="Password" required/>
    </div>
    <button>{currstate==='signup'?"create account":"Login"}</button>
    <div className='login-popup-condition'>
      <input type="checkbox" required/>
      <p>By continuing I agree with the terms and conditions</p>
    </div>
    {currstate==="Login" ?<p>Create a new account?<span onClick={()=>setcurrstate("signup")}> click here</span></p>:<p>Already have an account? <span onClick={()=>setcurrstate("Login")}>Login Here</span></p>}

    
    
   </form>
    </div>
  )
}

export default Loginpopup
