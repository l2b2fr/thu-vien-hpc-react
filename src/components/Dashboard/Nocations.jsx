import React from "react";
import Nocation from "../../assets/icons/menus/notification-bell.png";

function Nocations() {

  return (
    <>
      <div className="w-[80vh] max-w-md h-auto bg-white mt-6 rounded-lg shadow-lg p-6 mx-auto overflow-hidden hover:cursor-pointer hover:scale-105 transition-transform duration-300 border border-gray-300">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-100 text-white rounded-full p-3">
            <img src={Nocation} alt="" srcset="" className="h-5 w-6 object-cover" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800">Thông báo</h2>
            <p className="mt-2 text-gray-600">
              Đây là nội dung của thông báo. Bạn có thể thêm thông tin chi tiết
              ở đây để người dùng hiểu rõ hơn về thông báo này.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nocations;
