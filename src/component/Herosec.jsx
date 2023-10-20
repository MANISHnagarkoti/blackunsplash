import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Blurhash } from "react-blurhash";

const Herosec = () => {


    const [photo, setphoto] = useState({})

    const getRandomPhotos = async () => {

        const { data } = await axios.get(`https://api.unsplash.com/photos/random?orientation=landscape`,


            {
                headers: {
                    "Authorization": `Client-ID ${import.meta.env.VITE_Client_ID}`,

                }
            }


        )

        setphoto(data)


    }

    useEffect(() => {

        // getRandomPhotos()

    }, [])






    return (
        <div className='h-[400px] m-auto w-full md:max-w-[95%] ' >



            <div className='relative rounded-2xl overflow-hidden h-full mt-8 '>

                {/* <img src={photo?.urls?.regular} className='object-center object-cover w-full h-full ' alt="" /> */}

                <img src="https://images.unsplash.com/photo-1697143493170-8cf836596b34?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-center object-cover w-full h-full ' alt="" />


                <div className='absolute top-0 w-full  h-full flex flex-col  items-center justify-center px-2' style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", }}   >




                    <div className='text-white font-bold text-2xl md:text-4xl'>Trusted Over Millions of users</div>

                    <div className='text-white  text-md md:text-lg mt-2'>Get photos in everything , we provide you Img</div>

                    <div className='flex items-center mt-3 justify-center gap-x-4 rounded-full bg-gray-200 border-gray-300 border-2 py-3 px-6  w-[100%]  md:w-[600px]  '   >


                        <ion-icon name="search-outline" style={{ fontSize: "20px", color: "black" }}></ion-icon> <input type="text" name="" className=' outline-none w-full h-full ' placeholder='Search Images' id="" />


                    </div>


                </div>



            </div>





        </div>
    )
}

export default Herosec