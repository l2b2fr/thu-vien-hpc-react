import React, { useState, useEffect } from "react";
import IconClose from "../../assets/icons/menus/closemodal.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import IconAnhSach from "../../assets/image/image.png";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function ModalUpdateUser({ isOpen, onClose, user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    maNguoiDung: "",
    tenNguoiDung: "",
    phone: "",
    ngaySinh: "",
    queQuan: "",
    diaChi: "",
    email: "",
    imageUrl: "",
    ghiChu: "",
    taiKhoan: "",
    matKhau: "",
    idPhanQuyen: "",
    trangThai: "",
  });

  useEffect(() => {
    if (user) {
      const formatDateForInput = (date) => {
        const d = new Date(date);
        return d.toISOString().split("T")[0];
      };

      setFormData({
        ...user,
        ngaySinh: formatDateForInput(user.ngaySinh),
      });
      console.log(formData);
    }
  }, [isOpen, user]);

  const quyenHan = [
    { value: "1", label: "Quản trị viên" },
    { value: "2", label: "Thủ thư" },
    { value: "3", label: "Độc giả" },
  ];

  const trangThai = [
    { value: "0", label: "Thẻ đóng" },
    { value: "1", label: "Thẻ mở" },
  ];

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imageUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.put(
        `http://localhost:2004/api/user/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Update " + response.data);
      onClose();
      navigate("/lap-the-doc-gia");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-[9999] transition-opacity duration-300 ease-in-out overflow-auto">
        <div className="bg-white rounded-lg shadow-lg w-[70%] p-6 mt-10 transition-transform duration-500 ease-in-out">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              <img src={IconClose} alt="Close" className="w-[15px]" />
            </button>
          </div>
          <div className="text-center text-color-text-light font-bold text-2xl mt-2">
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
              />
              <TextField
                id="tenNguoiDung"
                label="Tên người dùng"
                variant="outlined"
                value={formData.tenNguoiDung}
                onChange={handleChange}
              />
              <TextField
                id="phone"
                label="Số điện thoại"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                id="ngaySinh"
                label="Ngày sinh"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                value={formData.ngaySinh}
                onChange={handleChange}
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
              />
              <TextField
                id="diaChi"
                label="Địa chỉ"
                variant="outlined"
                value={formData.diaChi}
                onChange={handleChange}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="flex items-center space-x-4">
                <img
                  src={formData.imageUrl ? formData.imageUrl : IconAnhSach}
                  alt="Uploaded"
                  className="w-[55px] h-[55px] object-cover rounded-full"
                />
                <Button variant="outlined" component="label">
                  Tải ảnh lên
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />
                </Button>
              </div>
            </div>

            {/* Cột 3 */}
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

            {/* Cột 4 */}
            <div className="flex flex-col w-[45%] space-y-10">
              <TextField
                id="taiKhoan"
                label="Tài khoản"
                variant="outlined"
                value={formData.taiKhoan}
                onChange={handleChange}
              />
              <TextField
                id="matKhau"
                label="Mật khẩu"
                type="password"
                variant="outlined"
                value={formData.matKhau}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-[45%] space-y-10">
              {/* Quyền hạn */}
              <div>
                <select
                  id="idPhanQuyen"
                  value={formData.idPhanQuyen}
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
    )
  );
}

export default ModalUpdateUser;
