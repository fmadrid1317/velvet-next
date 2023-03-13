import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function DefaultLayout({children}){
   
    return(
        <>
            <Header/>
            <main className="max-w-7xl mx-auto mt-10">{children}</main>
            <div className="relative inset-x-0 bottom-0 h-16">
                {<Footer/>}
            </div>
        </>
    );
}