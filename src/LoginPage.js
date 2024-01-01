import React from 'react';
import './LoginPage.css';

function Page() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  function handleChange(event){
    setFormData( prevFormData => {
      return {
        ...prevFormData, 
       [event.target.name] : event.target.value
      }
    })
  }


  function handleSubmit(event){
    event.preventDefault()

    if(formData.password === formData.passwordConfirm){
      console.log("Password match");

    } else {
      console.log("Passwords do not match")

    }

    if(formData.email === ""){
      console.log("Please write your email")
    
    } else {
      console.log("Good job")
      return
    }
    
  }

  console.log(formData)

  return (
    <div className='box--container'>
       <form className="login--container" onSubmit={handleSubmit}>
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
        name='passwordConfirm'
        value={formData.passwordConfirm}
        onChange={handleChange}
        />
        <br></br>

        <button type='submit' className='button--signIn'>Sign in</button>
      </form>
    </div>
   
  );
}

export default Page;
