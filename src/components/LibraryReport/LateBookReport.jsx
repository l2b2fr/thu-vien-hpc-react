import React from "react";
import ReactECharts from "echarts-for-react";

const LateBookReport = () => {
  // Dữ liệu biểu đồ: Sách Trả Trễ và Sách Trả Đúng Hạn
  const options = {
    title: {
      text: "Báo Cáo Sách Trả Trễ",
      left: "center",
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#263238",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Sách Trả Trễ", "Sách Trả Đúng Hạn"],
    },
    series: [
      {
        name: "Trả Trễ",
        type: "pie",
        radius: "50%",
        data: [
          { value: 30, name: "Sách Trả Trễ" },
          { value: 70, name: "Sách Trả Đúng Hạn" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  // Dữ liệu bảng thống kê các sách trả trễ
  const tableData = [
    {
      title: "Sách Lịch Sử",
      dueDate: "2024-10-10",
      returnDate: "2024-10-15",
      lateDays: 5,
    },
    {
      title: "Sách Khoa Học",
      dueDate: "2024-10-05",
      returnDate: "2024-10-07",
      lateDays: 2,
    },
    {
      title: "Sách Văn Học",
      dueDate: "2024-09-25",
      returnDate: "2024-10-02",
      lateDays: 7,
    },
    {
      title: "Sách Nghệ Thuật",
      dueDate: "2024-10-01",
      returnDate: "2024-10-06",
      lateDays: 5,
    },
  ];

  return (
    <div className="p-6">
      {/* Biểu đồ Pie Chart */}
      <div id="chart" className="mb-8">
        <ReactECharts
          option={options}
          style={{ height: "600px", width: "100%" }}
        />
      </div>

      {/* Bảng Báo Cáo Sách Trả Trễ */}
      <div className="overflow-x-auto mt-8 rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Tên Sách</th>
              <th className="px-6 py-3 text-left">Ngày Hạn Trả</th>
              <th className="px-6 py-3 text-left">Ngày Trả</th>
              <th className="px-6 py-3 text-left">Số Ngày Trả Trễ</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{data.title}</td>
                <td className="px-6 py-4">{data.dueDate}</td>
                <td className="px-6 py-4">{data.returnDate}</td>
                <td className="px-6 py-4">{data.lateDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LateBookReport;
