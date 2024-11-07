import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BieuDoThuVien = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const dom = chartRef.current;
    const myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    const option = {
      title: {
        text: "Thống Kê Hàng Tuần Của Thư Viện",
        left: "center",
        top: 20,
        textStyle: {
          color: "#333",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["Sách Mượn", "Sách Trả", "Khách Tham Quan"],
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Thứ Hai",
            "Thứ Ba",
            "Thứ Tư",
            "Thứ Năm",
            "Thứ Sáu",
            "Thứ Bảy",
            "Chủ Nhật",
          ],
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Sách",
          min: 0,
          max: 300,
          interval: 50,
          axisLabel: {
            formatter: "{value} quyển",
          },
        },
        {
          type: "value",
          name: "Khách",
          min: 0,
          max: 500,
          interval: 100,
          axisLabel: {
            formatter: "{value} người",
          },
        },
      ],
      series: [
        {
          name: "Sách Mượn",
          type: "bar",
          tooltip: {
            valueFormatter: (value) => `${value} quyển`,
          },
          data: [50, 70, 60, 100, 90, 130, 150],
        },
        {
          name: "Sách Trả",
          type: "bar",
          tooltip: {
            valueFormatter: (value) => `${value} quyển`,
          },
          data: [30, 50, 40, 60, 80, 110, 120],
        },
        {
          name: "Khách Tham Quan",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: (value) => `${value} người`,
          },
          data: [200, 250, 180, 220, 300, 350, 400],
        },
      ],
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      className="w-full h-full flex justify-center items-center pt-5"
    />
  );
};

export default BieuDoThuVien;
