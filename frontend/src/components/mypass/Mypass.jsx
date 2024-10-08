import React from 'react'
import UserLoginContext from '../../../contexts/UserLoginContext'
import { useContext } from 'react'
import "./mypass.css"

function Mypass() {
    let {user, busPassRegister, busPassRegisterStatus, setBusPassRegister} = useContext(UserLoginContext);
    async function handleClick(){
        let res = await fetch(`http://localhost:4001/pass-api/passcheck/${user.username}`)
        let response = await res.json();

        if(response.message === 'Token expired'){
            let res = await fetch(`http://localhost:4001/pass-api/pass/${user.username}`,
                {
                    method :"delete",
                    headers : {"Content-type" : "application/json"}
                }
            )
            res = await res.json();
            console.log('deleted');
        }
        console.log("in handle lcik");
        console.log(response.message);
        
        setBusPassRegister(response.payload)
    }
    return (
        <div className='mx-auto'>
            {busPassRegister? (
            <div className="card " >
                <div className="card-body p-5">
                    <div className='heading text-center'>
                        <img src="/src/assets/logo.png" alt="" />
                        <h5 className="card-title">Buspass</h5>
                    </div>
                    
                    <img src={busPassRegister.passportimage} className='m-6 profile' alt="" />
                    <p className="card-title">Name: {busPassRegister.fullname}</p>
                    <p className="card-title">Passtype: {busPassRegister.passtype}</p>
                    <p className="card-title">Duration: {busPassRegister.duration} days</p>
                    <p></p>
                </div>
            </div>
            ) :  
            (
            < div className=" m-10 text-center text-danger"> No bus pass available please register for the bus pass</div>  
            )}
            <div className='text-center'>
                <button className='btn btn-success text' onClick={handleClick}>check</button>
            </div>
        </div>
    )
}

export default Mypass