import React from "react";
import { useState, useEffect } from "react";
import MenuLeft from "../MenuLeft";
import HeaderTop from "../HeaderTop";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem("isOpen");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    const savedState = localStorage.getItem("isOpen");
    setIsOpen(savedState !== null ? JSON.parse(savedState) : true);
  }, []);

  return (
    <>
      <div className="flex bg-bgr-down-light">
        <MenuLeft isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeaderTop isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={`${
            isOpen ? "pl-[250px]" : "pl-[80px]"
          } pt-[80px] p-[10px] w-full h-screen overflow-auto transition-all duration-300 ease-in-out`}
        >
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
