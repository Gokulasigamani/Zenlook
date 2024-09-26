import React, { useState } from "react"; // Import useState
import Logo from "../images/zen-logo.png";
import { Link } from "react-router-dom";
import icon from "../icons/up-right.png";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  // Add state for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[99px] backdrop-blur-sm bg-white/15 z-10 mt-2">
      <section className="w-[95%] h-[100%] m-auto flex items-center justify-between">
        <header className="flex items-center gap-2">
          <img src={Logo} alt="ZenHook Logo" />
          <div>
            <h1 className="font-medium text-white text-2xl">ZenHook</h1>
            <p className="font-semibold text-white text-[8px]">
              WE WIN FOR OUR CLIENTS, INSPIRED BY OUR ROOTS
            </p>
          </div>
        </header>

        <section className="hidden lg:flex items-center gap-14 ml-32 pr-5">
          <Link
            to="/"
            className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
          >
            Home
          </Link>

          <div className="relative w-[167px]">
            <Link
              to="/services"
              className="hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] text-white font-extralight transition-all text-lg font-poppins flex items-center"
            >
              Our Services
              <IoMdArrowDropdown style={{ marginLeft: "5px" }} />
            </Link>
            {/* Dropdown items */}
            {/* <div
          className={`absolute left-0 mt-2 rounded-lg w-40 bg-gray-800 text-white transition duration-300 ease-in-out ${isDropdownOpen ? 'block' : 'hidden'}`}
          style={{ zIndex: 50 }} // Ensure dropdown is on top
        >
          <Link
            to="/service1"
            className="block px-4 py-2 hover:bg-violet-700 transition-all"
            onClick={() => setDropdownOpen(false)} // Close dropdown on click
          >
            Service 1
          </Link>
          <Link
            to="/service2"
            className="block px-4 py-2 hover:bg-violet-700 transition-all"
            onClick={() => setDropdownOpen(false)} // Close dropdown on click
          >
            Service 2
          </Link>
          <Link
            to="/service3"
            className="block px-4 py-2 hover:bg-violet-700 transition-all"
            onClick={() => setDropdownOpen(false)} // Close dropdown on click
          >
            Service 3
          </Link>
        </div> */}
          </div>

          <Link className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins">
            Company
          </Link>

          <Link
            to="/contact"
            className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
          >
            Contact
          </Link>
        </section>

        <section className="hidden lg:block">
          <div className="p-0.5 flex items-center justify-center shadow-lg max-w-[300px] rounded-[50px] bg-gradient-to-tr from-white to-purple-700">
            <button className="px-8 py-3 text-lg bg-[#232031] justify-center gap-2 rounded-full flex text-white">
              Request demo
              <img src={icon} alt="upright-arrow" className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-full bg-transparent lg:hidden border-transparent"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="bg-transparent rounded-full p-1 w-16 h-10 flex justify-center items-center border-purple-500 border-2 ">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </button>
      </section>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <section className="flex flex-col items-center gap-5 p-4">
            <Link
              to="/"
              className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
            >
              Our Services
            </Link>
            <Link
              to="/company"
              className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
            >
              Company
            </Link>
            <Link
              to="/contact"
              className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab] to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
            >
              Contact
            </Link>
          </section>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
