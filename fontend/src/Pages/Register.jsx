import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email:'',
    password:'',
    password2:''
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
            <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus />
            <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus />
            <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} autoFocus />
            <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler} autoFocus />
            <button className="btn primary" type='submit'>Register</button>
          </form>
          <small>Already have account <Link to='/login'>Login </Link></small>
        </div>
     </section>
  )
}
