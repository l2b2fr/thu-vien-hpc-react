import React, { useState, useEffect } from "react";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import DataTable from "react-data-table-component";
import { toast } from "sonner";
import ModalAddUser from "../components/UserManager/ModalAddUser";
import ModalUpdateUser from "../components/UserManager/ModalUpdateUser";

function UserManager() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      phone: "123456789",
      address: "123 Main St",
      status: "Đang mở",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      age: 25,
      phone: "987654321",
      address: "456 Elm St",
      status: "Đang đóng",
    },
    {
      id: 3,
      name: "Mike Doe",
      email: "mike@example.com",
      age: 35,
      phone: "111222333",
      address: "789 Oak St",
      status: "Đang mở",
    },
    {
      id: 4,
      name: "Emily Chen",
      email: "emily@example.com",
      age: 28,
      phone: "444555666",
      address: "012 Pine St",
      status: "Đang đóng",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david@example.com",
      age: 32,
      phone: "777888999",
      address: "345 Maple St",
      status: "Đang mở",
    },
    {
      id: 6,
      name: "Sarah Taylor",
      email: "sarah@example.com",
      age: 29,
      phone: "000111222",
      address: "678 Birch St",
      status: "Đang đóng",
    },
    {
      id: 7,
      name: "Kevin Brown",
      email: "kevin@example.com",
      age: 31,
      phone: "333444555",
      address: "901 Walnut St",
      status: "Đang mở",
    },
    {
      id: 8,
      name: "Lisa Nguyen",
      email: "lisa@example.com",
      age: 26,
      phone: "666777888",
      address: "234 Cedar St",
      status: "Đang đóng",
    },
    {
      id: 9,
      name: "Michael Davis",
      email: "michael@example.com",
      age: 33,
      phone: "999000111",
      address: "567 Pine St",
      status: "Đang mở",
    },
    {
      id: 10,
      name: "Jessica Martin",
      email: "jessica@example.com",
      age: 27,
      phone: "222333444",
      address: "890 Oak St",
      status: "Đang đóng",
    },
    {
      id: 11,
      name: "Olivia White",
      email: "olivia@example.com",
      age: 24,
      phone: "555666777",
      address: "123 Elm St",
      status: "Đang mở",
    },
    {
      id: 12,
      name: "Alexander Smith",
      email: "alexander@example.com",
      age: 34,
      phone: "888999000",
      address: "456 Birch St",
      status: "Đang đóng",
    },
    {
      id: 13,
      name: "Isabella Johnson",
      email: "isabella@example.com",
      age: 30,
      phone: "123456789",
      address: "789 Walnut St",
      status: "Đang mở",
    },
  ];
  // Định nghĩa cột
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
      textAlign: "left",
    },
    {
      name: "Tên",
      selector: (row) => row.name,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Tuổi",
      selector: (row) => row.age,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "SĐT",
      selector: (row) => row.phone,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Địa chỉ",
      selector: (row) => row.address,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Trạng thái",
      selector: (row) => row.status,
      sortable: true,
      textAlign: "left",
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
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Hàm tìm kiếm
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value;
    const filtered = data.filter(
      (item) =>
        item.id.toString().includes(searchTerm) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const openAddModal = () => setIsModalAddOpen(true);
  const closeAddModal = () => setIsModalAddOpen(false);
  const openUpdateModal = () => setIsModalUpdateOpen(true);
  const closeUpdateModal = () => setIsModalUpdateOpen(false);

  // Hàm xử lý Sửa
  const handleEdit = (row) => {
    setSelectedUser(row); // Set the selected user
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
        Quản lý người dùng
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

        <div className="w-full h-full p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-color-text-light mb-4">
            Danh sách người dùng
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
      <ModalAddUser isOpen={isModalAddOpen} onClose={closeAddModal} />
      <ModalUpdateUser
        isOpen={isModalUpdateOpen}
        onClose={closeUpdateModal}
        user={selectedUser} // Pass selected user to modal
      />
    </>
  );
}

export default UserManager;
