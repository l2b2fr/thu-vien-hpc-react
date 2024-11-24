import React, { useState, useEffect, useCallback } from "react";
import IconClose from "../../assets/icons/menus/closemodal.png";
import IconUser from "../../assets/icons/humans/z5813034854254_ed1be327fb2db9b4512d44e194b0a054.jpg";
import IconScanner from "../../assets/image/Plain credit card-bro.png";
import IconLoading from "../../assets/gif/Dual Ring@1x-1.0s-200px-200px.gif";
import TextField from "@mui/material/TextField";
import Select from "react-dropdown-select";
import axios from "axios";

function ModalBorrowBook({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardScanned, setIsCardScanned] = useState(false);
  const [scannedId, setScannedId] = useState("");
  const [scannedData, setScannedData] = useState(null);
  const [formData, setFormData] = useState({
    idNguoiDung: "",
    idSach: [],
    ngayMuon: "",
    ngayTraDuKien: "",
    ghiChu: "",
  });

  const bookOptions = [
    { id: 1, name: "Programming in C#" },
    { id: 2, name: "Introduction to Algorithms" },
    { id: 3, name: "Data Science for Business" },
    { id: 4, name: "Eloquent JavaScript" },
    { id: 5, name: "Learning Python" },
    { id: 6, name: "Clean Code" },
    { id: 7, name: "Big Data" },
    { id: 8, name: "Automate the Boring Stuff with Python" },
    { id: 9, name: "Machine Learning for Absolute Beginners" },
    { id: 10, name: "JavaScript: The Good Parts" },
    { id: 11, name: "The Pragmatic Programmer" },
    { id: 12, name: "Spring in Action" },
    { id: 13, name: "Linux Pocket Guide" },
    { id: 14, name: "Artificial Intelligence: A Modern Approach" },
    { id: 15, name: "Fluent Python" },
    { id: 16, name: "Advanced Programming in the UNIX Environment" },
    { id: 17, name: "Python for Data Analysis" },
    { id: 18, name: "Python Crash Course" },
    { id: 19, name: "Head First Java" },
    { id: 20, name: "The Art of Computer Programming" },
  ];

  const handleKeyPress = useCallback(
    (event) => {
      if (isOpen) {
        if (event.key === "Enter") {
          startCardScan();
          setScannedId("");
        } else {
          setScannedId((prevData) => prevData + event.key);
        }
      }
    },
    [isOpen, scannedId]
  );

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setScannedData(null);
      setIsCardScanned(false);
      window.addEventListener("keypress", handleKeyPress);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [isOpen, handleKeyPress]);

  const startCardScan = async () => {
    setIsCardScanned(false); // Reset state when opening a new modal

    const token = localStorage.getItem("userToken");
    try {
      const scannedProfile = await axios.get(
        `http://localhost:2004/api/user/getUserByMaNguoiDung/${scannedId}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Extract and set the relevant data from the response
      const { data } = scannedProfile;
      setScannedData({
        ...data,
        tenNguoiDung: data.tenNguoiDung,
        phone: data.phone,
        queQuan: data.queQuan,
        email: data.email,
        imageUrl: data.imageUrl,
        // Add other fields as needed from the API response
      });

      setIsCardScanned(true); // Update card scan status
      setFormData((prevData) => ({
        ...prevData,
        idNguoiDung: data.maNguoiDung, // Set the user's ID from the response
      }));
    } catch (error) {
      console.error("Error scanning card:", error);
    }
  };

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

            {/* Hiển thị thông tin người dùng nếu thẻ đã được quét */}
            {isCardScanned ? (
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={scannedData.imageUrl}
                    alt="Ảnh đại diện"
                    className="w-16 h-16 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-color-text-light">
                      {scannedData.tenNguoiDung}
                    </h2>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Quê quán:</span>{" "}
                      {scannedData.queQuan}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Số điện thoại:</span>{" "}
                      {scannedData.phone}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Thông báo chờ quét thẻ
              <div className="text-center items-center justify-center flex flex-col">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Vui lòng quét thẻ thư viện
                </h2>
                <img src={IconScanner} alt="" srcset="" className="w-[400px]" />
                <img src={IconLoading} alt="" srcset="" className="w-[50px]" />
                <p className="text-gray-600">Đang chờ quét thẻ của bạn...</p>
              </div>
            )}

            {/* Hiển thị form mượn sách nếu thẻ đã được quét */}
            {isCardScanned && (
              <>
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

                  {/* Select danh sách sách */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-color-text-light mb-4">
                      Chọn danh sách sách
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
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalBorrowBook;
