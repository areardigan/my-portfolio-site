import React from "react";
import NavBar from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-sortof-black">
      <NavBar />
      <main className="min-h-screen max-w-6xl m-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
