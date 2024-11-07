import React from "react";
import IconRules from "../assets/icons/menus/change.png";
function ButtonRules() {
  return (
    <>
      <button
        type="button"
        className="relative px-4 py-2 bg-[#556EE6] rounded-lg text-white my-auto mx-0 ml-4 group"
      >
        Thay đổi quy định
        <img
          src={IconRules}
          alt=""
          srcset=""
          className="absolute w-[20px] top-[-10px] right-[-10px] transition duration-500 ease-in-out transform group-hover:rotate-180"
        />
      </button>
    </>
  );
}

export default ButtonRules;
