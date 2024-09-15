import Logo from "../images/zen-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" relative w-full h-[500px] ">
      <div className="rounded-[100px] top-0 left-0 bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] opacity-30 absolute h-96 w-96 blur-[100px] z-0 "></div>

      {/* <FooterGradient /> */}
      <div className="w-[90%] h-[100%] m-auto flex items-start  z-10 relative">
        <div className="w-4/12">
          <div className="flex items-center">
            <header>
              <img src={Logo} className="m-2" alt="" />
            </header>
            <div>
              <h1 className="font-light font-poppins tracking-widest space-x-20 text-4xl text-white">
                ZEN HOOK
              </h1>
              <h3 className="text-[9px] font-extralight font-poppins text-white">
                WE WIN FOR OUR CLIENTS, INSPIRED BY OUR ROOTS
              </h3>
            </div>
          </div>

          <p className="w-[350px] text-[14px] font-think  tracking-wider leading-relaxed font-poppins text-white m-4">
            Zen Hook is a top digital marketing agency focused on driving online
            success. We specialize in social media, content creation, influencer
            marketing, website development, and personalized mentorship to boost
            your ROI.
          </p>
        </div>

        <div className="flex  mt-5 ml-10 w-8/12">
          <div className="w-4/12 gap-10 flex flex-col h-full ">
            <header>
              <h2 className=" font-bold text-2xl  font-poppins bg-clip-text text-transparent  bg-gradient-to-b from-[#f713ff]  to-[#5e0061]">
                Our Services
              </h2>
            </header>
            <div className=" mt-5 flex gap-5 flex-col justify-evenly ">
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Web Development
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Influencer Marketing
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Ecommerce Services
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Digital Marketing
              </Link>
            </div>
          </div>
          <div className="w-4/12 flex flex-col gap-10">
            <header className="font-bold text-2xl txtfoot">
              <h2 className=" font-poppins bg-clip-text text-transparent  bg-gradient-to-b from-[#f713ff]  to-[#5e0061]">Explore More</h2>
            </header>
            <div className="flex-col gap-5 flex mt-5">
            <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
            Home
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                About
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Our Works
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Testimonial
              </Link>
              <Link className="mb-2 font-light text-gray-300 hover:text-white font-poppins">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="w-4/12 flex flex-col gap-10">
            <header className="font-bold text-2xl txtfoot">
              <h2 className=" font-poppins bg-clip-text text-transparent  bg-gradient-to-b from-[#f713ff]  to-[#5e0061]">Contact Us</h2>
            </header>
            <div className="flex-col flex gap-5 mt-5">
              <Link className="flex gap-2 w-[260px] font-poppins items-center mb-2 font-light text-gray-300 hover:text-white ">
                <span className="-mt-5 txtfoot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </span>
                Located at 123 Market Street, Suite 456, Metropolis
              </Link>
              <Link className="flex items-center gap-2 mb-2 font-poppins font-light text-gray-300 hover:text-white ">
                <span className="txtfoot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
  fillRule="evenodd"
  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </span>
                (021) 234567
              </Link>
              <Link className="flex items-center gap-2 mb-2 font-light  font-poppins text-gray-300 hover:text-white ">
                <span className="txtfoot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-phone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                  </svg>
                </span>
                +91987654321
              </Link>

              <div className="flex gap-5 items-center ">
                <Link className="txtfoot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                </Link>
                <Link className="txtfoot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.83 0 8s.01 2.444.048 3.297c.04.854.175 1.435.372 1.945.198.507.463.942.923 1.416.474.474.909.725 1.416.923.51.197 1.091.332 1.945.371C5.555 15.99 5.83 16 8 16s2.444-.01 3.297-.048c.854-.04 1.435-.175 1.945-.371a3.9 3.9 0 0 0 1.416-.923 3.9 3.9 0 0 0 .923-1.416c.198-.51.332-1.091.371-1.945.039-.853.048-1.13.048-3.297s-.01-2.444-.048-3.297c-.04-.854-.175-1.435-.371-1.945a3.9 3.9 0 0 0-.923-1.416 3.9 3.9 0 0 0-1.416-.923c-.51-.197-1.091-.332-1.945-.371C10.444.01 10.171 0 8 0zm0 1.459c2.144 0 2.398.01 3.247.047.782.036 1.208.166 1.491.276.375.145.642.318.923.6.282.281.455.548.6.923.11.283.24.709.276 1.491.037.849.047 1.103.047 3.247s-.01 2.398-.047 3.247c-.036.782-.166 1.208-.276 1.491a2.437 2.437 0 0 1-.6.923 2.437 2.437 0 0 1-.923.6c-.283.11-.709.24-1.491.276-.849.037-1.103.047-3.247.047s-2.398-.01-3.247-.047c-.782-.036-1.208-.166-1.491-.276a2.437 2.437 0 0 1-.923-.6 2.437 2.437 0 0 1-.6-.923c-.11-.283-.24-.709-.276-1.491-.037-.849-.047-1.103-.047-3.247s.01-2.398.047-3.247c.036-.782.166-1.208.276-1.491a2.437 2.437 0 0 1 .6-.923 2.437 2.437 0 0 1 .923-.6c.283-.11.709-.24 1.491-.276.849-.037 1.103-.047 3.247-.047zM8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 1.459a2.649 2.649 0 1 1 0 5.297 2.649 2.649 0 0 1 0-5.297zm4.406-.42a.96.96 0 1 0 0 1.919.96.96 0 0 0 0-1.92z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[90%] h-[4px] -mt-32 m-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-md " />
      <div className="mt-8 w-[90%] flex justify-between m-auto">
        <h2 className="font-semibold text-neutral-400">
          ZEN HOOK 2024@ All right reserved
        </h2>
        <h2 className="font-semibold text-neutral-400">Terms & Conditions</h2>
      </div>
    </footer>
  );
}

export default Footer;
