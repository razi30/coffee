import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log("Login with",email,password)
    }
    return (

        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='inputs'>
                <label>Enter Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' required/>
            </div>
            <div className='inputs'>
                <label>Enter password</label>
                <input type="password" value={password} onChange={(e)=> setPassword (e.target.value)}  placeholder='Password' required />
            </div>

            <div className='button'>
                <button type='submit'>Login</button>
                <p>Don't Have an Account?  <Link to='/register'>Register here</Link></p>
               
            </div>
        </form>
    )
}

export default LoginPage