import React from "react";
import HeroImage from "../assets/portfolio/fotomichel.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-zinc-50 mt-10">
          Front End Developer
          </h2>
          <p className="text-zinc-300 py-4 max-w-md">
            Hi! Mi name is Genesis, I am a Full Stack developer, oriented more to the
            Front End. I love creating websites that provide a unique and satisfying user experience, 
            not only visually but also functionally.
          </p>
          <div className="flex flex-row">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-xl group text-zinc-50 w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-900 to-emerald-500 hover:cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              target="_blank"
              href=""             
              smooth
              duration={500}
              className="text-xl  mx-5 group text-zinc-50 w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-900 to-emerald-500 hover:cursor-pointer"
            >
              Curriculum vitae
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div className="md:p-5">
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={HeroImage}
            alt="heroImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
