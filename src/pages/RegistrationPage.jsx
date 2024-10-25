import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function RegistrationPage() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('login with',username,email,password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration</h2>
        < div className='inputs'>
          <label>UserName</label>
          <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required/>
        </div>
        <div className='inputs'>
          <label>Email</label>
          <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className='inputs'>
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>

        <div className='button'>
          <button type='submit'>Register</button>
          <p>Already have an Account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage