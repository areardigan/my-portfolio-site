import React from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import { HeroSection } from "../sections";
import MatrixRain from "./matrixrain";

const Layout = ({ children }) => {
  return (
    <div className="bg-sortof-black">
      <NavBar />
      <HeroSection />
      <main className="min-h-screen max-w-5xl  m-auto bg-sortof-black">
        {/* <MatrixRain /> */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
