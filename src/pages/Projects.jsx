import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Pro from "../assets/proj3.png";
import NetflixClone from "../assets/netflixClone.png";
import NotesApp from "../assets/notesApp.png";
import BusWeb from "../assets/bus-web.png";
import TechSpace from "../assets/Tech-Space.png";

const Projects = () => {
  return (
    <div className="pt-16 pb-10 sm:pt-16 lg:pb-16 md:h-[92vh]">
      <div className="px-7 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="mb-4 flex flex-col rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
          <a
            href="https://ticket-book-sandy.vercel.app"
            target="_blank"
            className="group h-32 md:h-48 lg:h-60"
          >
            <img
              src={BusWeb}
              alt="Project 1"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg "
            />
          </a>
          <div className="flex flex-col p-3 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-lg leading-8 text-center">
              Bus Ticket Booking Online
            </h2>
            <p className="text-gray-400 text-sm text-justify">
              A MERN stack web app for booking bus tickets with seat selection,
              payments, and admin management. Built with React.js, Tailwind CSS,
              Node.js, Express.js, and MongoDB.
            </p>
            <div className="flex justify-between text-white gap-4 mx-auto pb-4">
              <a href="https://github.com/Mr-Vimal/TicketBook" target="_blanck">
                <AiFillGithub className="w-[40px] h-auto" />
              </a>

              {/* <a href="https://ticket-book-sandy.vercel.app/" target="_blank">
                <AiFillGithub className="w-[40px] h-auto" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
          <a
            href="https://mr-vimal.github.io/Notes-App/"
            target="_blank"
            className="group h-32 mt-0 md:h-48 lg:h-60"
          >
            <img
              src={NotesApp}
              alt="Project 2"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className="flex flex-col p-3 mx-auto my-auto ">
            <h2 className="text-gray-200 font-bold text-lg leading-8 text-center">
              Online Note Web App
            </h2>
            <p className="text-gray-400 text-sm text-justify">
              A simple web app for creating and managing notes, built with HTML,
              CSS, and JavaScript for a smooth user experience.
            </p>
            <div className="flex justify-between text-white gap-4 mx-auto pb-4">
              <a href="https://github.com/Mr-Vimal/Notes-App" target="_blanck">
                <AiFillGithub className="w-[40px] h-auto" />
              </a>

              {/* <a href="https://mr-vimal.github.io/Notes-App/" target="_blank">
                <AiFillGithub className="w-[40px] h-auto" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
          <a
            href="https://mr-vimal.github.io/Netflix-Clone/"
            target="_blank"
            className="group h-32 mt-0 md:h-48 lg:h-60"
          >
            <img
              src={NetflixClone}
              alt="Project 3"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className="flex flex-col p-3 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-lg leading-8 text-center">
              Netflix Clone
            </h2>
            <p className="text-gray-400 text-sm text-justify">
              A replica of Netflix’s user interface, built using HTML, CSS, and
              JavaScript to showcase skills in front-end development and dynamic
              content display.
            </p>
            <div className="flex justify-between text-white gap-4 mx-auto pb-4">
              <a
                href="https://github.com/Mr-Vimal/Netflix-Clone"
                target="_blanck"
              >
                <AiFillGithub className="w-[40px] h-auto" />
              </a>

              {/* <a
                href="https://mr-vimal.github.io/Netflix-Clone/"
                target="_blank"
              >
                <AiFillGithub className="w-[40px] h-auto" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
          <a
            href="https://techspace-lk.netlify.app/"
            className="group h-32 md:h-48 lg:h-60"
            target="_blank"
          >
            <img
              src={TechSpace}
              alt="Project 4"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>
          <div className="flex flex-col p-3 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-lg leading-8 text-center">
              Tech Space
            </h2>
            <p className="text-gray-400 text-sm text-justify">
              An Ecommerce platform built with the MERN stack for buying and
              selling tech products, featuring secure checkout, user
              authentication, and an admin dashboard.
            </p>
            <div className="flex justify-between text-white gap-4 mx-auto pb-4">
              <a
                href="https://github.com/Mr-Vimal/Netflix-Clone"
                target="_blanck"
              >
                <AiFillGithub className="w-[40px] h-auto" />
              </a>
              {/* <AiFillGithub className="w-[40px] h-auto" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
