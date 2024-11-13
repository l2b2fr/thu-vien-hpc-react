import React from "react";

function SoftwareInfo() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen rounded-md my-3 shadow-lg">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Thông Tin Phần Mềm</h1>
        <p className="mt-2 text-color-text-light">
          Giải pháp tối ưu cho quản lý thư viện trường HPC
        </p>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-color-text-light">
          Giới Thiệu
        </h2>
        <p className="text-gray-700">
          Phần mềm quản lý thư viện HPC của chúng tôi giúp tự động hóa quy trình
          quản lý sách, khách hàng và đơn mượn trả. Được thiết kế với công nghệ
          tiên tiến, phần mềm dễ dàng sử dụng và mang lại hiệu quả cao trong
          quản lý.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-color-text-light mb-4">
          Tính Năng Nổi Bật
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Quản lý sách, độc giả và lịch sử mượn trả.</li>
          <li>Tìm kiếm và phân loại sách theo thể loại, tác giả, và ISBN.</li>
          <li>Theo dõi tình trạng sách và kiểm soát số lượng tồn kho.</li>
          <li>Báo cáo và thống kê hoạt động mượn trả sách.</li>
        </ul>
      </section>

      {/* System Requirements Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-color-text-light mb-4">
          Yêu Cầu Hệ Thống
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Hệ điều hành:</strong> Windows 10 hoặc cao hơn, macOS 10.15
            trở lên
          </li>
          <li>
            <strong>CPU:</strong> Intel i3 hoặc AMD tương đương
          </li>
          <li>
            <strong>RAM:</strong> 4GB (khuyến nghị 8GB)
          </li>
          <li>
            <strong>Dung lượng ổ đĩa:</strong> Tối thiểu 500MB trống
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-color-text-light">
        <p>© 2024 Công Ty Phần Mềm Lê Minh Nam.</p>
      </footer>
    </div>
  );
}

export default SoftwareInfo;
