import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16">
      <div className=" py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1000px] mx-auto rounded-xl ">
        <div className="p-7 mx-auto">
          <div>
            <h2 className=" text-3xl font-bold leading-light gray-primary-color sm:text-4xl lg:text-5xl  ">
              Hello I'm Vimal Thasan
            </h2>
            <p className=" max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8 ">
              I'm a web developer who loves to create beautiful and functional
              websites for people who want to make a difference in the world.
            </p>
          </div>
          <img
            src=""
            alt=""
            className=" flex md:absolute mx-auto bottom-[-30%] right-[-20%] w-[240px] md:w-[400px] h-auto "
          />
        </div>
      </div>
      <div className=" bg-black/40 max-w-[1000px] mx-auto rounded-xl overflow-hidden ">
        <div className="px-6 py-10 ">
          <div className="mx-auto mx-w-5xl text-center ">
            <h2 className=" block w-full gray-primary-color text-3xl sm:text-4xl ">
              Optimize Your Website
            </h2>
            <p className=" mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400 ">
              Redesign Your Website
            </p>
          </div>
          <div className=" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className=" rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 className=" text-xl italic text-gray-200  ">Customizable</h3>
              <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400 ">
                Tailor your landing page's look and feel, from the color scheme
                to the font size, to the design of the page.
              </p>
            </div>

            <div className=" rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 className=" text-xl italic text-gray-200  ">
                Fast Performance
              </h3>
              <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400 ">
                We build our templete for speed in mind, for super-fast load
                times so your customers never waver.
              </p>
            </div>

            <div className=" rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 className=" text-xl italic text-gray-200  ">
                Fully Featured
              </h3>
              <p className=" my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400 ">
                Everything you need to succeed and launch your landing page,
                right out of the box. No need to install anything else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
