import UserLoginContext from "./UserLoginContext";
import React from 'react'
import { useState } from "react";

function UserLoginStore({children}) {
    let [user, setUser] = useState([]);
    let [busPassRegister, setBusPassRegister] = useState({});
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    async function loginUser(userData){
        let res = await fetch(`http://localhost:3000/users?username=${userData.username}&password=${userData.password}`)
        let data = await res.json();
        setUser({...data[0]})
        console.log("eifedfef");
        if(data.length != 0){
            setUserLoginStatus(true);
            console.log(user);
        }
    }
    function logoutUser(){
        setUserLoginStatus(false)
    }
    function registerBusPass(userData){
        console.log("in store userData");
        console.log(userData);
    }
  return (
    <UserLoginContext.Provider value={{user,loginUser, 
    userLoginStatus, setUserLoginStatus,logoutUser, setUser, busPassRegister, setBusPassRegister, registerBusPass}}>
        {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginStore