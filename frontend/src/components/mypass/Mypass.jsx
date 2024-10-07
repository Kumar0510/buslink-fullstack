import React from 'react'
import UserLoginContext from '../../../contexts/UserLoginContext'
import { useContext } from 'react'
import "./mypass.css"

function Mypass() {
    let {user, busPassRegister, busPassRegisterStatus, setBusPassRegister} = useContext(UserLoginContext);
    async function handleClick(){
        let res = await fetch(`http://localhost:4001/pass-api/pass/${user.username}`)
        let response = await res.json();
        console.log(response);
        setBusPassRegister(response.payload)
    }
    
    return (
        <div className='text-center'>
            {busPassRegister.username? (
            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title">Buspass</h5>
                    <img src={busPassRegister.passportimage} alt="" />
                    <p className="card-title">{busPassRegister.fullname}</p>
                    <p className="card-title">{busPassRegister.passtype}</p>
                    <p className="card-title">{busPassRegister.duration}</p>
                    <p></p>
                </div>
            </div>
            ) :  
            (
            < div className=" m-10 text-center text-danger"> NO bus pass available please register or the bus pass </div>  
            )}
            <button className='btn btn-success' onClick={handleClick}>check</button>
        </div>
    )
}

export default Mypass