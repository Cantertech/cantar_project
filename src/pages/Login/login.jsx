import React, { useState } from 'react'
import './login.css'

const Login = () => {

  const [CurrState, setCurrState ] = useState ("Sign Up")

  return (
    <div className='login'>
      <div className="login-logo">
      <img src="src/assets/ecommerce-svgrepo-com.png" alt="" />
      <p>CantarTech</p>
      </div>
      <form className='login-form'>
        <h2>{CurrState}</h2>
        {CurrState === "Sign Up"?<input type="text" placeholder='Username' className='form-input' required/>: null}
        <input type="email" placeholder='Email' className='form-input' required/>
        <input type="password" placeholder='Password' className='form-input' required/>
        <button>{CurrState === "Sign Up"?"Create account":"Login now" }</button>
        {CurrState === "Sign Up"?

        <div className="long-term">
          <input type="checkbox"  required/>
          <p>Agree to the term of use & privacy policy. </p>
        </div>
        :
         <p className='forgot-password'>Forgot password</p>
        }
        <div className='login-forgot'>
          { CurrState === "Sign Up"?

            <p className='login-toggle'>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            :
            <p className='login-toggle'>Don't have an account? <span onClick={()=>setCurrState("Sign Up")}>Sign up</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login