import React, { useContext } from 'react'

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLoginContext from '../../../contexts/UserLoginContext';

function BusPassApplication() {
    // handleformsubmit is main function to generate the busspass
    let {registerBusPass} = useContext(UserLoginContext);

    function handleFormSubmit(data){
        registerBusPass(data);
        registrationStatus = true;
        setSubErr("Form submitted")
    }

    let registrationStatus = false;
    let {register, handleSubmit, formState:{errors}} = useForm();
    let navigate= useNavigate();
    let [err, setErr] = useState("");
    let [suberror, setSubErr] = useState("");
  return (
    <div style={{paddingTop:"15px"}}>
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
                    <option value="monthly">monthly</option>
                    <option value="yearly">yearly</option>
              </select>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>passtype required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="routedetails" className='form-label'>route (if applying for route pass)</label>
              <input type="text" className='form-control' {...register('routedetails')}/>
            </div>

            <div className='mb-2'>
              <label htmlFor="passportimage" className='form-label'>upload passport size photo</label>
              <input type="file" accept="image/*" className='form-control' {...register('passportimage', {required:true})}/>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>photo required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="aadhar" className='form-label'>upload Aadhar card</label>
              <input type="file" accept="image/*" className='form-control' {...register('aadhar', {required:true})}/>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>Aadhar required</p>}
            </div>

            <div className='mb-2'>
              <label htmlFor="marklist" className='form-label'>Tenth marks list</label>
              <input type="file" className='form-control' {...register('marklist', {required:true})}/>
              {errors.username?.type === 'required' && <p className='formSubmitErrors'>link required</p>}
            </div>

            <button className="btn btn-success">Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default BusPassApplication