import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import seshat from "../assets/portfolio/seshat.png";
import rickAndMorty from "../assets/portfolio/rickAndMorty.png";


function Portfolio() {
  const portfolios = [
    
    {
      text: "Pagina web consumiendo api de rick y morty utilizando la API de https://rickandmortyapi.com/",
      style: "shadow-red-500",
      title: "Info Mortys",
      id: 4,
      src: rickAndMorty,
      gradient: "to-red-500",
    },
    
    {
      text: "Seshat es una plataforma del mundo social basada en narrativas",
      style: "shadow-indigo-500",
      title: "Seshat",
      id: 6,
      src: seshat,
      demo: "https://seshat-react.vercel.app/",
      gradient: "to-indigo-500",
      code: "https://github.com/SeshatWriters/seshat-react",
    },
  ];

  return (
    <section name='portfolio' className="text-zinc-300 body-font font0bold bg-gradient-to-b from-black to-gray-800 py-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div>
            <h1 className="sm:text-4xl text-3xl title-font mb-4 text-white font-bold inline border-b-4 border-emerald-500 ">
              Portafolio
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base  py-6">
            Take a look at my works here
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 px-10">
        {portfolios.map(
            ({ title, id, src, demo, code, style, text, gradient }) => (
              <div key={id} className="p-4 sm:w-1/2 lg:w-1/3 sm:mb-0 mb-6 py-10">
                <div className={`rounded-lg h-64 overflow-hidden  shadow-md ${style}`}>
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={src}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-amber-100 mt-5">
                  {title}
                </h2>
                <p className="text-base leading-relaxed my-4">{text}</p>
                <div className="flex">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={demo}
                    smooth
                    duration={500}
                    className={`text-base  mx-2 group text-amber-100 w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-900 ${gradient} hover:cursor-pointer`}
                  >
                    Demo
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={code}
                    smooth
                    duration={500}
                    className={`text-base  mx-2 ml-10 group text-amber-100 w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-900 ${gradient} hover:cursor-pointer`}
                  >
                    Code
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
