import React from 'react';
import './LoginPage.css';

function Page() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const [inputError, setInputError] = React.useState({
    email: "",
    password: "",
    passwordConfirm: ""
  })
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  function handleChange(event){
    const {name, value} = event.target

    setFormData( prevFormData => {
      return {
        ...prevFormData, 
       [name] : value
      }
    })

    if(name === 'email'){
      if(value.match(validRegex)){
        setInputError(prevInputError => ({
          ...prevInputError, 
          [name]: null
        }))
      } else {
        setInputError(prevInputError => ({
          ...prevInputError, 
          [name]: "Please enter valid email"
        }))
    }
  } 
  
  else if(name === 'password'){
    if(value.length >= 6){
      setInputError(prevInputError =>({
        ...prevInputError, 
        [name]:null
      }))
    }
   else {
    setInputError(prevInputError => ({
      ...prevInputError, 
      [name]: "Password must be at least 6 characters"
    }))
    } 
  }

  else if (name === 'passwordConfirm'){
    if(value === formData.password){
      setInputError(prevInputError => ({
        ...prevInputError, 
        [name]: null
      }))
    } else {
    setInputError(prevInputError => ({
      ...prevInputError, 
      [name]: "Password do not match"
      }))
    }
  }
}


  function handleSubmit(event){
    event.preventDefault()

    if(formData.password !== formData.passwordConfirm){
      setInputError(prevInputError => ({
        ...prevInputError, 
        passwordConfirm: 'Password do not match'
      }))
    } else {
      //procedd with submission
      alert("Thank you for logging in")
    }

  }

  console.log(formData)

  return (
    <div className='box--container'>
       <form className="login--container" onSubmit={handleSubmit}>
        <h1 className='page--header'>Login</h1>

        <label>Email</label>
        <div className='page--input'>
        <input 
        type='email'
        placeholder='Enter your email'
        name='email'
        className='input--value'
        value={formData.email}
        onChange ={handleChange}
        />
        {inputError.email && <div style={{color:'red'}}>{inputError.email}</div>}
        </div>

        <label>Password</label>
        <div className='page--input'>
        <input
        type='password'
        placeholder='Password'
        name='password'
        className='input--value'
        value={formData.password}
        onChange={handleChange} 
        />
        {inputError.password && <div style={{color: 'red'}}>{inputError.password}</div>}
        </div>

        <label>Confirm Password</label>
        <div className='page--input'>
        <input 
        type='password'
        placeholder='Confirm Password'
        name='passwordConfirm'
        className='input--value'
        value={formData.passwordConfirm}
        onChange={handleChange}
        />
        {inputError.passwordConfirm && <div style={{color: 'red'}}>{inputError.passwordConfirm}</div>}
        </div>
    

        <button type='submit' className='button--signIn'>Sign in</button>
      </form>
    </div>
   
  );
}

export default Page;
