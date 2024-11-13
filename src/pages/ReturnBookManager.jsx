import React, { useEffect, useState } from "react";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import DataTable from "react-data-table-component";
import { toast } from "sonner";
import ModalReturnBook from "../components/ReturnBookManager/ModalReturnBook";

function ReturnBookManager() {
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
      trangThai: true, // true means the book has been returned
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
      trangThai: true, // true means the book has been returned
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
      trangThai: false, // false means the book is still borrowed
      ghiChu: "Trả sách muộn",
      eventType: "Return",
      createdAt: "2024-09-22T10:00:00",
      updatedAt: "2024-10-08T12:00:00",
    },
  ];

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
          {/* Kiểm tra trạng thái của sách, nếu đã trả thì chỉ hiển thị "Xem phiếu trả" */}
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

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isModalReturnOpen, setIsModalReturnOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

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
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Quản lý trả sách
      </h1>
      <div className="flex flex-col mt-[10px] space-y-5">
        <div className="justify-between h-[80px] w-full bg-white rounded-md flex">
          <div className="flex justify-center">
            <div
              className="flex justify-center"
              onClick={() => openReturnModal()}
            >
              <AddButton title="Lập phiếu trả" />
            </div>
            <div
              className="flex justify-center"
              onClick={() => toast.info("Chức năng đang phát triển")}
            >
              <AddButton title="Lập phiếu đặt" />
            </div>
            <div
              className="flex justify-center"
              onClick={() => toast.info("Chức năng đang phát triển")}
            >
              <ButtonRules />
            </div>
          </div>
          <div className="w-[590px] h-[45px] bg-bgr-down-light rounded-[20px] border-none border-[#a4a5a5] my-auto mx-0 flex mr-4">
            <img
              src={IconTimKiem}
              alt="Search Icon"
              className="w-[22px] h-[22px] opacity-60 my-auto ml-[15px]"
            />
            <input
              value={search}
              onChange={handleSearch}
              className="w-full h-full bg-transparent rounded-[10px] border-none outline-none px-3"
              placeholder="Tìm kiếm người dùng"
              type="text"
            />
          </div>
        </div>

        <div className="w-full h-full p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-color-text-light">Danh sách trả sách</h2>
          <DataTable
            columns={columns}
            data={filteredData}
            customStyles={customStyles}
            pagination
            fixedHeader
            // selectableRows
            selectableRowsHighlight
            highlightOnHover
            striped
          />
        </div>
      </div>

      {/* Modal trả sách */}
      {isModalReturnOpen && (
        <ModalReturnBook
          isOpen={isModalReturnOpen}
          closeModal={closeReturnModal}
          selectedRow={selectedRow}
        />
      )}
    </>
  );
}

export default ReturnBookManager;
