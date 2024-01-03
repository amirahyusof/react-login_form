import React from 'react';
import './LoginPage.css';
import { useForm } from 'react-hook-form'

function Page() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const {register, handleSubmit, formState:{ errors }} = useForm()

  function handleChange(event){
    const {name, value} = event.target
    setFormData( prevFormData => {
      return {
        ...prevFormData, 
       [name] : value
      }
    })
  }


  function onSubmit(event) {
    event.preventDefault()

    if(formData.password === formData.passwordConfirm){
      alert("Password match");

    } else {
      alert("Passwords do not match")

    }

    if(formData.email === ""){
      alert("Please write your email")
    
    } else {
      alert("Thank you")
      return
    }

    alert("Thank you for login")
    
  }

  console.log(formData)

  return (
    <div className='box--container'>
       <form className="login--container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className='page--header'>Login</h1>
  
        <div>
        <label>Email</label>
        <input 
        type='email'
        placeholder='Enter your email'
        className='page--input'
        {...register("email", {required: true, pattern:/^\S+@\S+$/i} )}
        name='email'
        value={formData.email}
        onChange ={handleChange}
        />
        {errors.email && <p>Email is required and must be valid</p>}
        </div>

        <div>
        <label>Password</label>
        <input
        type='password'
        placeholder='Password'
        className='page--input'
        name='password'
        {...register("password", {require:true} )}
        value={formData.password}
        onChange={handleChange} 
        />
        {errors.password && <p>Password is require</p>}
        </div>

        <div>
        <label>Confirm Password</label>
        <input 
        type='password'
        placeholder='Confirm Password' 
        className='page--input'
        {...register("passwordConfirm", {require:true})}
        name='passwordConfirm'
        value={formData.passwordConfirm}
        onChange={handleChange}
        />
        {errors.passwordConfirm && <p>Password does not match</p>}
        </div>
    

        <button type='submit' className='button--signIn'>Sign in</button>
      </form>
    </div>
   
  );
}

export default Page;
