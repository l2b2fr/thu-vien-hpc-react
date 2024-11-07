import React from "react";
import { useState, useEffect } from "react";

function Dashboard() {
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
      <h1 className="text-[30px] font-bold text-color-text-light">Trang chủ</h1>
      <div className="flex flex-row mt-[10px]">
        <div className="flex flex-col w-1/2 max-[w-500px]">
          <div className="w-1/1 h-[250px] bg-white rounded-md">
          </div>
          <div className="w-1/1 h-[600px] bg-white mt-[20px] rounded-md">
          </div>
        </div>

        <div className="flex flex-col ml-[20px] mr-[10px] w-screen">
          <div className="flex flex-row space-x-[20px]">
            <div className="w-1/4 h-[130px] bg-white rounded-md"></div>
            <div className="w-1/4 h-[130px] bg-white rounded-md"></div>
            <div className="w-1/4 h-[130px] bg-white rounded-md"></div>
            <div className="w-1/4 h-[130px] bg-white rounded-md"></div>
          </div>
          <div className="h-[720px] bg-white mt-[20px] rounded-md"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
