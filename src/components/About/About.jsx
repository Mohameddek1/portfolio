import React from 'react';
import { FaLaptopCode, FaBug, FaShieldAlt, FaCode, FaGithub, FaSearch } from 'react-icons/fa';  // Importing icons

function About() {
  const skills_web = [
    'HTML', 'JavaScript', 'Python', 'Flask', 'Django', 'React', 'CSS', 'TailwindCSS',
    'API Development',
  ];

  const skills_security = [
    'Penetration Testing', 'Vulnerability Assessment', 'Binary Exploitation', 'Web Application Security',
    'Reverse Engineering', 'Ghidra', 'Burp Suite', 'Metasploit',
    'OWASP Top 10', 'Privilege Escalation', 'Buffer Overflow Vulnerabilities',
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10 text-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 hover:text-gray-800 transition-all duration-300">
          About Me
        </h1>
        <div className="flex justify-center mt-4">
          <span className="border-b-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-12 rounded"></span>
        </div>
        <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
          Here you will find more information about me, what I do, and my current skills in
          programming and technology.
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-16">
        {/* About Section */}
        <div className="w-full bg-white p-8 shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500 mb-6">Get to Know Me!</h2>
          <p className="text-gray-800 text-xl leading-relaxed">
            Hello, my name is <span className="font-semibold text-gray-900">Mohameddeq Abdi</span>, and I am a second-year student at <span className="font-semibold text-gray-900">USIU-Africa</span> in <span className="font-semibold text-gray-900">Nairobi, Kenya</span>. I specialize in both web development and cybersecurity, with a particular focus on penetration testing, vulnerability exploitation, web application security, and network defense. I’m passionate about creating impactful web applications while ensuring robust security to protect systems from emerging threats. My aim is to grow as a highly skilled developer and cybersecurity professional, contributing to innovative solutions and safeguarding digital environments.
          </p>
        </div>

        {/* New Section: What I Do */}
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            What I Can Do
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            I am a versatile professional with expertise in web development and cybersecurity, creating secure web applications while ensuring the safety and protection of digital systems through comprehensive security measures.
          </p>

          {/* Boxes for Different Skills */}
          <div className="mt-8 flex space-x-8 justify-center">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center">
              <FaLaptopCode className="text-4xl mb-4 mx-auto text-indigo-600" />
              <h3 className="text-xl font-bold">Web Development</h3>
              <h4 className="text-md text-gray-600 mt-2">Create and maintain websites and web applications using modern technologies.</h4>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center">
              <FaBug className="text-4xl mb-4 mx-auto text-red-600" />
              <h3 className="text-xl font-bold">Penetration Testing</h3>
              <h4 className="text-md text-gray-600 mt-2">Identify vulnerabilities in systems, networks, and applications to strengthen their security.</h4>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center">
              <FaCode className="text-4xl mb-4 mx-auto text-teal-600" />
              <h3 className="text-xl font-bold">API Development</h3>
              <h4 className="text-md text-gray-600 mt-2">Develop secure and efficient APIs to enable communication between systems.</h4>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center">
              <FaSearch className="text-4xl mb-4 mx-auto text-orange-600" />
              <h3 className="text-xl font-bold">Vulnerability Assessment</h3>
              <h4 className="text-md text-gray-600 mt-2">Conduct assessments to identify weaknesses and improve system resilience against attacks.</h4>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full bg-white p-8 shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500 mb-6 text-center">My Skills</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-4">Web Development</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {skills_web.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-indigo-600 px-4 py-2 rounded-full shadow-sm text-sm font-semibold transition-transform transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-8">Cybersecurity</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {skills_security.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-300 text-teal-600 px-4 py-2 rounded-full shadow-sm text-sm font-semibold transition-transform transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
