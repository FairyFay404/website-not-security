import React, { useEffect }from 'react'
import './content.css'
import Card from './Components/Card'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import config from "../config.json";

const authenURL = `${config["backendURL"]}authen`;

export default function Content(){
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem("token-access");
		try{
			if(!token){
				navigate("/");
			}else{
				axios.post(authenURL, {}, {
					headers: {
						'Authorization': 'Bearer '+token
					},
				}).then(function(response){
					console.log(response.data);
					if(response.data.status == "success"){
						console.log("authenticated success");
						authenticated = true;
					}else{
						localStorage.removeItem("token-access");
						navigate("/");
					}
				}).catch(function(error){

				});
			}
		}catch(error){
			console.log(error);
		}
	}, []);
	return (
		<div className='of-hidden bg-gray'>
			<div className='cover bg-top bg-cover bg-no-repeat' style={{ backgroundImage: "url(/cover.jpg)" }} ></div>
			<section className='suggestion'>
				<div className="max-width-1440 mx-auto">
					<p className='topic font'>Tourist Place</p>
					<p className='describe'>Recommended the place for tourist</p>
				</div>
			</section>
			<section className='bg-gray mt-5px'>
				<div className='flex flex-row justify-center items-center pt-70px'>
					<div className='bg-gray grid grid-cols-4 justify-center items-center gap-20px mt-70px'>
						<Card image="https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1500828131278-8de6878641b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1449673029231-c71b7b47cf5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1622810820824-f233f3f2c9fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1512036849132-48508f294900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1611616910032-b63f95736a93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1521303833147-3c0dc0be5816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1628082878598-ed6b930efb74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1614200991676-910c80a78ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1631045603628-7ea89c855daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1627909962118-e3608b2d227d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
						<Card image="https://images.unsplash.com/photo-1588021472052-0816cfe65fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxuYXR1cmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
					</div>
				</div>
			</section>
		</div>
	)
}