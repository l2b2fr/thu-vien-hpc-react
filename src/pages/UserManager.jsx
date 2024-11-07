import React, { useState, useEffect } from "react";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import DataTable from "react-data-table-component";
import { toast } from "sonner";
const data = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
  { id: 2, name: "Jane Doe", email: "jane@example.com", age: 25 },
  { id: 3, name: "Mike Doe", email: "mike@example.com", age: 35 },
  { id: 4, name: "Emily Chen", email: "emily@example.com", age: 28 },
  { id: 5, name: "David Lee", email: "david@example.com", age: 32 },
  { id: 6, name: "Sarah Taylor", email: "sarah@example.com", age: 29 },
  { id: 7, name: "Kevin Brown", email: "kevin@example.com", age: 31 },
  { id: 8, name: "Lisa Nguyen", email: "lisa@example.com", age: 26 },
  { id: 9, name: "Michael Davis", email: "michael@example.com", age: 33 },
  { id: 10, name: "Jessica Martin", email: "jessica@example.com", age: 27 },
  { id: 11, name: "Olivia White", email: "olivia@example.com", age: 24 },
  {
    id: 12,
    name: "Alexander Smith",
    email: "alexander@example.com",
    age: 34,
  },
  {
    id: 13,
    name: "Isabella Johnson",
    email: "isabella@example.com",
    age: 30,
  },
];

// Định nghĩa cột
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    width: "100px",
  },
  {
    name: "Tên",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Tuổi",
    selector: (row) => row.age,
    sortable: true,
    right: true,
  },
  {
    name: "Hành Động",
    cell: (row) => (
      <div className="flex space-x-2 w-full justify-center items-center">
        <button
          onClick={() => handleEdit(row)}
          className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Sửa
        </button>
        <button
          onClick={() => handleDelete(row)}
          className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Xóa
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    width: "150px", // Adjusted to make the column wider
  },
];

// Hàm xử lý Sửa
const handleEdit = (row) => {
  alert(`Sửa thông tin: ${row.name}`);
};

// Hàm xử lý Xóa
const handleDelete = (row) => {
  const confirmDelete = window.confirm(`Bạn có chắc muốn xóa ${row.name}?`);
  if (confirmDelete) {
    alert(`Đã xóa ${row.name}`);
    // Thực hiện xóa khỏi dữ liệu
  }
};

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

function UserManager() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Hàm tìm kiếm
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Quản lý người dùng
      </h1>
      <div className="flex flex-col mt-[10px] space-y-5">
        <div className="justify-between h-[80px] w-full bg-white rounded-md flex">
          <div className="flex justify-center">
            <div
              className="flex justify-center"
              onClick={() => toast.info("Chức năng đang phát triển")}
            >
              <AddButton title="Thêm người dùng" />
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
              placeholder="Tìm kiếm người dùng"
              type="text"
            />
          </div>
        </div>

        <div className="w-full h-full p-4 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-color-text-light mb-4">
            Danh Sách Người Dùng
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

export default UserManager;
