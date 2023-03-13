import React from "react";

export default function Footer(){
   
    const links = [
        {name:"About Luis", url:"https://www.instagram.com/7v1z/?hl=en"},
        {name:" My Github", url: "https://github.com/fmadrid1317"}
    ];

    const makeExternalLinks = (link) =>{
        link.map((link, index)=>{
            return(
                <a
                    key={index}
                    className='text-center text-blue text-base p-1 hover:text-blue h-auto hover:text-shadow-md transform transition-all duration-75 ease-in-out'
                    href={link.url}
                >
                    {link.name}
                </a>
            )
        })
    }


    

    return(
        <div className="mt-10 bottom-0 opacity-90 w-full mx-autoz-40">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t">
                <div className="w-full py-4 inline-flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {makeExternalLinks(links)}
                    </div>
                </div>
            </nav>
        </div>
    );
}