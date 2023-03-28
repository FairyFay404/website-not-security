import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const loginURL = "http://localhost:5000/login";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = () => {
        axios.post(loginURL, {
            username: username,
            password: password
        })
            .then(function (res) {
                if (res.data.status == "success") {
                    alert(res.data.message)
                    localStorage.setItem("token-access", res.data.token);
                    navigate("/content");
                }
                else {
                    alert(res.data.message);
                    navigate("/")
                }
            });
    }

    const signin = () => {
        navigate("/register")
    }


    return (
        <>
            <div className="bg-black flex flex-row justify-center items-center">
                <div className="bg-white border-radius-10 ">
                    <div className='flex flex-col justify-center items-center'>
                        <p className="text-hackme font">Hack me please !!!</p>
                    </div>
                    <div className='flex flex-col justify-center items-left'>
                        <p className="text-username ">Username</p>
                        <input className="input-username" type="text" placeholder="username" onChange={(event) => { setUsername(event.target.value) }} />
                    </div>
                    <div className='flex flex-col justify-center items-left'>
                        <p className="text-password ">Password</p>
                        <input className="input-password " type="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div className="flex flex-row justify-center items-center margin-top-button gap-10px">

                        <button className="button-login" onClick={login}>Login</button>
                        <button className="button-signin" onClick={signin}>Sign in</button>
                    </div>
                </div>

                {/* <input type="password" placeholder="username" /> */}
            </div>
        </>
    )
}
