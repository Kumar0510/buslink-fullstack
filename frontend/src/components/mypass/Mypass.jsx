import React from 'react'
import UserLoginContext from '../../../contexts/UserLoginContext'
import { useContext } from 'react'
import "./mypass.css"


function Mypass() {
    let {busPassRegister, busPassRegisterStatus} = useContext(UserLoginContext);
    console.log(busPassRegister);
    return (
        <>
            {busPassRegisterStatus === true ? (
            <div className="card text-center" >
            <div className="card-body">
                <h5 className="card-title">Buspass</h5>
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
        </>
    )
}

export default Mypass