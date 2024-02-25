import React,{ useState } from "react";
import $ from 'jquery';
import resume from "../assets/JaswantVaddiCV.pdf"
export default function HeroSection(){
    function downloadResume () {
        window.open(resume)
    }
    function contactDOM(){
        const contacs = $("#contacts")[0];
        contacs.scrollIntoView({ behavior: 'smooth' });
    }
    return(
        <>
        <div id='Home' className="min-h-screen flex flex-col md:flex-row max-w-5xl mx-auto">
            {/* Name */}
            <div className="font-kalam pl-[66px] flex flex-col min-h-screen justify-center gap-3 text-left md:w-1/2">
                <p className="text-3xl font-light">Hi I am</p>
                <h2 className="text-6xl font-bold">Jaswant Vaddi</h2>
                <p className="text-3xl font-light">Full stack web developer</p>
                <div className="flex flex-row gap-5 text-2xl">
                    <button onClick={contactDOM} className="btn cursor-pointer hover:bg-dark_primary hover:text-white">Contact Me</button>
                    <button onClick={downloadResume} className="btn cursor-pointer  hover:bg-dark_primary hover:text-white">My Resume</button>
                </div>
            </div>
            {/* About Me */}
            <div className="min-h-screen pl-[66px] md:pl-0 pr-10 font-kalam flex gap-5 flex-col justify-center text-left md:w-1/2">
                <h2 className="text-4xl">About Me</h2>
                <p className="text-3xl font-light">
                I come from the vibrant state of Andhra Pradesh, India. I have started my journey with a degree in Avionics,
                I have started to self learn coding after my degree. Currently,
                I thrive as a full-stack software developer,
                working the ASP.NET framework. My heart belongs to JavaScript and Python languages.
                Beyond code, I’m an avid chess enthusiast, I have also participated in state-level chess championships.
                I also have big addiction to FPS gaming. my life moto is like
                As Steve Jobs wisely said, “Stay hungry, stay foolish.” 🚀
                </p>
            </div>
        </div>
        </>
    )
}