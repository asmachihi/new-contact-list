import React from 'react'
import './login.css'


export default function Login() {
    return (
        <div className="login-dark">
        <form >
          <h2 className="sr-only">Se connecter</h2>
          <div className="illustration"><i className="icon ion-ios-locked-outline" /></div>
          <div className="form-group">
              <input className="form-control" type="email" name="email" placeholder="Email" /></div>
          <div className="form-group">
              <input className="form-control" type="password" name="password" placeholder="Password" /></div>
          <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">Log In</button></div>
              </form>
      </div>
    )
}
