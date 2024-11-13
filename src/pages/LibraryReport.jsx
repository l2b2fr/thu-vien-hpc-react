import React from "react";
import AddButton from "../components/AddButton";
import ButtonRules from "../components/ButtonRules";
import { toast } from "sonner";

const LibraryReport = () => {
  return (
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Thống kê báo cáo
      </h1>
      <div className="justify-between h-[80px] w-full bg-white rounded-md flex space-x-5 px-4">
        <button className="bg-blue-500 text-white px-3 py-2 my-auto mx-0  rounded-lg shadow hover:bg-blue-600">
          Thống kê số lượng sách
        </button>
        <button className="bg-green-500 text-white px-4 py-2 my-auto mx-0  rounded-lg shadow hover:bg-green-600">
          Thống kê số lượng độc giả
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 my-auto mx-0  rounded-lg shadow hover:bg-yellow-600">
          Thống kê mượn và trả sách
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 my-auto mx-0  rounded-lg shadow hover:bg-purple-600">
          Báo cáo sách trả trễ
        </button>
        <button className="bg-teal-500 text-white px-4 py-2 my-auto mx-0  rounded-lg shadow hover:bg-teal-600">
          Thống kê tài chính
        </button>
      </div>

      {/* Report Section */}
      <section className="h-full bg-white p-4 rounded-lg shadow-lg mt-5">
        <h2 className="text-2xl font-semibold text-color-text-light mb-6">
          Chi tiết Báo Cáo
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  Thể Loại
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  Số Lượng Độc Giả
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  Lượt Mượn
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  Lượt Trả
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Dữ liệu báo cáo động */}
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  Sách Khoa Học
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  100
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  80
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  75
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  Sách Văn Học
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  150
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  120
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                  110
                </td>
              </tr>
            </tbody>
          </table>

          <div className="w-full text-center mt-10 flex justify-end">
            <button className="bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600">
              Xuất Báo Cáo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryReport;
