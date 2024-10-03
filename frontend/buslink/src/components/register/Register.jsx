import React from 'react'
import "./Register.css"

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    let {register, handleSubmit, formState:{errors}} = useForm();
    let navigate= useNavigate();
    let [err, setErr] = useState("");

    async function handleFormSubmit(data){
      try{
        let res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(data)
        });
        let d = await res.json();
        console.log(d);
        if(d) navigate('/login')
        else{//this  is related to user already existed and not an error 
          setErr(d.message);
        }
      }
      //THIS error is related to database or server 
      catch(err){
        setErr(err.message)
      }
    }
  
    return (
      <div style={{paddingTop:"30px"}}>
        <p className='display-6 text-center'>User Regsiter</p>
        <p className='text-center text-danger'>{err}</p>
        <div className='row'>
  
        <div className='bg-light p-5 col-lg-5  col-mb-5 col-sm-5 mx-auto form-group'>
          <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='mb-2'>
              <label htmlFor="username" className='form-label'>Username</label>
              <input type="text" className='form-control' {...register('username', {required:true})}/>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>Username required</p>}
            </div>
  
            <div className='mb-2'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" className='form-control' {...register('email', {required:true})}/>
              {errors.password?.type === 'required' && <p className='formSubmitErrors'>Email required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" className='form-control' {...register('password', {required:true})}/>
              {errors.password?.type === 'required' && <p className='formSubmitErrors'>Password required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="mobile" className='form-label'>Mobile</label>
              <input type="number" className='form-control' {...register('mobile', {required:true})}/>
              {errors.password?.type === 'required' && <p className='formSubmitErrors'>Mobile required</p>}
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
        
      </div>
      </div>
    )
  }
export default Register