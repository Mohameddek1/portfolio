import React from 'react';
import Ark from '../../assets/ark.png'
import Mood from '../../assets/mood.png'
import Webriz from '../../assets/webriz.png'

const Project = () => {
    const posts = [
        {
            image: Mood,
            title: 'Mood Tracker',
            url: 'https://usiu-mood-tracker.netlify.app/',
            description: 'An app to help users log and track their daily moods with insightful reports and a user-friendly interface.'
        },
        {
            image: Webriz,
            title: 'WebRizz',
            url: 'https://webrizz-hq.vercel.app/',
            description: 'WebRizz HQ delivers tailored digital solutions, helping businesses worldwide connect with their audience and drive growth.'
        },
        {
            image: Ark,
            title: 'Ark Arcade',
            url: 'https://ark-arcade.vercel.app/',
            description: 'Ark Arcade delivers high-quality products and services through a global vendor network, ensuring customized solutions for clients.'
        }
    ];

    return (
        <div className="bg-gray-100 container mx-auto p-8">
            <div className="w-full mb-20 text-center">
                <h1 className="text-4xl font-bold text-sky-600">Projects</h1>
                <p className="text-gray-600 text-xl mt-4">Explore some of the work I've done</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-900 transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            className="w-full h-48 object-cover"
                            src={post.image}
                            alt={`Image for ${post.title}`}
                        />
                        <div className="px-6 py-4">
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-lg font-bold text-white hover:text-gray-300 transition-colors"
                            >
                                {post.title}
                            </a>
                            <p className="text-gray-400 text-sm mt-2">{post.description}</p>
                        </div>
                        <div className="px-6 py-4">
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-lime-500 transition-all"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
