import Image from "next/image";
import React from "react";
import Avatar from "../public/avatar.jpeg";

const About = () => {
  const technologyList = [
    "JavaScript",
    "React",
    "Node",
    "Next",
    "Next",
    "Next",
  ];
  return (
    <section className="w-full px-12 py-6 mt-12  ">
      <div className="text-white  mt-12 flex-col ">
        <h1 className="w-full  font-u-mono text-2xl text-maybe-purple">
          01.
          <span className="text-4xl font-u-mono text-white ml-2">About Me</span>
        </h1>
        <div className="flex justify-center ">
          <div className="flex-col w-1/2 px-5 py-8 space-y-5 font-light">
            <p>
              Hello My name is Andrew Reardigan and I enjoy creating things and
              learning all things tech related. I started a complete 180 degree
              career change in late 2020. Hello~ My name is Andrew Reardigan and
              I enjoy creating things and learning all things tech related. I
              started a complete 180 degree career change in late 2020.
            </p>
            <p>
              Fast forward to today I a, 60 credits into pursuing my bachelor's
              in Computer Science and blah blah. Fast forward to today I a, 60
              credits into pursuing my bachelor's in Computer Science and blah
              blah. Fast forward to today I a, 60 credits into pursuing my
              bachelor's in Computer Science and blah blah.
            </p>
            <p>A few of the technologies that I work with are:</p>
            <ul className="grid grid-cols-2">
              {technologyList.map((listItem, index) => (
                <li
                  key={index}
                  className="flex items-center px-2 py-1 font-u-mono text-sm"
                >
                  <span className="text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </span>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <div className="w-full h-full flex-col justify-center px-12 py-8 ">
              <Image
                width="350"
                height="350"
                src={Avatar}
                className="rounded-xl"
              ></Image>
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
