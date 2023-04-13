import React, { useState } from 'react'
import "./register.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import config from "../config.json";

const registerURL = `${config["backendURL"]}register`;

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	const register = () => {
		axios.post(registerURL, {
			username: username,
			password: password,
			fName : firstName,
			lName : lastName,
			email : email
		}).then(function (res) {
			if (res.data.status == "success") {
				alert(res.data.message);
				navigate("/");
			}
			else {
				alert(res.data.message);
			}
		});
	}

	return (
		<div className="bg-black flex flex-row justify-center items-center">
			<div className="bg-background border-radius-10 ">
				<div className='flex flex-col justify-center items-center'>
					<p className="text-register font">Register</p>
				</div>
				<div>
					<p className="text-username">Username</p>
					<input className="input-username" type="text" placeholder="username" onChange={(event) => { setUsername(event.target.value) }}/>
				</div>
				<div>
					<p className="text-password">Password</p>
					<input className="input-password" type="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}/>
				</div>
				<div>
					<p className="text-firstname">First name</p>
					<input className="input-firstname" type="text" placeholder="firstname" onChange={(event) => { setFirstName(event.target.value) }}/>
				</div>
				<div>
					<p className="text-lastname">Last name</p>
					<input className="input-lastname" type="text" placeholder="lastname" onChange={(event) => { setLastName(event.target.value) }}/>
				</div>
				<div>
					<p className="text-email">E-mail</p>
					<input className="input-email" type="text" placeholder="email" onChange={(event) => { setEmail(event.target.value) }}/>
				</div>
				<div className="flex flex-col justify-center items-center margin-top-button">

				<button className="button-register" onClick={register}>Register</button>
				</div>
			</div>
		</div>
	)
}
