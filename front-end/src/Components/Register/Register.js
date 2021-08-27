import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './register.css'
import { register } from '../../Redux/Actions/userActions'
import Error from '../Error/Error'


export default function Register({history}) {

  const [user,setUser]= useState({
      name:"",
      email:"",
      password:""
  })
  const errors = useSelector(state=>state.userReducers.errors)
  const dispatch = useDispatch()
  const handleChange = (e) =>{
      setUser({
          ...user,[e.target.name]:e.target.value
      })
  }
  const handlRegister=(e)=>{
    e.preventDefault()
    dispatch(register(user,history))
  }
    return (

        <div className="login-dark">
            {
                errors && errors.map(el=><Error   error={el}/>)
            }
        <form onSubmit={handlRegister}>
          <h2 className="sr-only">Inscrivez-Vous</h2>
          <div className="illustration"><i className="icon ion-ios-locked-outline" /></div>
          <div className="form-group">
              <input className="form-control" type="text" name="name" placeholder="Nom" onChange={handleChange}/></div>
          <div className="form-group">
              <input className="form-control" type="email" name="email" placeholder="Email" onChange={handleChange} /></div>
          <div className="form-group">
              <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleChange} /></div>
          <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">Enregistrer</button></div>
        </form>
      </div>
    )
}
