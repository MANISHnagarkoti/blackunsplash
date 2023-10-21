import React, { useEffect, useState } from 'react'

const Popsliderup = ({ open, setopen, imginfo, loading }) => {





    if (open) {


        document.body.style.overflow = 'hidden';


    } else {

        document.body.style.overflow = 'visible';


    }



    console.log(imginfo)




    return (

        <div className={open ? '   w-full fixed top-0 h-full  opacity-100 ' : ' opacity-0 top-[0px]  right-0 left-0 pointer-events-none fixed'} style={{ zIndex: "100", backgroundColor: "rgba(0, 0, 0, 0.711)" }}>




            <ion-icon name="close-outline" className='text-white  ' style={{ margin: "10px 0px 0px 10px", fontSize: "30px", cursor: "pointer" }} onClick={() => setopen(false)} ></ion-icon>


            <div className={open ? 'mt-[10px]  w-full h-[93%] p-3  bottom-0    rounded-t-3xl   translate-y-0  absolute' : ' translate-y-[200px]  '} style={{ zIndex: "999", overflowY: "scroll", backgroundColor: "rgb(15,15,15)" }} >



                {


                    loading ?

                        <div className='text-white'>

                            loading

                        </div>


                        :


                        <div>



                            <div className='flex justify-between items-center flex-wrap gap-y-5 ' >

                                <div className='flex gap-x-3 items-center' >

                                    <div className='rounded-full  overflow-hidden w-[40px] h-[40px] '>
                                        <img src={imginfo?.user.profile_image.large} alt="" />
                                    </div>

                                    <div className='text-white'>
                                        {imginfo?.user.first_name}     {imginfo?.user.last_name}

                                    </div>


                                </div>



                                <div className='flex gap-x-3 items-center'>


                                    <ion-icon name="location-outline"></ion-icon>

                                    <div>

                                        {imginfo?.user.location}

                                    </div>

                                </div>


                            </div>


                            <div className='flex justify-center mt-5 w-full  md:h-[700px] '>

                                <img src={imginfo?.urls?.regular} className='w-full h-full object-contain' alt="" />


                            </div>


                            <div className='text-center text-xl mt-10 '>{imginfo?.alt_description}</div>







                        </div>
                }




            </div>




        </div>



    )
}

export default Popsliderup