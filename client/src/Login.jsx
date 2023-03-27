import React from 'react'

export default function Login() {
    return (
        <>
            <div className="bg-black flex flex-row justify-center items-center">
                <div className="bg-white border-radius-10 ">
                    <div className='flex flex-col justify-center items-center'>
                        <p className="text-hackme">Hack me please !!!</p>
                    </div>
                    <div>
                        <p className="text-username set-margin-left">Username</p>
                        <input className="input-username set-margin-left" type="text" placeholder="username" />
                    </div>
                    <div>
                        <p className="text-password set-margin-left">Password</p>
                        <input className="input-password set-margin-left" type="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col justify-center items-center margin-top-button">

                    <button className="button-login">Login</button>
                    </div>
                </div>

                {/* <input type="password" placeholder="username" /> */}
            </div>
        </>
    )
}
