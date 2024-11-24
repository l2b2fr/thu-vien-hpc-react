import React from "react";
import ReactECharts from "echarts-for-react";

const ReaderStatistics = () => {
  // Dữ liệu biểu đồ: Số lượng độc giả theo trạng thái
  const options = {
    title: {
      text: "Thống Kê Số Lượng Độc Giả Theo Trạng Thái",
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
      data: ["Mới", "Hoạt Động", "Ngừng Hoạt Động"],
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
        name: "Mới",
        type: "bar", // Biểu đồ dạng cột
        data: [50, 70, 90, 110, 130, 150],
        itemStyle: {
          color: "#FF6347", // Màu đỏ cho trạng thái Mới
        },
      },
      {
        name: "Hoạt Động",
        type: "bar",
        data: [150, 180, 200, 230, 250, 270],
        itemStyle: {
          color: "#32CD32", // Màu xanh cho trạng thái Hoạt Động
        },
      },
      {
        name: "Ngừng Hoạt Động",
        type: "bar",
        data: [20, 30, 50, 60, 70, 80],
        itemStyle: {
          color: "#1E90FF", // Màu xanh dương cho trạng thái Ngừng Hoạt Động
        },
      },
    ],
  };

  // Dữ liệu bảng thống kê số lượng độc giả
  const tableData = [
    {
      name: "Nguyễn Văn A",
      type: "Thường",
      birthDate: "1995-10-10",
      status: "Hoạt Động",
      registerDate: "2020-05-15",
    },
    {
      name: "Trần Thị B",
      type: "VIP",
      birthDate: "1990-03-12",
      status: "Mới",
      registerDate: "2023-02-20",
    },
    {
      name: "Phạm Minh C",
      type: "Thường",
      birthDate: "1985-07-25",
      status: "Ngừng Hoạt Động",
      registerDate: "2019-08-10",
    },
    {
      name: "Lê Thanh D",
      type: "VIP",
      birthDate: "1998-11-05",
      status: "Hoạt Động",
      registerDate: "2021-11-11",
    },
  ];

  return (
    <div className="p-6">
      <div id="chart">
        <ReactECharts
          option={options}
          style={{ height: "600px", width: "100%" }}
        />
      </div>

      <div className="overflow-x-auto mt-8 rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Tên Độc Giả</th>
              <th className="px-6 py-3 text-left">Loại Độc Giả</th>
              <th className="px-6 py-3 text-left">Ngày Sinh</th>
              <th className="px-6 py-3 text-left">Trạng Thái</th>
              <th className="px-6 py-3 text-left">Ngày Lập Thẻ</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">{data.type}</td>
                <td className="px-6 py-4">{data.birthDate}</td>
                <td className="px-6 py-4">{data.status}</td>
                <td className="px-6 py-4">{data.registerDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReaderStatistics;
