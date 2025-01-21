import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
// import profilepic from "../assets/profilepic.png";
import CV from "../assets/Vimal-resume.pdf";

const Hero = () => {
  return (
    <div className=" relative pt-16 pb-10 sm:p-16 lg:p-16 overflow-hidden h-[92vh] ">
      <div className="px-4 mx-auto max-w-7xl sm:p-6 lg:px-8 relative z-20 ">
        <div className="max-w-xl mx-auto text-center ">
          <h1 className="text-4xl font-bold sm:text-6xl gray-rimary-color ">
            I will solve your Frontend
          </h1>
          <p className="mt-5 text-base text-white sm:text-xl ">
            Do you need help in frontend development? Don't hesitate to contact
            me!
          </p>
          <div>
            <a
              href={CV}
              className="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110 "
              role="button"
              download="Vimal-Resume"
            >
              Download CV
            </a>
            <a
              href="./projects"
              className=" inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-300 hover:scale-110 "
              role="button"
            >
              View Work
            </a>
          </div>
          <div className=" flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto ">
            <a
              href="https://www.linkedin.com/in/vimal-thasan-409a652a3/"
              className=" transition-all duration-200 hover:scale-110 cursor-pointer "
            >
              <AiFillLinkedin className="w-[70px] h-auto" />
            </a>
            <a
              href="https://github.com/Mr-Vimal"
              className=" transition-all duration-200 hover:scale-110 cursor-pointer "
            >
              <AiFillGithub className="w-[70px] h-auto" />
            </a>
            <a
              href=""
              className=" transition-all duration-200 hover:scale-110 cursor-pointer "
            >
              <AiFillMail className="w-[70px] h-auto" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 z-10 flex mx-auto justify-center ">
        <img
          src=""
          alt=""
          className="left-[-20px] top-[-20px] sm:left-20 sm:top-[-200px] absolute   block  sm:hidden w-auto h-[150px] sm:h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
