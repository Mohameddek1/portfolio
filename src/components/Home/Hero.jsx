import React from 'react';
import './Hero.css'; // Optional: Keep your custom keyframes here if needed

function Hero() {
    return (
        <div className="h-[888px] md:h-[100vh] flex flex-col md:flex-row items-center border border-gray-300 shadow-lg">
            {/* Right Section (Image) */}
            <div className="flex-1 flex justify-center items-center order-first md:order-last mt-5 md:mt-0">
                <div
                    className="rounded-full h-64 w-64 md:h-96 md:w-96 flex items-center justify-center"
                    style={{
                        background: "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
                        padding: "5px",
                    }}
                >
                    <img
                        src="Images/pic1.jpg"
                        alt="img"
                        className="rounded-full h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* Left Section (Text) */}
            <div className="flex-1 text-center md:text-left mt-5 md:mt-0 px-4 md:px-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl uppercase font-extrabold tracking-widest animate-text">
                    Hey, I'm Mohameddeq Abdi
                </h1>
                <p className="text-base md:text-lg lg:text-xl mt-6 leading-relaxed">
                    A Result-Oriented Web Developer and Cybersecurity Enthusiast. <br />
                    I specialize in building and managing Websites and Web Applications <br />
                    while securing systems through advanced penetration testing, <br />
                    binary exploitation, and network security techniques.
                </p>
                <div className="flex justify-center md:justify-start mt-10">
                    <button className="bg-zinc-600 hover:bg-zinc-800 hover:scale-[1.02] py-3 px-8 md:py-4 md:px-12 rounded-md">
                        <span className="text-white text-base md:text-lg font-bold">PROJECTS</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
