import React from "react";
import IconLogout from "../../assets/icons/menus/logout1.png";

function ButtonDashboard() {
  return (
    <>
      <button className="bg-[#556EE6] text-white px-4 py-1 rounded-full flex">
        Đăng xuất
        <img
          src={IconLogout}
          alt=""
          srcset=""
          className="w-[12px] object-cover ml-2 pt-1.5"
        />
      </button>
    </>
  );
}

export default ButtonDashboard;
