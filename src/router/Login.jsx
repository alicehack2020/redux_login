import React from 'react'
import { useDispatch } from 'react-redux'
import {loginStatus} from "../store/LoginSlice"
const Login = () => {
  const dispatch=useDispatch()

  const loginData=()=>{
    dispatch(loginStatus(true))
  }
 return (
    <div>
       <button onClick={()=>loginData()}>Login Button</button>
    </div>
  )
}

export default Login