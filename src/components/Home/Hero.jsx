import React from 'react';
import './Hero.css';
import Profilepic from '../../assets/pic1.jpg';
import { FaGithub } from 'react-icons/fa';  // Importing GitHub icon from react-icons

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
                        src={Profilepic}
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
                    Cybersecurity enthusiast and software developer with a passion for creating secure and efficient applications.
                </p>
                <div className="flex justify-center md:justify-start mt-10">
                    <a
                        href="portfolio/pdf/CV.pdf"
                        download="Mohadek_CV.pdf"
                        className="bg-orange-900 hover:bg-orange-700 hover:scale-[1.02] py-3 px-8 md:py-4 md:px-12 rounded-md"
                    >
                        <span className="text-white text-base md:text-lg font-bold">DOWNLOAD CV</span>
                    </a>
                </div>

                {/* GitHub Icon */}
                <div className="flex justify-center md:justify-start mt-10">
                    <a
                        href="https://github.com/your-github-username"  // Replace with your GitHub profile link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl text-orange-500 hover:text-black transition duration-200"
                    >
                        <FaGithub /> {/* GitHub Icon */}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
