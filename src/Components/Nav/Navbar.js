import Logo from "../images/zen-logo.png";
import { Link } from "react-router-dom";
import icon from "../icons/up-right.png";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from "react";

function Navbar() {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // // Function to toggle the dropdown menu
  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
  return (
    <nav className="w-full h-[99px] backdrop-blur-sm bg-white/15 z-10 mt-2">
      <section className="w-[95%] h-[100%]  m-auto flex items-center justify-between ">
        <header className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <div>
            <h1 className="font-medium text-white text-2xl">ZenHook</h1>
            <p className="font-semibold text-white text-[8px]">
              WE WIN FOR OUR CLIENTS,INSPIRED BY OUR ROOTS
            </p>
          </div>
        </header>

        <section className="flex items-center gap-14  ml-32 pr-5">
          <Link
            to={"/"}
            className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab]   to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins"
          >
            Home
          </Link>
          {/* Dropdown menu for "Our Services" */}
          <div className="relative w-[167px]">
            {/* "Our Services" button */}
            <Link
              to={"/services"}
              className="hover:bg-gradient-to-r from-[#00c3ffab]   to-[#d642ccab] px-4 py-2 rounded-[40px] text-white font-extralight transition-all text-lg font-poppins flex items-center"
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
          <Link className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab]   to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins">
            Company
          </Link>
          <Link className="text-white font-extralight hover:bg-gradient-to-r from-[#00c3ffab]   to-[#d642ccab] px-4 py-2 rounded-[40px] transition-all text-lg font-poppins">
            Contact
          </Link>
        </section>

        <section>
          <div className="p-0.5 flex items-center justify-center shadow-lg max-w-[300px] rounded-[50px] bg-gradient-to-tr from-white to-purple-700">
            <button className="px-8 py-3 text-lg bg-[#232031] justify-center gap-2 rounded-full flex text-white">
              Request demo
              <img src={icon} alt="upright-arrow" className="w-4 h-4" />
            </button>
          </div>
        </section>
      </section>
    </nav>
  );
}
export default Navbar;
