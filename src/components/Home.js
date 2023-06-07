import React from "react"
import  HeroImage from "../assets/manisha.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home=()=>{

    return(

       <>
       <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
         <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4
         md:flex-row ">
            <div className="flex flex-col justify-center h-full mt-16 ">
                <h2 className="text-4xl  sm:text-6xl font-bold text-white">
                    I'm a FrontEnd Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">I am Fresher.
                    Currently,I love to work on web application using technologies like Html ,
                    Css ,Js , React , Tailwind.
                    Currently,I love to work on web application using technologies like Html ,
                    Css ,Js , React , Tailwind.
                </p>
                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                    </button>
                </div>
            </div>

            <div className="flex justify-center  ">
                <img src={HeroImage} alt="my Profile" className=" rounded-2xl mt-20  w-1/3 md:w-full"/>
            </div>
         </div>
         </div>
    </>   
 )
}

export default Home;