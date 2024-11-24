import React, { useEffect, useState } from "react";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import DataTable from "react-data-table-component";
import { toast } from "sonner";
import ModalReturnBook from "../components/ReturnBookManager/ModalReturnBook";
import { TextField } from "@mui/material";
import axios from "axios";
import IconUser from "../assets/icons/humans/userdf.png";
import UserInfo from "../components/ReturnBookManager/UserInfo";
import IconScanner from "../assets/image/Plain credit card-bro.png";
import IconLoading from "../assets/gif/Dual Ring@1x-1.0s-200px-200px.gif";

function ReturnBookManager() {
  const [scannedMaNguoiDung, setScannedMaNguoiDung] = useState("");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isModalReturnOpen, setIsModalReturnOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
      textAlign: "left",
    },
    {
      name: "Mã người dùng",
      selector: (row) => row.idNguoiDung,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Tên sách",
      selector: (row) => row.idSach,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Ngày mượn",
      selector: (row) => new Date(row.ngayMuon).toLocaleDateString(),
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Ngày trả dự kiến",
      selector: (row) => new Date(row.ngayTraDuKien).toLocaleDateString(),
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Ngày trả thực tế",
      selector: (row) =>
        row.ngayTraThucTe
          ? new Date(row.ngayTraThucTe).toLocaleDateString()
          : "Chưa trả",
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Trạng thái",
      selector: (row) => (row.trangThai ? "Đã trả" : "Đang mượn"),
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Hành động",
      textAlign: "left",
      cell: (row) => (
        <div className="flex space-x-2 w-full justify-center items-center">
          {row.trangThai !== true ? (
            <button
              onClick={() => openReturnModal(row)}
              className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-700"
            >
              Lập phiếu trả
            </button>
          ) : (
            <button
              onClick={() => openReturnModal(row)}
              className="px-3 py-1 text-sm font-semibold text-blue-500 rounded hover:bg-blue-700"
            >
              Xem phiếu trả
            </button>
          )}
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "150px",
      textAlign: "left",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#556EE6",
        color: "#ffffff",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "left",
      },
    },
    rows: {
      style: {
        minHeight: "72px",
        textAlign: "left",
        fontSize: "17px",
        fontWeight: "bold",
        padding: "8px",
      },
    },
    cells: {
      style: {
        padding: "8px",
        textAlign: "left",
      },
    },
  };

  const data = [
    {
      id: 1,
      idNguoiDung: 101,
      idSach: 1001,
      ngayMuon: "2024-10-01T14:30:00",
      ngayTraDuKien: "2024-10-15T14:30:00",
      ngayTraThucTe: "2024-10-16T10:00:00",
      phiTreHan: 50000,
      daThanhToan: 50000,
      tongNo: 0,
      trangThai: true,
      ghiChu: "Trả sách sớm",
      eventType: "Return",
      createdAt: "2024-10-01T14:30:00",
      updatedAt: "2024-10-16T10:00:00",
    },
    {
      id: 2,
      idNguoiDung: 102,
      idSach: 1002,
      ngayMuon: "2024-09-20T10:00:00",
      ngayTraDuKien: "2024-10-04T10:00:00",
      ngayTraThucTe: "2024-10-05T12:00:00",
      phiTreHan: 0,
      daThanhToan: 0,
      tongNo: 0,
      trangThai: true,
      ghiChu: "Sách không bị trễ hạn",
      eventType: "Return",
      createdAt: "2024-09-20T10:00:00",
      updatedAt: "2024-10-05T12:00:00",
    },
    {
      id: 3,
      idNguoiDung: 103,
      idSach: 1003,
      ngayMuon: "2024-09-22T10:00:00",
      ngayTraDuKien: "2024-10-06T10:00:00",
      ngayTraThucTe: "2024-10-08T12:00:00",
      phiTreHan: 20000,
      daThanhToan: 20000,
      tongNo: 0,
      trangThai: false,
      ghiChu: "Trả sách muộn",
      eventType: "Return",
      createdAt: "2024-09-22T10:00:00",
      updatedAt: "2024-10-08T12:00:00",
    },
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        const fetchUserData = async () => {
          try {
            const token = localStorage.getItem("userToken");
            const response = await axios.get(
              `http://localhost:2004/api/user/getUserByMaNguoiDung/${scannedMaNguoiDung}`,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setUser(response.data);
            console.log(user);
            setError(null);
          } catch (error) {
            setError(
              error.response?.data?.message || "Lỗi khi lấy dữ liệu người dùng."
            );
          } finally {
            setLoading(false);
          }
        };
        fetchUserData();
        console.log(user);
        setScannedMaNguoiDung("");
      } else {
        setScannedMaNguoiDung((prevData) => prevData + event.key);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [scannedMaNguoiDung]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.id.toString().includes(searchTerm) ||
        item.idNguoiDung.toString().includes(searchTerm) ||
        item.idSach.toString().includes(searchTerm) ||
        new Date(item.ngayMuon).toLocaleDateString().includes(searchTerm) ||
        new Date(item.ngayTraDuKien)
          .toLocaleDateString()
          .includes(searchTerm) ||
        (item.ngayTraThucTe
          ? new Date(item.ngayTraThucTe)
              .toLocaleDateString()
              .includes(searchTerm)
          : false) ||
        item.trangThai.toString().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const openReturnModal = (row) => {
    setSelectedRow(row);
    setIsModalReturnOpen(true);
  };

  const closeReturnModal = () => {
    setIsModalReturnOpen(false);
    setSelectedRow(null);
  };

  return (
    <div>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Quản lý trả sách
      </h1>
      <div className="w-full flex flex-col mt-[10px] space-y-5">
        <div className="w-full flex items-center space-x-3 justify-center">
          <div>
            {user ? (
              <>
                <UserInfo user={user} />
                <DataTable
                  columns={columns}
                  data={filteredData.length > 0 ? filteredData : data}
                  customStyles={customStyles}
                  pagination
                  paginationPerPage={10}
                  paginationRowsPerPageOptions={[10, 20, 30]}
                  className="mt-4 rounded-md"
                />
                {isModalReturnOpen && (
                  <ModalReturnBook
                    selectedRow={selectedRow}
                    onClose={closeReturnModal}
                  />
                )}
              </>
            ) : (
              <>
                <div className="w-full flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-md">
                  <img src={IconScanner} alt="User Icon" className="h-24" />

                  <img src={IconLoading} alt="Loading Icon" className="h-5" />

                  <div className="text-center text-lg text-gray-700 font-semibold">
                    Vui lòng quét thẻ để xem thông tin trả sách...
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnBookManager;
