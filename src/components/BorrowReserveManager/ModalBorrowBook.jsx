import React, { useState, useEffect } from "react";
import IconClose from "../../assets/icons/menus/closemodal.png";
import IconUser from "../../assets/icons/humans/z5813034854254_ed1be327fb2db9b4512d44e194b0a054.jpg";
import TextField from "@mui/material/TextField";
import Select from "react-dropdown-select";
import axios from "axios";

function ModalBorrowBook({ isOpen, onClose, profileData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    idNguoiDung: profileData?.idNguoiDung || "vd123",
    idSach: [],
    ngayMuon: "",
    ngayTraDuKien: "",
    ghiChu: "",
  });

  const bookOptions = [
    { id: 1, name: "Book One" },
    { id: 2, name: "Book Two" },
    { id: 3, name: "Book Three" },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (selectedBooks) => {
    setFormData((prevData) => ({
      ...prevData,
      idSach: selectedBooks.map((book) => book.id),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com",
        formData
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999] transition-opacity duration-300 ease-in-out overflow-auto">
          <div
            className={`bg-white rounded-lg shadow-lg w-[50%] p-6 transition-transform duration-500 ease-in-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900"
              >
                <img src={IconClose} alt="Close" className="w-[15px]" />
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={profileData?.imageUrl || IconUser}
                alt="Ảnh đại diện"
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h2 className="text-lg font-semibold text-color-text-light">
                  {profileData?.tenNguoiDung || "Lê Minh Nam"}
                </h2>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Quê quán:</span>{" "}
                  {profileData?.queQuan || "Yên Bình, Yên Bái"}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Số điện thoại:</span>{" "}
                  {profileData?.phone || "0359284006"}
                </p>
              </div>
            </div>

            <div className="text-center font-bold text-2xl text-color-text-light mb-6">
              Lập phiếu mượn sách
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  id="idNguoiDung"
                  label="ID Người Dùng"
                  variant="outlined"
                  value={formData.idNguoiDung}
                  InputProps={{
                    readOnly: true,
                  }}
                  className="w-full"
                />

                <TextField
                  id="ngayMuon"
                  label="Ngày Mượn"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  value={formData.ngayMuon}
                  onChange={handleChange}
                  className="w-full"
                />
                <TextField
                  id="ngayTraDuKien"
                  label="Ngày Trả Dự Kiến"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  value={formData.ngayTraDuKien}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <TextField
                id="ghiChu"
                label="Ghi chú"
                placeholder="Ghi chú về phiếu mượn"
                rows={4}
                multiline
                variant="outlined"
                value={formData.ghiChu}
                onChange={handleChange}
                className="w-full"
              />

              {/* Title for book selection */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-color-text-light mb-4">
                  Chọn sách
                </h3>
                <Select
                  options={bookOptions}
                  labelField="name"
                  valueField="id"
                  onChange={handleSelectChange}
                  multi={true}
                  placeholder="Chọn sách"
                  className="w-full"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
                >
                  Lưu
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalBorrowBook;
