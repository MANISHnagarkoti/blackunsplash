import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Popsliderup from '../component/Popsliderup'
import "../loader css/laoder.css"
import { useParams } from 'react-router-dom';

const SearchPage = () => {

    const [photo, setphoto] = useState([])

    const [singlephoto, setsinglephoto] = useState({})

    const [open, setopen] = useState(false)

    const [singlepicloading, setsinglepicloading] = useState(true)

    const [page, setPage] = useState(1)

    const [loadMoreLoading, setloadMoreLoading] = useState(false)

    let { query } = useParams();






    const getPhotos = async () => {

        setloadMoreLoading(true)

        const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&per_page=9&page=${page}`,


            {
                headers: {
                    "Authorization": `Client-ID ${import.meta.env.VITE_Client_ID}`,

                }
            }


        )

        console.log(data)

        setphoto((prev) => [...prev, ...data.results])

        setloadMoreLoading(false)

    }

    useEffect(() => {

        getPhotos()

    }, [page, query])





    // {{{{{{{{{{{{{{{{{{{get single phtot ingo}}}}}}}}}}}}}}}}}}}



    const getPhotosIngo = async (id) => {

        setsinglepicloading(true)

        setopen(true)



        const { data } = await axios.get(`https://api.unsplash.com/photos/${id}`,


            {
                headers: {
                    "Authorization": `Client-ID ${import.meta.env.VITE_Client_ID}`,

                }
            }


        )




        setsinglephoto(data)


        setsinglepicloading(false)


    }





    return (

        <div className='mt-[100px]'>



            <Popsliderup open={open} setopen={setopen} imginfo={singlephoto} loading={singlepicloading} />



            <div className='w-full md:max-w-[95%] m-auto columns-1 column-gap-5  md:columns-2 lg:columns-4 ' >

                {/* <div className='text-white'>hjgh</div> */}



                <div className=' flex flex-col gap-5'>


                    {

                        photo.map((e) => {


                            return (



                                <div className='overflow-hidden rounded-md relative cursor-pointer group/photo' style={{ background: "rgb(0,0,0)", zIndex: "99" }} onClick={() => getPhotosIngo(e.id)} >



                                    <div className='absolute flex gap-x-4 items-center bottom-5 left-5  z-50' >

                                        <div className='rounded-full overflow-hidden w-[40px] h-[40px]'>
                                            <img src={e.user.profile_image.large} alt="" />
                                        </div>

                                        <div>{e.user.first_name}</div>

                                    </div>


                                    <div className='absolute w-full h-full  z-10' style={{

                                        background: "linear-gradient(180deg, rgba(0,0,0,0) 73%, rgba(0,0,0,0.8127626050420168) 100%)"
                                    }}>






                                    </div>


                                    <img className='w-full h-full group-hover/photo:scale-105 transition-all duration-300 ' src={e.urls.regular} alt="" />

                                </div>




                            )


                        })


                    }

                </div>



            </div>



            {/* {{{{{{{{{{load more}}}}}}}}}} */}

            <div className='mt-20'>

                {

                    loadMoreLoading ?

                        <div className='flex justify-center'>

                            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>
                        :

                        <div onClick={() => setPage((e) => e + 1)} className=' transition-all duration-300 rounded-2xl w-full flex justify-center items-center border-1 border-gray-500 py-3 hover:bg-white hover:text-black cursor-pointer'>
                            Load More
                        </div>

                }

            </div>




        </div >



    )
}

export default SearchPage