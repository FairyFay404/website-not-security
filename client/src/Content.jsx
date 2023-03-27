import React from 'react'
import './content.css'
import Card from './Components/Card'

export default function Content() {
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
