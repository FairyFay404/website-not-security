import React from 'react'
import axios from 'axios'; 
import { useEffect,useState } from 'react';

const loginURL = "http://localhost:5000/login";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = () =>{
        axios.post(loginURL, {
            username: username,
            password: password
        })
        .then(function (res) {
            if(res.data.status == "success") {
                alert(res.data.message);
            }
            else{
                alert(res.data.message);
            }
        });
    }


    return (
        <>
            <div className="bg-black flex flex-row justify-center items-center">
                <div className="bg-white border-radius-10 ">
                    <div className='flex flex-col justify-center items-center'>
                        <p className="text-hackme">Hack me please !!!</p>
                    </div>
                    <div>
                        <p className="text-username set-margin-left">Username</p>
                        <input className="input-username set-margin-left" type="text" placeholder="username" onChange={(event) => { setUsername(event.target.value) }}/>
                    </div>
                    <div>
                        <p className="text-password set-margin-left">Password</p>
                        <input className="input-password set-margin-left" type="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}/>
                    </div>
                    <div className="flex flex-col justify-center items-center margin-top-button">

                    <button className="button-login" onClick={login}>Login</button>
                    </div>
                </div>

                {/* <input type="password" placeholder="username" /> */}
            </div>
        </>
    )
}
