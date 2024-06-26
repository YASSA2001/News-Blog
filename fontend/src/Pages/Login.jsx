import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export const Login = () => {

  const [userData, setUserData] = useState({
    
    email:'',
    password:''
    
  })

  const changeInputHandler = (e) =>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className="register">
        <div className="container">
          <h2>Sign Up</h2>
          <form action="" className="form register__form">
            <p className='form__error-message'> This is an error message</p>
           
            <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus />
            <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} autoFocus />
           
            <button className="btn primary" type='submit'>Login</button>
          </form>
          <small>Dont have account? <Link to='/register'>Register </Link></small>
        </div>
     </section>
  )
}
