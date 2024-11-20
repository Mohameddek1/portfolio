import React from 'react';

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

      <div className="mt-20 flex flex-col lg:flex-row gap-16">
        {/* About Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500 mb-6">Get to Know Me!</h2>
          <p className="text-gray-800 text-xl leading-relaxed">
            Hello, my name is <span className="font-semibold text-gray-900">Mohameddeq Abdi</span>, and I am a second-year student (2.3) at <span className="font-semibold text-gray-900">USIU-Africa</span> in <span className="font-semibold text-gray-900">Nairobi, Kenya</span>. I specialize in both web development and cybersecurity, with a particular focus on penetration testing, vulnerability exploitation, web application security, and network defense. I’m passionate about creating impactful web applications while ensuring robust security to protect systems from emerging threats. My aim is to grow as a highly skilled developer and cybersecurity professional, contributing to innovative solutions and safeguarding digital environments.
          </p>

        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500 mb-6">My Skills</h2>

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
