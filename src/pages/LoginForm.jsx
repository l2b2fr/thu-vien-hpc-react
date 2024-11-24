import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios"; // Import axios
import Human from "../assets/icons/humans/human-lirbary.png";
import Icon from "../assets/icons/menus/android-icon-192x192.png";
import EyeIconClose from "../assets/icons/humans/eye-close.png";
import EyeIconOpen from "../assets/icons/humans/eye-open.png";

function LoginForm() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(""); // State cho tài khoản
  const [password, setPassword] = useState(""); // State cho mật khẩu
  const [isLoading, setIsLoading] = useState(false); // State cho trạng thái tải dữ liệu

  const handleLogin = async () => {
    try {
      setIsLoading(true); // Bật trạng thái tải khi gửi request
      const response = await axios.post(
        "http://localhost:2004/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.status === 401) {
        toast.error("Sai tài khoản hoặc mật khẩu!");
      } else {
        // Lưu token vào localStorage/sessionStorage
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("user", response.data.user);

        // Chuyển hướng sau khi đăng nhập thành công
        navigate("/");
        toast.success("Đăng nhập thành công!");
        console.log(response.data);
      }
    } catch (error) {
      toast.error("Tài khoản hoặc mật khẩu không đúng!");
    } finally {
      setIsLoading(false); // Tắt trạng thái tải sau khi xử lý xong
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-bgr-down-light">
      <div className="w-[500px] h-[650px] bg-bgr-up-light rounded-[10px] drop-shadow-md">
        <div
          className="w-full h-[150px] rounded-t-[10px] flex relative"
          style={{ backgroundColor: "rgb(236, 212, 233)" }}
        >
          <div className="pl-[20px] pt-[20px]">
            <h1 className="font-bold text-color-text-light text-2xl">
              Chào mừng quay trở lại
            </h1>
            <p className="text-color-text-light text-lg">
              Đăng nhập để tiếp tục...
            </p>
          </div>
          <img
            src={Human}
            className="w-[220px] h-[150px] object-cover"
            alt="Human Icon"
          />
          <img
            className="w-[100px] h-[100px] absolute left-[20px] bottom-[-50px]"
            src={Icon}
            alt="Android Icon"
          />
        </div>

        <div className="m-[30px] flex flex-col">
          <div className="w-full text-color-text-light text-[40px] font-bold font-['Times New Roman'] text-center">
            Đăng nhập
          </div>
          <div className="w-full text-color-text-light text-xl font-bold font-['Times New Roman'] text-left mt-[10px] mb-[10px]">
            TÀI KHOẢN
          </div>
          <div className="w-full h-[40px] bg-bgr-up-light rounded-[10px] border-2 border-[#a4a5a5]">
            <input
              className="w-full h-full bg-transparent rounded-[10px] border-none outline-none px-3"
              placeholder="Nhập tài khoản"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Cập nhật giá trị tài khoản
            />
          </div>
          <div className="w-full text-color-text-light text-xl font-bold font-['Times New Roman'] text-left mt-[30px] mb-[10px]">
            MẬT KHẨU
          </div>
          <div className="h-[40px] bg-bgr-up-light rounded-[10px] border-2 border-[#a4a5a5] flex items-center">
            <input
              className="w-full h-full bg-transparent rounded-[10px] border-none outline-none px-3"
              placeholder="Nhập mật khẩu"
              type={isOpen ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị mật khẩu
            />
            <button
              className="w-[40px] h-full bg-bgr-down-light rounded-r-[10px] flex items-center justify-center hover:cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img
                src={isOpen ? EyeIconOpen : EyeIconClose}
                className="w-[20px] h-[20px] mx-auto duration-200"
                alt="Hiện mật khẩu"
              />
            </button>
          </div>

          <div className="w-full text-[#2d58a3] text-xl font-bold font-['Times New Roman'] text-left mt-[10px] mb-[10px] flex content-center items-center pt-3">
            <input className="w-4 h-4 pt-3" type="checkbox" />
            <p className="text-color-text-light text-lg font-light ml-2">
              Ghi nhớ tôi
            </p>
          </div>

          <button
            className="w-full h-[50px] bg-[#556ee6] rounded-[15px] text-white text-[25px] font-bold"
            onClick={handleLogin} // Gọi hàm đăng nhập khi nhấn nút
            disabled={isLoading} // Vô hiệu hóa nút khi đang tải
          >
            {isLoading ? "Đang đăng nhập..." : "ĐĂNG NHẬP"}
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full justify-center">
            <p className="text-black text-[15px] font-semibold font-[Times New Roman] opacity-80 text-center">
              Quên mật khẩu?{" "}
            </p>
            <p
              className="text-color-text-light text-[15px] font-semibold font-[Times New Roman] opacity-80 text-center hover:cursor-pointer"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Lấy lại
            </p>
          </div>
          <div className="text-black text-[15px] font-semibold font-[Times New Roman] opacity-80 text-center">
            © 2024 Lê Minh Nam. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
