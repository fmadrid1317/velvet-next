import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const menuItems = [
    {
        label:"Home", 
        path:"/"
    },
    {
        label:"Getting Started", 
        path:"/gettingStarted"
    },
    {
        label:"Reccomendations", 
        path:"/recommendedCocktails"
    },
];

function Button({data}){
    const router = useRouter();
    if(data.path === router?.asPath){
        return(
            <Link href={data.path}>
                <button className="px-1 font-bold text-white opacity-90/100 border-b-2 border-white-800 hover:white-gray-900">
                    {data.label}
                </button>
            </Link>
        );
    }
    return(
        <Link href={data.path}>
            <button className="transition-all duration-100 px-2 text-white opacity-90/100 border-b-2 border-transparent text-lg hover:text-gray-300">
                {data.label}
            </button>
        </Link>
    );
}

export default function Header(){
    const router = useRouter();
  
    return(
        <header className="bg-red w-full shadow z-40">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 inline-flex items-center justify-between z-50">
                    <div className="flex items-center justify-start gap-8">
                        {menuItems.map((item) =>{
                            return <Button key={menuItems.label} data={item}/>
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}