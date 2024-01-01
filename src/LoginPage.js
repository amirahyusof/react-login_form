import React from 'react';
import './LoginPage.css';

function Page() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  function handleChange(event){
    setFormData( prevFormData => {
      return {
        ...prevFormData, 
       [event.target.name] : [event.target.value]
      }
    })
  }

  console.log(formData)

  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <div className='box--container'>
       <div className="login--container" onSubmit={handleSubmit}>
      <h1 className='page--header'>Login</h1>
  
      <label>Email</label>
      <input 
      type='email'
      placeholder='Enter your email'
      className='page--input'
      name='email'
      value={formData.email}
      onChange ={handleChange}
      />
      <br></br>

      <label>Password</label>
      <input
      type='password'
      placeholder='Password'
      className='page--input'
      name='password'
      value={formData.password}
      onChange={handleChange} 
      />
      <br></br>

      <label>Confirm Password</label>
      <input 
      type='password'
      placeholder='Confirm Password' 
      className='page--input'
      name='confirmPassword'
      value={formData.confirmPassword}
      onChange={handleChange}
      />
      <br></br>

      <button type='submit' className='button--signIn'>Sign in</button>
    </div>
    </div>
   
  );
}

export default Page;
