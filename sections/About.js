import React from "react";

const About = () => {
  return (
    <section className="w-full max-h-screen border">
      <div className="text-white h-screen mt-12 flex-col ">
        <h1 className="w-full border font-u-mono text-2xl text-maybe-purple">
          01. <span className="text-3xl font-u-mono text-white">About Me</span>
        </h1>
        <div className="flex">
          <div className="flex-col w-1/2 px-5 py-8">
            <p>
              Hello~ My name is Andrew Reardigan and I enjoy creating things and
              learning all things tech related. I started a complete 180 degree
              career change in late 2020.
            </p>
            <p>
              Fast forward to today I a, 60 credits into pursuing my bachelor's
              in Computer Science and blah blah.
            </p>
            <p>A few of the technologies that I work with are:</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="w-1/2"> hello</div>
        </div>
      </div>
    </section>
  );
};

export default About;
