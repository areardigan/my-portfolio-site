import { useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { title: "About", route: "/about" },
    { title: "Experience", route: "/about" },
    { title: "Work", route: "/about" },
    { title: "Contact", route: "/about" },
    { title: "Resume", route: "/about" },
  ];
  return (
    <header className="flex h-24 justify-center items-center shadow-2xl">
      {/* <nav className="md:hidden w-full flex justify-between ">
        <div className="px-2 py-3">
          <Link href="/" className="">
            <h6 className="">AR</h6>
          </Link>
        </div>
        <div className="flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav> */}
      <nav className="w-full flex fixed justify-between px-12">
        <div className="flex justify-center items-center text-maybe-purple font-extrabold text-2xl">
          <Link href="/">
            <h1 className="hover:cursor-pointer">AR</h1>
          </Link>
        </div>

        <ol className="flex space-x-5 justify-center items-center">
          {navLinks.map((link, index) => (
            <Link href={link.route}>
              {link.title === "Resume" ? (
                <button className="border px-3 py-2 rounded">Resume</button>
              ) : (
                <li
                  key={link.title}
                  className="text-sm  p-3 text-gray-ish hover:cursor-pointer"
                >
                  <span className="text-sm text-maybe-purple">
                    0{index + 1}
                  </span>
                  {link.title}
                </li>
              )}
            </Link>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default NavBar;
