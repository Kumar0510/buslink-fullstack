import React, { useContext } from 'react'

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLoginContext from '../../../contexts/UserLoginContext';
import './renewal.css'

function Renewal() {
    let {busPassRegister, setBusPassRegister, user} = useContext(UserLoginContext);
    let status = "";
    async function handleFormSubmit(data){
        setBusPassRegister({...data})

        let res = await fetch(`http://localhost:4001/pass-api/passrenewal/${user.username}`,
          {
          method :"put",
          headers : {"Content-type" : "application/json"},
          body : JSON.stringify(data)
          }
        );
        let response = await res.json();

        console.log("handle submit buspass register");
        console.log(response);
        registrationStatus = true;
        status = response.message;
        console.log(status);
        setSubErr("Form submitted")
    }

    let registrationStatus = false;
    let {register, handleSubmit, formState:{errors}} = useForm();
    let navigate= useNavigate();
    let [err, setErr] = useState("");
    let [suberror, setSubErr] = useState("");
  return (
    <div style={{paddingTop:"15px"}} className='renewalmain'>
        <p className='text-center display-6' >Bus Pass Renewal</p>
        <p className='text-center text-danger'>{err}</p>
        <p className='text-center text-success'>{suberror}</p>

        
        <div className='row'>
  
        <div className=' p-5 col-lg-5  col-mb-5 col-sm-5 mx-auto form-group'>
          <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='mb-2'>
              <label htmlFor="fullname" className='form-label'>Full Name</label>
              <input type="text" className='form-control' {...register('fullname', {required:true})}/>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>fullname required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="passtype" className='form-label'>Type of pass</label>
              <select className='bg-light m-2' {...register("passtype")}>
                    <option value="route">route</option>
                    <option value="general">general</option>
              </select>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>passtype required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="duration" className='form-label'>Duration</label>
              <select className='bg-light m-2' {...register("duration")}>
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
              </select>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>passtype required</p>}
            </div>

            <button className="btn btn-success">Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Renewal