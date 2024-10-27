import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Human from "../assets/icons/humans/human-lirbary.png";
import Icon from "../assets/icons/menus/android-icon-192x192.png";
function ForgotPasswordForm() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-bgr-down-light">
        <div className="w-[500px] h-[580px] bg-bgr-up-light rounded-[10px] drop-shadow-md">
          <div
            className="w-full h-[150px] rounded-t-[10px] flex relative justify-between"
            style={{ backgroundColor: "rgb(236, 212, 233)" }}
          >
            <div className="pl-[20px] pt-[20px]">
              <h1 className="font-bold text-color-text-light text-2xl">
                Lấy lại mật khẩu
              </h1>
              <p className="text-color-text-light text-lg">
                Nhập email để lấy lại mật khẩu
              </p>
            </div>
            <img src={Human} className="w-[220px] h-[150px] object-cover" alt="Human Icon"></img>
            <img
              className="w-[100px] h-[100px] absolute left-[20px] bottom-[-50px]"
              src={Icon}
              alt="Android Icon"
            ></img>
          </div>

          <div className="m-[30px] flex flex-col">
            <div class="w-full text-color-text-light text-[40px] font-bold font-['Times New Roman'] text-center">
              Quên mật khẩu
            </div>
            <div className="w-full h-[50px] flex items-center justify-center ">
              <div className="w-full h-full bg-[#ccf0e3] rounded-[5px] border-2 border-[#a4a5a5] flex items-center content-center">
                <p className="mx-auto text-[#ff0000] text-[13px] font-normal font-['Times New Roman'] text-center">
                  Vui lòng nhập địa chỉ email của bạn. Mật khẩu mới sẽ được gửi
                  tới email này!
                </p>
              </div>
            </div>
            <div class="w-full text-color-text-light text-xl font-bold font-['Times New Roman'] text-left mt-[30px] mb-[10px]">
              Email
            </div>
            <div class="w-full h-[40px] bg-bgr-up-light rounded-[10px] border-2 border-[#a4a5a5]">
              <input
                className="w-full h-full bg-transparent rounded-[10px] border-none outline-none px-3"
                placeholder="Nhập email của bạn"
              />
            </div>
            <button
              className="w-full h-[50px] bg-[#556ee6] rounded-[15px] text-white text-[25px] font-bold mt-10"
              onClick={() =>
                toast.info("Mật khẩu mới đã được gửi về Email của bạn")
              }
            >
              XÁC NHẬN
            </button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full justify-center">
              <p className="text-black text-[15px] font-semibold font-[Times New Roman] opacity-80 text-center">
                Quay lại trang đăng nhập?{" "}
              </p>
              <p
                className="text-color-text-light text-[15px] font-semibold font-[Times New Roman] opacity-80 text-center hover:cursor-pointer"
                onClick={handleNavigation}
              >
                Nhấn vào đây
              </p>
            </div>
            <div className="text-black text-[15px] font-semibold font-[Times New Roman] opacity-80 text-center">
              © 2024 Lê Minh Nam. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordForm;
