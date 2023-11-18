import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useEffect } from 'react'


const Auth = ({children}) => {
    const Navigate=useNavigate(null)


    useEffect(() => {

      if(!localStorage.getItem("auth-token")){
          return Navigate("/login")
  
      }
    
    }, []);


  return (
    children
   
  )
}

export default Auth;