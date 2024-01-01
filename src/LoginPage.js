import React from 'react';
import './LoginPage.css';

function Page() {
  return (
    <div className='box--container'>
       <div className="login--container">
      <h1 className='page--header'>Login</h1>
  
      <label>Email</label>
      <input 
      type='email'
      placeholder='Enter your email'
      className='page--input'
      />
      <br></br>

      <label>Password</label>
      <input
      type='password'
      placeholder='Password'
      className='page--input' 
      />
      <br></br>

      <label>Confirm Password</label>
      <input 
      type='password'
      placeholder='Confirm Password' 
      className='page--input'
      />
      <br></br>

      <button type='submit' className='button--signIn'>Sign in</button>
    </div>
    </div>
   
  );
}

export default Page;
