import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="pt-16 pb-10 pl-7 pr-7 sm:pt-16 lg:pb-16  md:h-[92vh] ">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl ">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto ">
            <h2 className="font-heading mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl ">
              Let's Connect
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ">
              and start working on amzon things
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <div className="my-auto pr-6">
              <ul>
                <li className="flex">
                  <AiFillLinkedin className="w-[70px] h-auto text-gray-300 " />
                  <div className="m-5">
                    <h3 className="text-lg font-bold text-gray-200">
                      Our address
                    </h3>
                    <p className="text-gray-400">Goodshed Road Vavuniya.</p>
                    <p className="text-gray-400">Sri Lanka</p>
                  </div>
                </li>
                <li className="flex">
                  <AiFillLinkedin className="w-[70px] h-auto text-gray-300 " />
                  <div className="m-5">
                    <h3 className="text-lg font-bold text-gray-200">
                      Our address
                    </h3>
                    <p className="text-gray-400">Goodshed Road Vavuniya.</p>
                    <p className="text-gray-400">Sri Lanka</p>
                  </div>
                </li>
                <li className="flex">
                  <AiFillLinkedin className="w-[70px] h-auto text-gray-300 " />
                  <div className="m-5">
                    <h3 className="text-lg font-bold text-gray-200">
                      Our address
                    </h3>
                    <p className="text-gray-400">Goodshed Road Vavuniya.</p>
                    <p className="text-gray-400">Sri Lanka</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-gray-300 ">
                Ready to Get Started?
              </h2>
              <form method="post">
                <div className=" mb-6 ">
                  <div className="mx-0 mb-1 sm:mb-4 ">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <input
                        type="text"
                        name=""
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your Name"
                        className="rounded w-80 h-8 px-2"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <input
                        type="email"
                        name=""
                        id="email"
                        autoComplete="email"
                        placeholder="Your Email Address"
                        className="rounded w-80 h-8 px-2"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <textarea
                      name="textarea"
                      id="textarea"
                      placeholder="Your Address"
                      cols="30"
                      rows="5"
                      className="rounded-lg w-80 px-2 py-2"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-primary-color text-white px-6 py-3 font-xl rounded-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
