import React from "react";
import { useRouter } from "next/router";

export default function Card({title, description, ingredients, buttonLabel, routePath}){
   const router = useRouter();

   const handleClick = () =>{
    router.push(`/${routePath}`);
   }
    return(
        <div className="bg-white border rounded-md border-gray p-4 shadow-lg focus:shadow-lg px-10">
            <h1 className="flex text-xl fontfont-semibold h-14 items-center justify-center align-middle- border-b">
                {title}
            </h1>
            <p className="flex px-6 pt-3 mt-4 font-sans line-clamp-6 text-center align-middle justify-center">
                {description}
            </p>
            {buttonLabel && 
            <div className="flex align-bottom items-bottom justify-center mt-10 mx-5">
                <div className="inline-block align-bottom gap-2">
                    <button
                        id=""
                        className="flex justify-center items-center gap-2 blue w-32 rounded-lg hover:shadow-md text-white bg-blue hover:bg-blue hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-gray border-2 focus:ring-2 ring-gray outline-none"
                        title={`${buttonLabel}-button`}
                        onClick={handleClick}
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
            }
        </div>

    );
}