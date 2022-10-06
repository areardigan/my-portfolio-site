import { useState } from "react";
import CompanyJobCard from "../components/CompanyJobCard";

const WorkExperience = () => {
  const handleChosenWorkPlace = () => {};
  return (
    <section className="w-full h-screen  flex-col justify-center items-center">
      <div>
        <h1 className="w-full font-u-mono text-2xl text-maybe-purple">
          02.
          <span className="text-3xl font-u-mono text-white ml-2">
            Where I've Worked
          </span>
        </h1>
      </div>
      <div className="flex">
        <div className=" w-1/4">
          <ul className="text-white">
            <li>
              <button
                className="px-4 py-3 w-32"
                onClick={handleChosenWorkPlace}
              >
                MyPhoto
              </button>
            </li>
          </ul>
        </div>
        <div className="w-2/4 ">
          <CompanyJobCard
            dateRange="March 2021 - Present"
            title={{ title: "Software Developer", company: "@MyPhoto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
