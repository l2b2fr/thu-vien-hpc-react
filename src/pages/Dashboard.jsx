import React from "react";
import IconSoSach from "../assets/icons/books/book-soquyen.png";
import IconDocGia from "../assets/icons/books/reading.png";
import IconLuotMuonTra from "../assets/icons/books/borrow.png";
import IconSachQuaHan from "../assets/icons/books/book-quahan.png";
import IconUp from "../assets/icons/menus/up.png";
import IconDown from "../assets/icons/menus/down.png";
import BgHPC from "../assets/image/banner-hpc2.jpg";
import IconHuman from "../assets/icons/humans/z5813034854254_ed1be327fb2db9b4512d44e194b0a054.jpg";
import { useState, useEffect } from "react";
import ButtonLogout from "../components/Dashboard/ButtonLogout";
import { toast } from "sonner";
import Nocations from "../components/Dashboard/Nocations";
import ChartComponent from "../components/Dashboard/ChartComponent";

function Dashboard() {
  const user = {
    name: "Đỗ Thị Thơm",
    avatar: IconHuman,
    role: "Quản lý thư viện",
    address: "Yên Bái",
  };
  return (
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">Trang chủ</h1>
      <div className="flex flex-row mt-[10px]">
        <div className="flex flex-col w-[50%] max-[w-500px]">
          <div className="w-full h-[250px] bg-white rounded-md flex flex-col">
            <div
              style={{ backgroundImage: `url(${BgHPC})` }}
              alt=""
              srcset=""
              className="h-[80px] w-auto bg-cover"
            ></div>
            <div className="relative h-[170px]">
              <img
                src={user.avatar}
                alt=""
                srcset=""
                className="w-[100px] h-[100px] rounded-full object-cover absolute top-[-50px] left-1/2 transform -translate-x-1/2"
              />
              <div className="text-color-text-light pt-[50px] text-center text-[20px] font-bold font-['Times New Roman']">
                {user.name}
              </div>
              <div className="text-color-text-light font-bold text-center text-[18px] font-['Times New Roman']">
                Chức vụ: <span className="font-normal">{user.role}</span>
              </div>
              <div className="text-color-text-light font-bold text-center text-[18px] font-['Times New Roman']">
                Quê quán: <span className="font-normal">{user.address}</span>
              </div>
              <div
                className="absolute right-[20px] hover:cursor-pointer"
                onClick={() => toast.success("Đăng nhập thành công!")}
              >
                <ButtonLogout />
              </div>
            </div>
          </div>

          <div className="w-1/1 h-[600px] bg-white mt-[20px] rounded-md overflow-hidden">
            <h2 className="text-[25px] font-bold text-color-text-light ml-4 mt-4">
              Thông báo
            </h2>
            <div className="flex flex-col">
              <Nocations date="17/09/2024" content="abc" />
              <Nocations date="17/09/2024" content="abc" />
              <Nocations date="17/09/2024" content="abc" />
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-[20px] mr-[10px] w-screen">
          <div className="flex flex-row space-x-[20px]">
            <div className="w-1/4 h-[130px] bg-white rounded-md relative ">
              <h2 className="text-[20px] font-bold text-black ml-4 mt-4">
                Số sách
              </h2>
              <div className="text-[#01B2FF] text-[20px] ml-4 mt-6 font-bold font-['Times New Roman']">
                120 <span className="text-black">quyển</span>
              </div>
              <img
                src={IconSoSach}
                alt=""
                className="absolute w-[60px] right-[15px] object-cover transform top-[50%] -translate-y-[50%]"
              />
              <img
                src={IconUp}
                alt=""
                className="absolute w-[25px] top-[-10px] right-[-10px] animate-bounce"
              />
            </div>
            <div className="w-1/4 h-[130px] bg-white rounded-md relative">
              <h2 className="text-[20px] font-bold text-black ml-4 mt-4">
                Số độc giả
              </h2>
              <div className="text-[#C1571A] text-[20px] ml-4 mt-6 font-bold font-['Times New Roman']">
                263 <span className="text-black">người</span>
              </div>
              <img
                src={IconDocGia}
                alt=""
                className="absolute w-[60px] right-[15px] object-cover transform top-[50%] -translate-y-[50%]"
              />
              <img
                src={IconDown}
                alt=""
                className="absolute w-[25px] top-[-10px] right-[-10px] animate-bounce"
              />
            </div>
            <div className="w-1/4 h-[130px] bg-white rounded-md relative">
              <h2 className="text-[20px] font-bold text-black ml-4 mt-4">
                Số lượt trả
              </h2>
              <div className="text-[#0900FF] text-[20px] ml-4 mt-6 font-bold font-['Times New Roman']">
                1.239 <span className="text-black">lượt</span>
              </div>
              <img
                src={IconLuotMuonTra}
                alt=""
                className="absolute w-[60px] right-[15px] object-cover transform top-[50%] -translate-y-[50%]"
              />
              <img
                src={IconUp}
                alt=""
                className="absolute w-[25px] top-[-10px] right-[-10px] animate-bounce"
              />
            </div>
            <div className="w-1/4 h-[130px] bg-white rounded-md relative">
              <h2 className="text-[20px] font-bold text-black ml-4 mt-4">
                Trả quá hạn
              </h2>
              <div className="text-[#FF0000] text-[20px] ml-4 mt-6 font-bold font-['Times New Roman']">
                39 <span className="text-black">lượt</span>
              </div>
              <img
                src={IconSachQuaHan}
                alt=""
                className="absolute w-[60px] right-[15px] object-cover transform top-[50%] -translate-y-[50%]"
              />
              <img
                src={IconUp}
                alt=""
                className="absolute w-[25px] top-[-10px] right-[-10px] animate-bounce"
              />
            </div>
          </div>
          <div className="h-[720px] bg-white mt-[20px] rounded-md">
            <ChartComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
