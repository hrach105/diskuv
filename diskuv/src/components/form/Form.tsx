import React from 'react'

import Button from '../Button'
import Textarea from './Textarea'

import { useForm } from "react-hook-form";
import './form.scss'




const isValidEmail = (email: string) =>

  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const Form = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      firstName: '',
    }
  });

  const handleEmailValidation = (email: string) => {
    

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };
  
    const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='inputs'>
       
      <div className="inputs-field">
        <input className='input' placeholder='Enter your name' {...register("firstName", { required: true })} />
        {errors.firstName && <p className='input-error'>This field is required</p>}
      </div>

       <div className="inputs-filed">
       <input
            className='input'
            {...register("email", {
            required: "Email is Required...",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          placeholder="Email"
        />
      {errors.email?.message && <p className='input-error'>{errors.email.message}</p>}
       </div>
        </div>
       <Textarea />
      <div> 
        <Button btnType="submit" btnText="Submit Your Message" />
      </div>
    </form>
  )
}

export default Form