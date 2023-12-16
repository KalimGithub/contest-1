import React, { useState } from 'react'

const Main = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSearch(e) {
    e.preventDefault()
    password === confirmPassword && password != '' ?
      alert('Form submitted successfully!') : alert('Form cannot be submitted!!');
      setEmail('')
      setPassword('')
      setConfirmPassword('')
  }

  return (

    <div className='main'>
      <h2 style={{textAlign:'center'}}>Welcome!!!</h2>
      <label className='label'>Email:</label>
      <input
        id='email'
        type='email'
        placeholder="Enter your Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className='label'>Password:</label>
      <input
        id='passowrd'
        type='password'
        placeholder='Enter your password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {
        password.length < 8 && password.length > 0 && <p style={{ color: 'red' }}>password must be 8 characters long</p>
      }

      <label className='label'>Confirm Password:</label>
      <input
        id='confirm-passowrd'
        type='password'
        placeholder='Enter your confirm password'
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {password !== confirmPassword && confirmPassword.length > 0 && <p style={{ color: 'red' }}>password does not match!</p>}

      <button id='btn' onClick={handleSearch}>
        Sign Up
      </button>
    </div>
  )
}

export default Main