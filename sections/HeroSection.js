import React from "react";
import MatrixRain from "../components/matrixrain";

const HeroSection = () => {
  return (
    <div className=" h-screen w-full  ">
      <MatrixRain />
      <div className="absolute top-1/3 px-24 py-12 bg-sortof-black  w-full opacity-80 ">
        <h1 className="text-maybe-purple mt-2 text-xl font-u-mono ">
          Hi, my name is
        </h1>
        <h2 className="text-white text-2xl font-semibold  mt-5 md:text-7xl ">
          Andrew Reardigan.
        </h2>
        <h3 className="mt-5 text-6xl font-semibold text-more-gray">
          I am currently a student to the game.{" "}
        </h3>
        <p className="mt-8 w-1/2 text-more-gray">
          I'm a software developer who has worked all over the place in regard
          to development. Currently, I am apart of MyPhoto's production facility
          team.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
