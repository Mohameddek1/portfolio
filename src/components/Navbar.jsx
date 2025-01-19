import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/portfolio", label: "Home" },
    { to: "/portfolio/about", label: "About" },
    { to: "/portfolio/projects", label: "Projects" },
    { to: "/portfolio/contacts", label: "Contacts" },
  ];

  return (
    <div className="relative bg-sky-900 z-10">
      <div className="h-[80px] w-full flex justify-between items-center px-6 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.hero.page/pfp/ffa7cc2e-8e5b-4317-8898-c015590ccf56-stoic-black-anime-boy-alluring-black-anime-boy-characters-pfp-1.png"
            alt="Profile"
            className="h-12 w-12 rounded"
          />
          <p className="text-base font-bold uppercase text-gray-200">
            Mohameddeq Abdi
          </p>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-[80px] md:top-0 left-0 w-full md:w-auto bg-gray-300 md:bg-transparent z-50 md:z-auto text-center md:flex md:gap-16 md:items-center text-sm font-bold uppercase text-gray-100`}
        >
          {links.map((link, index) => (
            <li key={index} className="py-4 md:py-0">
              <NavLink
                to={link.to}
                end={link.to === "/portfolio"}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600"
                    : "hover:text-orange-300 transition duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Background overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-10 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
