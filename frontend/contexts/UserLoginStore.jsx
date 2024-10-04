import UserLoginContext from "./UserLoginContext";
import React from 'react'
import { useState } from "react";


function UserLoginStore({children}) {
    let [user, setUser] = useState({});
    let [userLoginStatus,setUserLoginStatus]=useState(false)

    async function loginUser(userData){
        let res = await fetch(`http://localhost:3000/users?username=${userData.username}&password=${userData.password}`)
        let data = await res.json();
        console.log("in userloginstore loginUser data sent from the api");
        console.log(data)
        if(data){
            setUser(data)
            setUserLoginStatus(true);
        }else{
            setUser({})
        }
    }
    function logoutUser(){
        setUserLoginStatus(false)
        setUser({})
    }
  return (
    <UserLoginContext.Provider value={{user,loginUser, userLoginStatus, setUserLoginStatus,logoutUser, setUser}}>
        {children}
    </UserLoginContext.Provider>
  )
}

export default UserLoginStore