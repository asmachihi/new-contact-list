import axios from "axios"
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT, REGISTER_USER, VIDE_ERRORS } from "../Constants/userTypes"


//identification
export const register=(user,history)=>async(dispatch)=>{

   dispatch({type:LOAD_USER})
    try {
        const res = await axios.post('/api/user/signUp',user)
        dispatch({
            type: REGISTER_USER,
            payload : res.data
        })
        history.push('/profile')

    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload:error.response.data
        })
    }
}


//s'identifier
export const login=(user,history)=>async(dispatch)=>{
  dispatch({
      type:LOAD_USER
  })
    try {
        const res = await axios.post('/api/user/signIn',user)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
        history.push('/profile')
    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload:error.response.data
        })
    }
}

//authorisation
export const current=()=>async(dispatch)=>{
   const config = {
       headers:{
           authorization:localStorage.getItem('token')
       }
   }
    try {
        const res = await axios.get('/api/user/current',config)
        dispatch({
            type:CURRENT_USER,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload:error.response.data
        })
    }
}

//déconnexion
export const logout=()=>{
    return{
        type:LOGOUT
    }
}

export const videErrors=()=>{
    return{
        type:VIDE_ERRORS
    }
}

