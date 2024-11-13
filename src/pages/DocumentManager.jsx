import React, { useState, useEffect } from "react";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import DataTable from "react-data-table-component";
import { toast } from "sonner";
import ModalAddUser from "../components/UserManager/ModalAddUser";
import ModalUpdateUser from "../components/UserManager/ModalUpdateUser";
import { Button } from "@mui/material";
import AddDocument from "./../components/DocumentManager/AddDocument";
import UpdateDocument from "../components/DocumentManager/UpdateDocument";

function DocumentManager() {
  const data = [
    {
      idTheLoai: 1,
      maISBN: "978-3-16-148410-0",
      tieuDe: "Programming in C#",
      tacGia: "John Smith",
      nhaXuatBan: "Tech Books Publishing",
      namXuatBan: "2022-05-14",
      soLuong: 10,
      imageUrl: "https://example.com/csharp.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 2,
      maISBN: "978-0-13-110362-7",
      tieuDe: "Introduction to Algorithms",
      tacGia: "Thomas H. Cormen",
      nhaXuatBan: "MIT Press",
      namXuatBan: "2009-07-31",
      soLuong: 5,
      imageUrl: "https://example.com/algorithms.png",
      tinhTrangSach: "Cũ",
      trangThai: false,
    },
    {
      idTheLoai: 3,
      maISBN: "978-0-07-161586-4",
      tieuDe: "Data Science for Business",
      tacGia: "Foster Provost",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2013-08-01",
      soLuong: 7,
      imageUrl: "https://example.com/datascience.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 4,
      maISBN: "978-1-59327-584-6",
      tieuDe: "Eloquent JavaScript",
      tacGia: "Marijn Haverbeke",
      nhaXuatBan: "No Starch Press",
      namXuatBan: "2018-12-04",
      soLuong: 8,
      imageUrl: "https://example.com/javascript.png",
      tinhTrangSach: "Cũ",
      trangThai: true,
    },
    {
      idTheLoai: 5,
      maISBN: "978-1-4919-3725-1",
      tieuDe: "Learning Python",
      tacGia: "Mark Lutz",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2013-06-12",
      soLuong: 12,
      imageUrl: "https://example.com/python.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 6,
      maISBN: "978-0-13-475759-9",
      tieuDe: "Clean Code",
      tacGia: "Robert C. Martin",
      nhaXuatBan: "Prentice Hall",
      namXuatBan: "2008-08-11",
      soLuong: 15,
      imageUrl: "https://example.com/cleancode.png",
      tinhTrangSach: "Cũ",
      trangThai: false,
    },
    {
      idTheLoai: 7,
      maISBN: "978-1-118-67938-3",
      tieuDe: "Big Data",
      tacGia: "Viktor Mayer-Schönberger",
      nhaXuatBan: "Eamon Dolan/Houghton Mifflin Harcourt",
      namXuatBan: "2013-03-05",
      soLuong: 4,
      imageUrl: "https://example.com/bigdata.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 8,
      maISBN: "978-1-59327-424-5",
      tieuDe: "Automate the Boring Stuff with Python",
      tacGia: "Al Sweigart",
      nhaXuatBan: "No Starch Press",
      namXuatBan: "2015-04-14",
      soLuong: 9,
      imageUrl: "https://example.com/automate.png",
      tinhTrangSach: "Cũ",
      trangThai: false,
    },
    {
      idTheLoai: 9,
      maISBN: "978-1-118-94804-7",
      tieuDe: "Machine Learning for Absolute Beginners",
      tacGia: "Oliver Theobald",
      nhaXuatBan: "Independently published",
      namXuatBan: "2017-04-21",
      soLuong: 11,
      imageUrl: "https://example.com/machinelearning.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 10,
      maISBN: "978-1-491-97824-5",
      tieuDe: "JavaScript: The Good Parts",
      tacGia: "Douglas Crockford",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2008-05-15",
      soLuong: 14,
      imageUrl: "https://example.com/js_goodparts.png",
      tinhTrangSach: "Cũ",
      trangThai: false,
    },
    {
      idTheLoai: 11,
      maISBN: "978-0-13-235088-4",
      tieuDe: "The Pragmatic Programmer",
      tacGia: "Andrew Hunt",
      nhaXuatBan: "Addison-Wesley Professional",
      namXuatBan: "1999-10-20",
      soLuong: 20,
      imageUrl: "https://example.com/pragmatic.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 12,
      maISBN: "978-1-61729-413-6",
      tieuDe: "Spring in Action",
      tacGia: "Craig Walls",
      nhaXuatBan: "Manning Publications",
      namXuatBan: "2018-10-05",
      soLuong: 7,
      imageUrl: "https://example.com/spring.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 13,
      maISBN: "978-0-596-52068-7",
      tieuDe: "Linux Pocket Guide",
      tacGia: "Daniel J. Barrett",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2004-05-15",
      soLuong: 18,
      imageUrl: "https://example.com/linux.png",
      tinhTrangSach: "Cũ",
      trangThai: true,
    },
    {
      idTheLoai: 14,
      maISBN: "978-0-262-03384-8",
      tieuDe: "Artificial Intelligence: A Modern Approach",
      tacGia: "Stuart Russell",
      nhaXuatBan: "Pearson",
      namXuatBan: "2009-12-11",
      soLuong: 10,
      imageUrl: "https://example.com/ai.png",
      tinhTrangSach: "Mới",
      trangThai: false,
    },
    {
      idTheLoai: 15,
      maISBN: "978-1-4919-0265-3",
      tieuDe: "Fluent Python",
      tacGia: "Luciano Ramalho",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2015-07-21",
      soLuong: 13,
      imageUrl: "https://example.com/fluentpython.png",
      tinhTrangSach: "Mới",
      trangThai: true,
    },
    {
      idTheLoai: 16,
      maISBN: "978-0-07-174854-1",
      tieuDe: "Advanced Programming in the UNIX Environment",
      tacGia: "W. Richard Stevens",
      nhaXuatBan: "Addison-Wesley Professional",
      namXuatBan: "2013-05-24",
      soLuong: 3,
      imageUrl: "https://example.com/unix.png",
      tinhTrangSach: "Cũ",
      trangThai: true,
    },
    {
      idTheLoai: 17,
      maISBN: "978-1-4919-0130-4",
      tieuDe: "Python for Data Analysis",
      tacGia: "Wes McKinney",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2017-09-25",
      soLuong: 12,
      imageUrl: "https://example.com/dataanalysis.png",
      tinhTrangSach: "Mới",
      trangThai: false,
    },
    {
      idTheLoai: 18,
      maISBN: "978-1-59327-603-4",
      tieuDe: "Python Crash Course",
      tacGia: "Eric Matthes",
      nhaXuatBan: "No Starch Press",
      namXuatBan: "2015-11-01",
      soLuong: 8,
      imageUrl: "https://example.com/crashcourse.png",
      tinhTrangSach: "Cũ",
      trangThai: true,
    },
    {
      idTheLoai: 19,
      maISBN: "978-1-59327-757-4",
      tieuDe: "Head First Java",
      tacGia: "Kathy Sierra",
      nhaXuatBan: "O'Reilly Media",
      namXuatBan: "2005-02-09",
      soLuong: 6,
      imageUrl: "https://example.com/headfirstjava.png",
      tinhTrangSach: "Mới",
      trangThai: false,
    },
    {
      idTheLoai: 20,
      maISBN: "978-1-118-39560-3",
      tieuDe: "The Art of Computer Programming",
      tacGia: "Donald Knuth",
      nhaXuatBan: "Addison-Wesley",
      namXuatBan: "1968-01-01",
      soLuong: 2,
      imageUrl: "https://example.com/artofprogramming.png",
      tinhTrangSach: "Cũ",
      trangThai: true,
    },
  ];

  const columns = [
    {
      name: "ID",
      selector: (row) => row.idTheLoai,
      width: "60px",
    },
    { name: "Mã ISBN", selector: (row) => row.maISBN, sortable: true },
    { name: "Tiêu Đề", selector: (row) => row.tieuDe, sortable: true },
    { name: "Tác Giả", selector: (row) => row.tacGia, sortable: true },
    { name: "Nhà Xuất Bản", selector: (row) => row.nhaXuatBan, sortable: true },
    { name: "Năm Xuất Bản", selector: (row) => row.namXuatBan, sortable: true },
    {
      name: "Số Lượng",
      selector: (row) => row.soLuong,
      sortable: true,
      textAlign: "right",
      width: "120px",
    },
    {
      name: "Hình Ảnh",
      cell: (row) => (
        <img
          src={row.imageUrl}
          alt={row.tieuDe}
          style={{ width: "50px", height: "50px" }}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "80px",
    },
    {
      name: "Tình Trạng Sách",
      selector: (row) => row.tinhTrangSach,
      sortable: true,
    },
    {
      name: "Trạng Thái",
      cell: (row) => (row.trangThai ? "Có sẵn" : "Không có sẵn"),
      sortable: true,
    },
    {
      name: "Hành Động",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="px-1.5 py-1 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Sửa
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="px-1.5 py-1 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-700"
          >
            Xóa
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const filtered = data.filter(
      (item) =>
        item.idTheLoai.toString().includes(searchTerm) ||
        item.maISBN.toLowerCase().includes(searchTerm) ||
        item.tieuDe.toLowerCase().includes(searchTerm) ||
        item.tacGia.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const openAddModal = () => setIsAddOpen(true);
  const closeAddModal = () => setIsAddOpen(false);
  const openUpdateModal = () => setIsUpdateOpen(true);
  const closeUpdateModal = () => setIsUpdateOpen(false);

  // Hàm xử lý Sửa
  const handleEdit = (row) => {
    setSelectedDocument(row); // Set the selected user
    openUpdateModal();
    alert(`Sửa thông tin: ${row.id}`);
  };

  // Hàm xử lý Xóa
  const handleDelete = (row) => {
    const confirmDelete = window.confirm(`Bạn có chắc muốn xóa ${row.name}?`);
    if (confirmDelete) {
      alert(`Đã xóa ${row.name}`);
      // Thực hiện xóa khỏi dữ liệu
    }
  };

  return (
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Quản lý tài liệu
      </h1>
      <div className="flex flex-col mt-[10px] space-y-5">
        <div className="justify-between h-[80px] w-full bg-white rounded-md flex">
          <div className="flex justify-center">
            <div
              className="flex justify-center"
              onClick={() => {
                openAddModal();
              }}
            >
              <AddButton title="Thêm tài liệu  " />
            </div>
            <div
              className="flex justify-center"
              onClick={() => toast.info("Chức năng đang phát triển")}
            >
              <ButtonRules />
            </div>
          </div>
          <div class="w-[590px] h-[45px] bg-bgr-down-light rounded-[20px] border-none border-[#a4a5a5] my-auto mx-0 flex mr-4">
            <img
              src={IconTimKiem}
              alt=""
              className="w-[22px] h-[22px] opacity-60 my-auto ml-[15px]"
            />
            <input
              value={search}
              onChange={handleSearch}
              className="w-full h-full bg-transparent rounded-[10px] border-none outline-none px-3"
              placeholder="Tìm kiếm tài liệu"
              type="text"
            />
          </div>
        </div>

        <AddDocument isOpen={isAddOpen} onClose={closeAddModal} />
        <UpdateDocument
          isOpen={isUpdateOpen}
          onClose={closeUpdateModal}
          documentData={selectedDocument}
        />

        <div
          className={`w-full h-full p-4 bg-white rounded-lg transition-all duration-500 ease-in-out transform shadow-lg ${
            isAddOpen ? "translate-y-4" : "translate-y-0"
          }`}
        >
          <h2 className="text-xl font-semibold text-color-text-light mb-4">
            Danh sách tài liệu
          </h2>
          <DataTable
            columns={columns}
            data={filteredData}
            customStyles={customStyles}
            pagination
            highlightOnHover
            pointerOnHover
            responsive
            paginationPerPage={10}
            className="border rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default DocumentManager;
