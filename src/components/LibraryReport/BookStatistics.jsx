import React from "react";
import ReactECharts from "echarts-for-react";

const BookStatistics = () => {
  // Dữ liệu biểu đồ: Số lượng sách theo từng thể loại
  const options = {
    title: {
      text: "Thống Kê Số Lượng Sách Theo Thể Loại",
      left: "center",
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#263238",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "5%",
      data: ["Sách Lịch Sử", "Sách Khoa Học", "Sách Văn Học", "Sách Nghệ Thuật"],
      textStyle: {
        color: "#263238",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["2018", "2019", "2020", "2021", "2022", "2023"],
      axisLabel: {
        textStyle: {
          color: "#263238",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          color: "#263238",
        },
      },
    },
    series: [
      {
        name: "Sách Lịch Sử",
        type: "bar", // Sử dụng bar chart
        data: [150, 180, 160, 200, 220, 240],
        itemStyle: {
          color: "#FF6347", // Màu sắc cho cột
          opacity: 1, // Loại bỏ độ mờ
        },
      },
      {
        name: "Sách Khoa Học",
        type: "bar", // Sử dụng bar chart
        data: [100, 130, 120, 140, 160, 180],
        itemStyle: {
          color: "#32CD32", // Màu sắc cho cột
          opacity: 1, // Loại bỏ độ mờ
        },
      },
      {
        name: "Sách Văn Học",
        type: "bar", // Sử dụng bar chart
        data: [180, 200, 220, 250, 270, 300],
        itemStyle: {
          color: "#1E90FF", // Màu sắc cho cột
          opacity: 1, // Loại bỏ độ mờ
        },
      },
      {
        name: "Sách Nghệ Thuật",
        type: "bar", // Sử dụng bar chart
        data: [90, 110, 130, 150, 170, 200],
        itemStyle: {
          color: "#FFD700", // Màu sắc cho cột
          opacity: 1, // Loại bỏ độ mờ
        },
      },
    ],
  };

  // Dữ liệu bảng thống kê số lượng sách theo các thể loại
  const tableData = [
    { title: "Sách Lịch Sử", total: 150, available: 120, borrowed: 30 },
    { title: "Sách Khoa Học", total: 130, available: 100, borrowed: 30 },
    { title: "Sách Văn Học", total: 200, available: 170, borrowed: 30 },
    { title: "Sách Nghệ Thuật", total: 110, available: 80, borrowed: 30 },
  ];

  return (
    <div className="p-6">
      {/* Biểu đồ Cột */}
      <div id="chart">
        <ReactECharts option={options} style={{ height: "600px", width: "100%" }} />
      </div>

      {/* Bảng Thống Kê Số Lượng Sách */}
      <div className="overflow-x-auto mt-8 rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Tên Sách</th>
              <th className="px-6 py-3 text-left">Tổng Số Lượng</th>
              <th className="px-6 py-3 text-left">Sách Có Sẵn</th>
              <th className="px-6 py-3 text-left">Sách Đang Mượn</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{data.title}</td>
                <td className="px-6 py-4">{data.total}</td>
                <td className="px-6 py-4">{data.available}</td>
                <td className="px-6 py-4">{data.borrowed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookStatistics;
