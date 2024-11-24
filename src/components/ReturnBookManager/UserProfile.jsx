import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import IconAnhSach from "../../assets/image/image.png";
import IconUser from "../../assets/icons/humans/userdf.png";

function UserProfile({ documentData }) {
  const theLoaiOptions = [
    { idTheLoai: 1, label: "Khoa học viễn tưởng" },
    { idTheLoai: 2, label: "Văn học cổ điển" },
    { idTheLoai: 3, label: "Tiểu thuyết trinh thám" },
    { idTheLoai: 4, label: "Sách thiếu nhi" },
    { idTheLoai: 5, label: "Kỹ thuật và Công nghệ" },
    { idTheLoai: 6, label: "Lịch sử và Địa lý" },
    { idTheLoai: 7, label: "Sách giáo khoa" },
    { idTheLoai: 8, label: "Tâm lý học" },
    { idTheLoai: 9, label: "Kinh tế" },
    { idTheLoai: 10, label: "Y học" },
  ];

  const [formData, setFormData] = useState({
    idTheLoai: "",
    maISBN: "",
    tieuDe: "",
    tacGia: "",
    nhaXuatBan: "",
    namXuatBan: "",
    soLuong: "",
    imageUrl: null,
    tinhTrangSach: "",
    trangThai: "",
  });

  useEffect(() => {
    if (documentData) {
      setFormData({
        idTheLoai: documentData.idTheLoai || "",
        maISBN: documentData.maISBN || "",
        tieuDe: documentData.tieuDe || "",
        tacGia: documentData.tacGia || "",
        nhaXuatBan: documentData.nhaXuatBan || "",
        namXuatBan: documentData.namXuatBan || "",
        soLuong: documentData.soLuong || "",
        imageUrl: documentData.imageUrl || null,
        tinhTrangSach: documentData.tinhTrangSach || "",
        trangThai: documentData.trangThai || "",
      });
    }
  }, [documentData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://your-api-endpoint.com/${documentData.id}`,
        formData
      );
      console.log("Update Success:", response.data);
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <>
      <div className="w-full h-[310px] p-4 bg-white rounded-lg flex duration-300">
        <div className="flex w-full">
          <div className="flex flex-col items-center w-[20%] space-y-5">
            <img
              src={formData.imageUrl || IconUser}
              alt="Uploaded"
              className="w-[230px] h-full rounded-md"
            />
          </div>

          <div className="flex flex-col items-center w-[80%] ml-3 my-auto">
            <div className="w-full flex flex-wrap gap-4 justify-between items-center">
              <div className="flex flex-col w-[45%] space-y-4">
                <TextField
                  id="maISBN"
                  label="Mã ISBN"
                  variant="outlined"
                  value={formData.maISBN}
                  onChange={handleChange}
                  className="mb-4"
                />
                <TextField
                  id="nhaXuatBan"
                  label="Nhà Xuất Bản"
                  variant="outlined"
                  value={formData.nhaXuatBan}
                  onChange={handleChange}
                  className="mb-4"
                />
                <TextField
                  id="tinhTrangSach"
                  label="Tình Trạng Sách"
                  variant="outlined"
                  value={formData.tinhTrangSach}
                  onChange={handleChange}
                  className="mb-4"
                />
                <TextField
                  id="namXuatBan"
                  label="Năm Xuất Bản"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.namXuatBan}
                  onChange={handleChange}
                  className="mb-4"
                />
              </div>

              <div className="flex flex-col w-[45%] space-y-4">
                <TextField
                  id="tieuDe"
                  label="Tiêu Đề"
                  variant="outlined"
                  value={formData.tieuDe}
                  onChange={handleChange}
                  className="mb-4"
                />
                <TextField
                  id="tacGia"
                  label="Tác Giả"
                  variant="outlined"
                  value={formData.tacGia}
                  onChange={handleChange}
                  className="mb-4"
                />
                <TextField
                  id="soLuong"
                  label="Số Lượng"
                  variant="outlined"
                  type="number"
                  value={formData.soLuong}
                  onChange={handleChange}
                  className="mb-4"
                />
                <select
                  id="idTheLoai"
                  value={formData.idTheLoai}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-[56px]"
                >
                  <option value="">Chọn thể loại</option>
                  {theLoaiOptions.map((option) => (
                    <option key={option.idTheLoai} value={option.idTheLoai}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
