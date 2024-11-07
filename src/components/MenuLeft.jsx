import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IconHPC from "../assets/icons/menus/android-icon-192x192.png";
import IconHome from "../assets/icons/menus/home.png";
import IconTheDocGia from "../assets/icons/books/book.png";
import IconThemSach from "../assets/icons/books/book-add.png";
import IconTimKiemSach from "../assets/icons/books/search.png";
import IconMuonSach from "../assets/icons/books/book-muon.png";
import IconNhanTraSach from "../assets/icons/books/borrow.png";
import IconThuTienPhat from "../assets/icons/books/veredict.png";
import IconBaoCao from "../assets/icons/analysis/analysis.png";
import IconThongTin from "../assets/icons/menus/information.png";
import IconCaiDat from "../assets/icons/menus/settings.png";

function MenuLeft({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const [activeOption, setActiveOpition] = useState("trangchu");
  const menuData = [
    { name: "Trang chủ", icon: { IconHome }, active: "trangchu", path: "/" },
    {
      name: "Quản lý độc giả",
      icon: { IconTheDocGia },
      active: "lapthe",
      path: "/lap-the-doc-gia",
    },
    {
      name: "Quản lý tài liệu",
      icon: { IconThemSach },
      active: "tiepnhan",
      path: "/tiep-nhan-sach-moi",
    },
    // {
    //   name: "Tra cứu sách",
    //   icon: { IconTimKiemSach },
    //   active: "tracuusach",
    //   path: "/tra-cuu-sach",
    // },
    {
      name: "Quản lý mượn đặt sách",
      icon: { IconMuonSach },
      active: "chomuon",
      path: "/cho-muon-sach",
    },
    {
      name: "Quản lý trả sách",
      icon: { IconNhanTraSach },
      active: "nhantra",
      path: "/nhan-tra-sach",
    },
    {
      name: "Lập phiếu thu tiền phạt",
      icon: { IconThuTienPhat },
      active: "lapphieu",
      path: "/lap-phieu-thu-tien-phat",
    },
    {
      name: "Thống kê báo cáo",
      icon: { IconBaoCao },
      active: "lapbao",
      path: "/lap-bao-cao",
    },
    {
      name: "Thông tin phần mềm",
      icon: { IconThongTin },
      active: "thongtin",
      path: "/thong-tin-phan-mem",
    },
  ];

  return (
    <>
      <div
        className={`h-screen ${
          isOpen ? "w-[230px]" : "w-[60px]"
        } bg-bgr-up-light duration-300 fixed top-0 left-0`}
      >
        <div className="flex p-[10px] h-[70px] content-center items-center">
          <img
            src={IconHPC}
            alt="Thư viện HPC"
            className={`w-[35px] h-[35px] duration-500 ${
              isOpen && "rotate-[360deg]"
            }`}
          />
          <div
            class={`${
              isOpen ? "" : "hidden justify-center items-center"
            } w-[114px] text-left pl-[10px] text-color-text-light text-[15px] font-bold font-['Times New Roman'] overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            Thư viện HPC
          </div>
        </div>

        <ul>
          {menuData.map((item, index) => (
            <li
              key={index}
              className={`flex p-[10px] h-[40px] ${
                item.active === activeOption
                  ? "bg-bgr-down-light"
                  : "bg-bgr-up-light"
              } content-center items-center hover:cursor-pointer hover:bg-gray-200 transition-colors duration-300`}
              onClick={() => {
                setActiveOpition(item.active);
                navigate(item.path);
              }}
            >
              <img
                src={item.icon[Object.keys(item.icon)[0]]}
                alt={item.name}
                className="w-[25px] h-[25px] mx-auto"
              />
              <div
                className={`${
                  isOpen ? "" : "hidden"
                } w-full text-left pl-[10px] text-color-text-light text-[13px] font-bold font-['Times New Roman'] overflow-hidden text-ellipsis whitespace-nowrap`}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex p-[10px] w-full h-[40px] absolute content-center items-center bottom-[10px] hover:cursor-pointer hover:bg-gray-200 transition-colors duration-300">
          <img
            src={IconCaiDat}
            alt="Thư viện HPC"
            className="w-[25px] h-[25px] mx-auto relative"
          />
          <div
            class={`${
              isOpen ? "" : "hidden"
            } w-full text-left pl-[10px] text-color-text-light text-[13px] font-bold font-['Times New Roman'] overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            Cài đặt
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuLeft;
