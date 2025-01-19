import React from 'react';
import {
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaFlask,
  FaServer,
  FaShieldAlt,
  FaBug,
  FaCodeBranch,
  FaUserShield,
  FaCode,
  FaSearch,
  FaLaptopCode,
  FaDatabase,
} from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiBurpsuite, SiDocker } from 'react-icons/si';

function About() {
  const skills_web = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500 text-3xl" /> },
    { name: 'React', icon: <FaReact className="text-cyan-500 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: 'Flask', icon: <FaFlask className="text-gray-700 text-3xl" /> },
    { name: 'Django', icon: <SiDjango className="text-green-700 text-3xl" /> },
    { name: 'API Development', icon: <FaServer className="text-gray-600 text-3xl" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500 text-3xl" /> },
    { name: 'SQL', icon: <FaDatabase className="text-gray-700 text-3xl" /> }, // Added SQL
];


  const skills_security = [
    { name: 'Penetration Testing', icon: <FaBug className="text-red-600 text-3xl" /> },
    { name: 'Vulnerability Assessment', icon: <FaShieldAlt className="text-indigo-600 text-3xl" /> },
    { name: 'Binary Exploitation', icon: <FaCodeBranch className="text-gray-700 text-3xl" /> },
    { name: 'Web Application Security', icon: <FaUserShield className="text-teal-600 text-3xl" /> },
    { name: 'Reverse Engineering', icon: <FaCode className="text-orange-500 text-3xl" /> },
    { name: 'Burp Suite', icon: <SiBurpsuite className="text-red-600 text-3xl" /> },
    { name: 'Metasploit', icon: <FaBug className="text-gray-800 text-3xl" /> },
    { name: 'Privilege Escalation', icon: <FaShieldAlt className="text-indigo-400 text-3xl" /> },
    { name: 'OWASP Top 10', icon: <FaBug className="text-teal-500 text-3xl" /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10 text-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500">
          About Me
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
          Here you will find more information about me, what I do, and my current skills in
          programming and technology.
        </p>
      </div>

      {/* About Section */}
      <div className="w-full bg-white p-8 shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300 mt-12">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500 mb-6">
          Get to Know Me!
        </h2>
        <p className="text-gray-800 text-xl leading-relaxed">
          Hello, my name is <span className="font-semibold text-gray-900">Mohameddeq Abdi</span>, and I am a second-year student at <span className="font-semibold text-gray-900">USIU-Africa</span> in <span className="font-semibold text-gray-900">Nairobi, Kenya</span>. I specialize in both web development and cybersecurity, with a particular focus on penetration testing, vulnerability exploitation, web application security, and network defense. I’m passionate about creating impactful web applications while ensuring robust security to protect systems from emerging threats. My aim is to grow as a highly skilled developer and cybersecurity professional, contributing to innovative solutions and safeguarding digital environments.
        </p>
      </div>

      {/* New Section: What I Do */}
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          What I Can Do
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          I am a versatile professional with expertise in web development and cybersecurity.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center w-1/4 border border-gray-300">
            <FaLaptopCode className="text-4xl mb-4 mx-auto text-indigo-600" />
            <h3 className="text-xl font-bold">Web Development</h3>
            <h4 className="text-md text-gray-600 mt-2">
              Create and maintain websites and web applications using modern technologies.
            </h4>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center w-1/4 border border-gray-300">
            <FaBug className="text-4xl mb-4 mx-auto text-red-600" />
            <h3 className="text-xl font-bold">Penetration Testing</h3>
            <h4 className="text-md text-gray-600 mt-2">
              Identify vulnerabilities in systems, networks, and applications to strengthen their security.
            </h4>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center w-1/4 border border-gray-300">
            <FaCode className="text-4xl mb-4 mx-auto text-teal-600" />
            <h3 className="text-xl font-bold">API Development</h3>
            <h4 className="text-md text-gray-600 mt-2">
              Develop secure and efficient APIs to enable communication between systems.
            </h4>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center w-1/4 border border-gray-300">
            <FaSearch className="text-4xl mb-4 mx-auto text-orange-600" />
            <h3 className="text-xl font-bold">Vulnerability Assessment</h3>
            <h4 className="text-md text-gray-600 mt-2">
              Conduct assessments to identify weaknesses and improve system resilience against attacks.
            </h4>
          </div>
        </div>

      </div>

      <div className="mt-16 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500 text-center">
          My Skills
        </h2>

        {/* Web Development Skills */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills_web.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-200">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cybersecurity Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills_security.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-200">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
