import React, { useState, useEffect } from "react";
import axios from "axios";
import IconTimKiem from "../assets/icons/menus/kinh-nup.png";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import DataTable from "react-data-table-component";
import { toast } from "sonner";
import ModalAddUser from "../components/UserManager/ModalAddUser";
import ModalUpdateUser from "../components/UserManager/ModalUpdateUser";
import { useNavigate } from "react-router-dom";

function UserManager() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get(
          "http://localhost:2004/api/user/getAllUser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data.users);
        setFilteredData(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Không thể tải dữ liệu người dùng.");
      }
    };

    fetchUsers();
  }, [isModalAddOpen, isModalUpdateOpen]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filtered = users.filter(
      (item) =>
        item.maNguoiDung.toLowerCase().includes(searchTerm) ||
        item.tenNguoiDung.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm) ||
        item.phone.includes(searchTerm) ||
        item.diaChi.toLowerCase().includes(searchTerm) ||
        item.queQuan.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const openAddModal = () => setIsModalAddOpen(true);
  const closeAddModal = () => setIsModalAddOpen(false);
  const openUpdateModal = () => setIsModalUpdateOpen(true);
  const closeUpdateModal = () => setIsModalUpdateOpen(false);

  const handleEdit = (row) => {
    setSelectedUser(row);
    openUpdateModal();
  };

  const handleDelete = async (row) => {
    const confirmDelete = window.confirm(
      `Bạn có chắc muốn xóa ${row.tenNguoiDung}?`
    );

    if (confirmDelete) {
      try {
        const res = await axios.delete(
          `http://localhost:2004/api/user/delete/${row.idNguoiDung}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );

        toast.success("Xóa người dùng thành công");
        navigate("/lap-the-doc-gia");
      } catch (error) {
        console.error("Failed to delete user:", error);
        toast.error(`Xóa ${row.tenNguoiDung} thất bại`);
      }
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.maNguoiDung,
      sortable: true,
      textAlign: "left",
      width: "100px",
    },
    {
      name: "Tên",
      selector: (row) => row.tenNguoiDung,
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
      name: "SĐT",
      selector: (row) => row.phone,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Địa chỉ",
      selector: (row) => row.diaChi,
      sortable: true,
      textAlign: "left",
    },
    {
      name: "Quê quán",
      selector: (row) => row.queQuan,
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
      width: "150px",
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

  return (
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Quản lý người dùng
      </h1>
      <div className="flex flex-col mt-[10px] space-y-5">
        <div className="justify-between h-[80px] w-full bg-white rounded-md flex">
          <div className="flex justify-center">
            <div className="flex justify-center" onClick={openAddModal}>
              <AddButton title="Thêm người dùng" />
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
        user={selectedUser}
      />
    </>
  );
}

export default UserManager;
