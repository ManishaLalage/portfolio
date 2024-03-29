import React from "react"
import  HeroImage from "../assets/manisha.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home=()=>{

    return(

       <>
       <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
         <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4
         md:flex-row ">
            <div className="flex flex-col justify-center h-full ">
            <p className="text-gray-500 py-4 max-w-md">Hi , I'm 
                </p>
                <h2 className="text-2xl  sm:text-2xl font-bold text-white">
                   Manisha Lalage
                </h2>
                <h2 className="text-xl  sm:text-xl font-bold text-gray-300">
                   Fresher
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                Hello! My name is Manisha and I enjoy creating things that live on the internet. 
               I love to work on web application using technologies like Html ,
                    Css ,Js , React , Tailwind.
                </p>
                {/* <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                    </button>
                </div> */}

                
<div>
                            <a  href="/resume.pdf" download={true} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                
                                Resume 
                                <span className='group-hover:rotate-90 duration-300'>
                                    {/* <MdOutlineKeyboardArrowRight size={25} className = "ml-1"/> */}
                                </span>
                               
                            </a>
                        </div>
            </div>

            <div className="flex justify-center  ">
                <img src={HeroImage} alt="my Profile" className=" rounded-2xl   w-2/3 md:w-2/3"/>
            </div>
         </div>
         </div>
    </>   
 )
}

export default Home;