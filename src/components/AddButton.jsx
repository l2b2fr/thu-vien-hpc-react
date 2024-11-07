import React from "react";
import IconAdd from "../assets/icons/menus/plus.png";

function AddButton(props) {
  return (
    <>
      <button
        type="button"
        className="relative px-4 py-2 bg-[#6F8A16] rounded-lg text-white my-auto mx-0 ml-4 group"
      >
        {props.title}
        <img
          src={IconAdd}
          alt=""
          srcset=""
          className="absolute w-[20px] top-[-10px] right-[-10px] transition duration-500 ease-in-out transform group-hover:rotate-180"
        />
      </button>
    </>
  );
}

export default AddButton;
