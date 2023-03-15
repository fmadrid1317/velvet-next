import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Card({title, description, cocktail, buttonLabel, routePath}){
   const router = useRouter();

   const handleClick = () =>{
    router.push(`/${routePath}`);
   }
    return(
        <div className="bg-white border rounded-md border-gray p-4 shadow-lg focus:shadow-lg px-10">
            <h1 className="flex text-xl font-bold h-14 items-center justify-center align-middle- border-b">
                {title}
            </h1>
            <p className="flex px-6 pt-3 mt-4 font-sans line-clamp-6 text-center align-middle justify-center">
                {description}
            </p>
            {cocktail &&
            <div className="flex flex-row">
                 <div className="mt-36 w-1/2">
                    <h1 className="font-semibold mb-4">Ingredients</h1>
                    <div>
                        {cocktail.measure1} {cocktail.ingredient1}
                    </div>
                    <div>
                        {cocktail.measure2} {cocktail.ingredient2}
                    </div>
                    <div>
                        {cocktail.measure3} {cocktail.ingredient3}
                    </div>
                </div>
                <div className="mt-12 w-1/2">
                    <div>
                        <Image src={cocktail.image} width="350" height="350"/>
                    </div>
                </div>
            </div>
            }
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