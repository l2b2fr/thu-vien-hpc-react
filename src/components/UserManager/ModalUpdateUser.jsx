import React from "react";
import { useState, useEffect } from "react";
import IconClose from "../../assets/icons/menus/closemodal.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import IconAnhSach from "../../assets/image/image.png";

function ModalUpdateUser({ isOpen, onClose, user }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const quyenHan = [
    {
      value: "admin",
      label: "Quản trị viên",
    },
    {
      value: "thuthu",
      label: "Thủ thư",
    },
    {
      value: "docgia",
      label: "Độc giả",
    },
  ];

  const trangThai = [
    {
      value: "0",
      label: "Thẻ đóng",
    },
    {
      value: "1",
      label: "Thẻ mở",
    },
  ];

  const [formData, setFormData] = useState({
    maNguoiDung: user ? user.id : "",
    tenNguoiDung: user ? user.tenNguoiDung : "",
    phone: user ? user.phone : "",
    ngaySinh: user ? user.ngaySinh : "",
    queQuan: user ? user.queQuan : "",
    diaChi: user ? user.diaChi : "",
    email: user ? user.email : "",
    imageUrl: user ? user.imageUrl : "",
    ghiChu: user ? user.ghiChu : "",
    taiKhoan: user ? user.taiKhoan : "",
    matKhau: user ? user.matKhau : "",
    trangThai: user ? user.trangThai : "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        maNguoiDung: user.id,
        tenNguoiDung: user.tenNguoiDung,
        phone: user.phone,
        ngaySinh: user.ngaySinh,
        queQuan: user.queQuan,
        diaChi: user.diaChi,
        email: user.email,
        imageUrl: user.imageUrl,
        ghiChu: user.ghiChu,
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        trangThai: user.trangThai,
      });
    }
  }, [isOpen, user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://your-api-endpoint.com/${user.id}`,
        formData
      );
      console.log("Success:", response.data);
      // Xử lý dữ liệu phản hồi từ server (nếu cần)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-[9999] transition-opacity duration-300 ease-in-out overflow-auto">
          <div
            className={`bg-white rounded-lg shadow-lg w-[70%] p-6 mt-10 transition-transform duration-500 ease-in-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 font-bold text-xl"
              >
                <img src={IconClose} alt="" srcset="" className="w-[15px]" />
              </button>
            </div>
            <div className="mt-2">
              <div className="text-center text-color-text-light font-bold text-2xl">
                Sửa người dùng
              </div>
              <div className="flex flex-wrap gap-4 mt-10 justify-center items-center">
                {/* Cột 1 */}
                <div className="flex flex-col w-[45%] space-y-10">
                  <TextField
                    id="maNguoiDung"
                    label="Mã người dùng"
                    variant="outlined"
                    value={formData.maNguoiDung}
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <TextField
                    id="tenNguoiDung"
                    label="Tên người dùng"
                    variant="outlined"
                    value={formData.tenNguoiDung}
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <TextField
                    id="phone"
                    label="Số điện thoại"
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <TextField
                    id="ngaySinh"
                    label="Ngày sinh"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    value={formData.ngaySinh}
                    onChange={handleChange}
                    className="mb-4"
                  />
                </div>

                {/* Cột 2 */}
                <div className="flex flex-col w-[45%] space-y-10">
                  <TextField
                    id="queQuan"
                    label="Quê quán"
                    variant="outlined"
                    value={formData.queQuan}
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <TextField
                    id="diaChi"
                    label="Địa chỉ"
                    variant="outlined"
                    value={formData.diaChi}
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    className="mb-4"
                  />

                  {/* Upload Ảnh */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={formData.imageUrl ? formData.imageUrl : IconAnhSach}
                      alt="Uploaded"
                      className="w-[55px] h-[55px] object-cover rounded-full"
                      onLoad={() =>
                        setFormData((prevState) => ({
                          ...prevState,
                          imageUrl: prevState.imageUrl,
                        }))
                      }
                    />
                    <Button
                      variant="outlined"
                      component="label"
                      className="mb-2"
                    >
                      Tải ảnh lên
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onload = (e) =>
                            setFormData({
                              ...formData,
                              imageUrl: e.target.result,
                            });
                          reader.readAsDataURL(file);
                        }}
                      />
                    </Button>
                  </div>
                </div>
                <TextField
                  id="ghiChu"
                  label="Ghi chú"
                  placeholder="Ghi chú về người dùng"
                  rows={5}
                  multiline
                  variant="outlined"
                  value={formData.ghiChu}
                  onChange={handleChange}
                  className="w-[91.5%]"
                />

                {/* Cột 1 */}
                <div className="flex flex-col w-[45%] space-y-10">
                  <TextField
                    id="taiKhoan"
                    label="Tài khoản"
                    variant="outlined"
                    value={formData.taiKhoan}
                    onChange={handleChange}
                    className="mb-4"
                  />
                  <TextField
                    id="matKhau"
                    label="Mật khẩu"
                    type="password"
                    variant="outlined"
                    value={formData.matKhau}
                    onChange={handleChange}
                    className="mb-4"
                  />
                </div>

                <div className="flex flex-col w-[45%] space-y-10">
                  {/* Quyền hạn */}
                  <div>
                    <select
                      id="quyenHan"
                      value={formData.quyenHan}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-[56px]"
                    >
                      <option value="">Chọn quyền hạn</option>
                      {quyenHan.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Trạng thái */}
                  <div>
                    <select
                      id="trangThai"
                      value={formData.trangThai}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-[56px]"
                    >
                      <option value="">Chọn trạng thái</option>
                      {trangThai.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-4 mr-10">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-7 rounded-lg"
              >
                Lưu
              </button>
              <button
                onClick={onClose}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-7 rounded-lg"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalUpdateUser;
