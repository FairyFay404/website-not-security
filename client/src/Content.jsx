import React, { useEffect }from 'react'
import './content.css'
import Card from './Components/Card'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const authenURL = "http://localhost:5000/authen";

export default function Content() {
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token-access");
        axios.post(authenURL, {},{
            headers: {
                'Authorization': 'Bearer '+token
            },
          })
          .then((res) => {
            if(res.data.status == "success"){
                alert("authen success")
            }
            else{
                localStorage.removeItem("token-access");
                navigate("/"); //go to login page
            }
          })
          .catch((error) => {
            console.log(error)
          });

    }, []);

    return (
        <>
            <div >
                <div className='cover bg-top bg-cover bg-no-repeat' style={{ backgroundImage: "url(/cover.jpg)" }} ></div>
                <section className='suggestion'>
                    <div className="max-width-1440 mx-auto">
                        <p className='topic'>Tourist Place</p>
                        <p className='describe'>Recommended the place for tourist</p>
                    </div>
                </section>
                <section className='bg-gray mt-5px'>
                    <div className='flex flex-row justify-center items-center pt-70px'>
                        <div className='grid grid-cols-4 justify-center items-center gap-40px mt-70px'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>

                </section>
            </div>


        </>
    )
}
