import React from 'react';
import './LoginPage.css';
import { useForm } from 'react-hook-form'

function Page() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const { register, handleSubmit, formState: {errors} } = useForm()

  function handleChange(event){
    const {name, value} = event.target
    setFormData( prevFormData => {
      return {
        ...prevFormData, 
       [name] : value
      }
    })
  }


  const onSubmit = (data) => {
    console.log(data)
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
        {...register("email", {required: true, pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/} )}
        name='email'
        value={formData.email}
        onChange ={handleChange}
        />
        {errors.email && errors.email.type === 'required' 
        && (<p>Email is required</p>)}
        {errors.email && errors.email.type === 'pattern' 
        && (<p>Email is not valid</p>)}
        </div>

        <div>
        <label>Password</label>
        <input
        type='password'
        placeholder='Password'
        className='page--input'
        name='password'
        {...register("password", {required:true, minLength: 6} )}
        value={formData.password}
        onChange={handleChange} 
        />
        {errors.password &&  errors.password.type === 'required'
        && (<p>Password is require</p>)}
        {errors.password && errors.password.type === 'minLength'
        && (<p>Password should be at least 6 characters</p>)}
        </div>

        <div>
        <label>Confirm Password</label>
        <input 
        type='password'
        placeholder='Confirm Password' 
        className='page--input'
        {...register("passwordConfirm", {required:true})}
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
