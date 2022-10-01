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
    <header className="flex w-full fixed top-0   h-24  justify-center items-center shadow-4xl  bg-sortof-black">
      <nav className="w-full flex  justify-between px-12  ">
        <div className="flex justify-center items-center text-maybe-purple font-extrabold text-2xl">
          <Link href="/">
            <h1 className="hover:cursor-pointer">AR</h1>
          </Link>
        </div>

        <ol className="flex space-x-5 justify-center items-center">
          {navLinks.map((link, index) => (
            <Link href={link.route}>
              {link.title === "Resume" ? (
                <button className="border px-3 py-2 rounded text-maybe-purple">
                  Resume
                </button>
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
