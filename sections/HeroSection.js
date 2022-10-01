import React from "react";
import MatrixRain from "../components/matrixrain";

const HeroSection = () => {
  return (
    <div className=" relative h-screen w-full -z-9999">
      <MatrixRain />
      <div className="absolute top-1/3 px-24 bg-sortof-black">
        <h1 className="text-gray-ish mt-2 text-lg font-u-mono">
          Hi, my name is
        </h1>
        <h2 className="text-maybe-purple text-2xl font-semibold  mt-5 md:text-7xl ">
          Andrew Reardigan.
        </h2>
        <h3 className="mt-5 text-5xl font-semibold text-white">
          I am currently a student to the game.{" "}
        </h3>
        <p className="mt-8 w-1/2 text-white">
          I'm a software developer who has worked all over the place in regard
          to development. Currently, I am apart of MyPhoto's production facility
          team.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
