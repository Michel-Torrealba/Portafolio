import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-zinc-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-500">
          About Me
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a self-taught person, responsible and committed to my work. Daily I am learning new technologies and tools to improve my skills. <br />
          I am 23 years old, I am from Venezuela, passionate about web development, video game development, reading and sports.
          <br />
          Business development and administration student.
        </p>
        <br />
        <p className="text-xl">
        I am looking for an organized and pleasant environment where I can grow as a professional and carry out great challenges and initiatives.
        </p>
      </div>
    </div>
  );
}

export default About;
