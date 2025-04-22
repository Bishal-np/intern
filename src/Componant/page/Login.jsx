import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import "../../scss/pages/login.scss"
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <form action="" className='login-form'>

            <div className="form-details ">
              <h2 className="form-heading">Welcome back to <p className="intern"> Internsathi</p></h2>
              <label htmlFor="email" className='email-title'>Email*</label>
              <input type="email" id='email' className='email' placeholder='eg.janecopper@xyz.com' />
              <label htmlFor="password" className='password-title'>Password*</label>
              <input type="password" id='password' className='password' placeholder='Enter Your Password' />

              <div className="checkboxx">
                <div className="check">
                  <input type="checkbox" className='checkbox' id='checkbox' /><label htmlFor="checkbox" className='label'>Keep me signed in</label>
                </div>
                <a href="" className="forget text-danger ">Forget Password</a>
              </div>
              <button className="signin ">Sign In</button>
              <p className="divider-text  text-center py-2">or login with</p>
              <button className="google"><FcGoogle className='google-icon' /> Login with Google <span className='span-items'>(candidate)</span> </button>
              <p className="register">Don't have an account? Register as</p>
              <p className="links">Candidate / Recruiter</p>
            </div>

          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login
