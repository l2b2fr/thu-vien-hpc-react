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
        <main className="p-[10px] h-screen overflow-auto">{children}</main>
      </div>
    </>

  );
}

export default Layout;
