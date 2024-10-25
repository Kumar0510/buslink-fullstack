import React from 'react'
import UserLoginContext from '../../../contexts/UserLoginContext'
import { useContext } from 'react'
import "./mypass.css"

function Mypass() {
    let {user, busPassRegister, busPassRegisterStatus, setBusPassRegister} = useContext(UserLoginContext);
    async function handleClick(){
        let res = await fetch(`https://buslink-fullstack.onrender.com/pass-api/passcheck/${user.username}`)
        let response = await res.json();

        if(response.message === 'Token expired'){
            let res = await fetch(`https://buslink-fullstack.onrender.com/pass-api/pass/${user.username}`,
                {
                    method :"put",
                    headers : {"Content-type" : "application/json"}
                }
            )
            res = await res.json();
            console.log('updated');
            console.log(res);
        }
        console.log("in handle lcik");
        console.log(response.message);
        setBusPassRegister(response.payload)

        localStorage.setItem("username", response.payload.username)
    }
    return (
        <div className='mx-auto'>
            {localStorage.getItem("username")? (
            <div className="card" >
                <div className='heading text-center'>
                <img src="/src/assets/logo.png" alt="" />
                <h5 className="card-title">Buspass</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">
                        <img src={busPassRegister.passportimage} className='m-6 profile' alt="" />
                    </li>
                    <li className="list-group-item">
                        <p className="card-title">Name: {busPassRegister.fullname}</p>
                    </li>
                    <li className="list-group-item">
                        <p className="card-title">Passtype: {busPassRegister.passtype}</p>
                        
                    </li>
                    <li className="list-group-item">
                        <p className="card-title">Duration: {busPassRegister.duration} days</p>
                    </li>
                </ul>
            </div>
            
            ) :  
            (
            < div className=" m-10 text-center text-danger"> 
                <p>No bus pass available please register for the bus pass</p>
                <p>please click on check to update this page</p>
            </div>  
            )}
            <div className='text-center'>
                <button className='btn btn-success text' onClick={handleClick}>check</button>
            </div>
        </div>
    )
}

export default Mypass