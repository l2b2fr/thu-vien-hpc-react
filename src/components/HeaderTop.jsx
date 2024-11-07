import React, { useState, useEffect } from "react";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import IconMenu from "../assets/icons/menus/burger-menu.png";
import IconDrop from "../assets/icons/menus/down-arrow.png";
import IconHuman from "../assets/icons/humans/z5813034854254_ed1be327fb2db9b4512d44e194b0a054.jpg";
import IconNocation from "../assets/icons/menus/notification-bell.png";

function HeaderTop({ isOpen, setIsOpen }) {
  const user = {
    name: "Đỗ Thị Thơm",
    avatar: IconHuman,
  };

  useEffect(() => {
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <>
      <div
        className={`w-screen h-[70px] bg-bgr-up-light border-l duration-300 border-black border-opacity-10 flex fixed top-0 z-[9999] ${
          isOpen ? "left-[230px]" : "left-[60px]"
        }`}
      >
        <div className="h-full flex">
          <img
            src={IconMenu}
            alt=""
            className={`${
              !isOpen && "rotate-[90deg]"
            } duration-500 w-[30px] h-[30px] my-auto mx-[10px] hover:cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          />
          <div class="w-[590px] h-[45px] bg-bgr-down-light rounded-[20px] border-none border-[#a4a5a5] my-auto mx-0 flex">
            <img
              src={IconTimKiem}
              alt=""
              className="w-[22px] h-[22px] opacity-60 my-auto ml-[15px]"
            />
            <input
              className="w-full h-full bg-transparent rounded-[10px] border-none outline-none px-3"
              placeholder="Nhập thông tin tìm kiếm"
              type="text"
            />
          </div>
        </div>

        <div
          className={`flex justify-center items-center absolute origin-right duration-300 ${
            isOpen ? "right-[250px]" : "right-[80px]"
          } top-[25%]`}
        >
          <img
            src={IconNocation}
            alt=""
            className="w-[30px] h-[30px] rounded-[40px] object-cover"
          />
          <img
            src={user.avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-[40px] object-cover mx-[10px]"
          />
          <div class="text-color-text-light text-[15px] font-normal font-['Times New Roman']">
            {user.name}
          </div>
          <img
            src={IconDrop}
            alt=""
            className="w-[15px] h-[15px] rounded-[40px] object-cover pl-[5px]"
          />
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
