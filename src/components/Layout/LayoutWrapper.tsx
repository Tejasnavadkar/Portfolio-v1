import React, { type ReactNode } from "react";
import "./LayoutWrapper.css";
import NavBar from "../NavBar/NavBar";
interface LayoutWrapper {
  children?: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapper) => {
  return (
    <div className="h-screen w-full  sm:p-0 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
        linear-gradient(gray 1px, transparent 1px),
        linear-gradient(90deg, gray 1px, transparent 1px)
      `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Green Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-0"></div>{" "}
      {/* bg-emerald-500/10 → halka green color with 10% opacity., blur-3xl → spread-out glow look. */}
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-green-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-25 right-25 w-4 h-4 bg-emerald-500 rounded-full blur-sm animate-pulse z-0"></div>
      <div className="absolute bottom-25 left-25 w-3 h-3 bg-teal-500 rounded-full blur-sm animate-pulse delay-1000 z-0"></div>
      {/* nav */}
      <NavBar />

      {/* Your actual content (childrens) */}
      <div className=" scroll-container absolute h-full py-18  overflow-y-auto overflow-x-hidden scrollbar w-full z-10 ">
        <div className="w-[80%] mx-auto mt-12 sm:mt-6 md:mt-1 p-4 space-y-60 z-10 " >
          {children}
        </div>      
      </div>
    </div>
  );
};

export default LayoutWrapper;
