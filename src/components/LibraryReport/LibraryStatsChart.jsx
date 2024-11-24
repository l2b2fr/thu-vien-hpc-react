import React from "react";
import ReactApexChart from "react-apexcharts";

const LibraryStatsChart = () => {
  const options = {
    series: [
      {
        data: [
          { x: "2018", y: [1500, 800] }, // Sách Mượn: 1500, Sách Trả: 800
          { x: "2019", y: [1800, 1000] },
          { x: "2020", y: [1600, 1200] },
          { x: "2021", y: [2000, 1500] },
          { x: "2022", y: [2200, 1700] },
          { x: "2023", y: [2240, 1400] },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: "15%", // Tăng độ dày của cột
        dumbbellColors: [["#FF4560", "#00E396"]], // Màu sắc cho Sách Mượn và Sách Trả
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Sách Mượn", "Sách Trả"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#00E396"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
      title: {
        text: "Năm",
      },
    },
    yaxis: {
      title: {
        // text: "Số Lượng Sách",
      },
    },
    title: {
      text: "Thống Kê Mượn và Trả Sách Thư Viện",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };

  // Fake data for the table
  const tableData = [
    { year: "2018", borrowed: 1500, returned: 800 },
    { year: "2019", borrowed: 1800, returned: 1000 },
    { year: "2020", borrowed: 1600, returned: 1200 },
    { year: "2021", borrowed: 2000, returned: 1500 },
    { year: "2022", borrowed: 2200, returned: 1700 },
    { year: "2023", borrowed: 2400, returned: 2000 },
  ];

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={options.series}
          type="rangeBar"
          height={500}
          width="100%"
        />
      </div>

      {/* Bảng hiển thị thống kê */}
      <div className="overflow-x-auto mt-8 rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-color-text-light text-white rounded-lg">
            <tr>
              <th className="px-6 py-3 text-left">Năm</th>
              <th className="px-6 py-3 text-left">Sách Mượn</th>
              <th className="px-6 py-3 text-left">Sách Trả</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{data.year}</td>
                <td className="px-6 py-4">{data.borrowed}</td>
                <td className="px-6 py-4">{data.returned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryStatsChart;
