import React from "react";
import ReactECharts from "echarts-for-react";

const FinancialStatistics = () => {
  // Dữ liệu biểu đồ: Doanh thu, Chi phí và Lãi/Lỗ qua các tháng
  const options = {
    title: {
      text: "Thống Kê Tài Chính - Doanh Thu, Chi Phí và Lãi/Lỗ",
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
      data: ["Doanh Thu", "Chi Phí", "Lãi/Lỗ"],
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
      data: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
      axisLabel: {
        textStyle: {
          color: "#263238",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} triệu VND",
        textStyle: {
          color: "#263238",
        },
      },
    },
    series: [
      {
        name: "Doanh Thu",
        type: "line", // Biểu đồ đường
        data: [100, 120, 150, 180, 200, 230],
        itemStyle: {
          color: "#FF6347", // Màu đỏ cho Doanh Thu
        },
      },
      {
        name: "Chi Phí",
        type: "line",
        data: [50, 60, 80, 100, 120, 140],
        itemStyle: {
          color: "#32CD32", // Màu xanh cho Chi Phí
        },
      },
      {
        name: "Lãi/Lỗ",
        type: "line",
        data: [50, 60, 70, 80, 80, 90],
        itemStyle: {
          color: "#1E90FF", // Màu xanh dương cho Lãi/Lỗ
        },
      },
    ],
  };

  // Dữ liệu bảng thống kê tài chính
  const tableData = [
    { month: "Tháng 1", revenue: 100, expense: 50, profitLoss: 50 },
    { month: "Tháng 2", revenue: 120, expense: 60, profitLoss: 60 },
    { month: "Tháng 3", revenue: 150, expense: 80, profitLoss: 70 },
    { month: "Tháng 4", revenue: 180, expense: 100, profitLoss: 80 },
    { month: "Tháng 5", revenue: 200, expense: 120, profitLoss: 80 },
    { month: "Tháng 6", revenue: 230, expense: 140, profitLoss: 90 },
  ];

  return (
    <div className="p-6">
      {/* Biểu đồ Line Chart */}
      <div id="chart" className="mb-8">
        <ReactECharts
          option={options}
          style={{ height: "500px", width: "100%" }}
        />
      </div>

      {/* Bảng Thống Kê Tài Chính */}
      <div className="overflow-x-auto mt-8 rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Tháng</th>
              <th className="px-6 py-3 text-left">Doanh Thu (triệu VND)</th>
              <th className="px-6 py-3 text-left">Chi Phí (triệu VND)</th>
              <th className="px-6 py-3 text-left">Lãi/Lỗ (triệu VND)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{data.month}</td>
                <td className="px-6 py-4">{data.revenue}</td>
                <td className="px-6 py-4">{data.expense}</td>
                <td className="px-6 py-4">{data.profitLoss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialStatistics;
