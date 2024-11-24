import React, { useState } from "react";
import { toast } from "sonner";
import LibraryStatsChart from "../components/LibraryReport/LibraryStatsChart";
import BookStatistics from "../components/LibraryReport/BookStatistics";
import ReaderStatistics from "../components/LibraryReport/ReaderStatistics";
import FinancialStatistics from "../components/LibraryReport/FinancialStatistics";
import LateBookReport from "../components/LibraryReport/LateBookReport";

const LibraryReport = () => {
  const [reportType, setReportType] = useState("bookQuantity");

  const loadReportData = (type) => {
    setReportType(type);
  };

  return (
    <>
      <h1 className="text-[30px] font-bold text-color-text-light">
        Thống kê báo cáo
      </h1>
      <div className="justify-between h-[80px] w-full bg-white rounded-md flex space-x-5 px-4">
        <button
          onClick={() => loadReportData("bookQuantity")}
          className="bg-blue-500 text-white px-3 py-2 my-auto mx-0 rounded-lg shadow hover:bg-blue-600"
        >
          Thống kê số lượng sách
        </button>
        <button
          onClick={() => loadReportData("readerQuantity")}
          className="bg-green-500 text-white px-4 py-2 my-auto mx-0 rounded-lg shadow hover:bg-green-600"
        >
          Thống kê số lượng độc giả
        </button>
        <button
          onClick={() => loadReportData("borrowReturn")}
          className="bg-yellow-500 text-white px-4 py-2 my-auto mx-0 rounded-lg shadow hover:bg-yellow-600"
        >
          Thống kê mượn và trả sách
        </button>
        <button
          onClick={() => loadReportData("lateReport")}
          className="bg-purple-500 text-white px-4 py-2 my-auto mx-0 rounded-lg shadow hover:bg-purple-600"
        >
          Báo cáo sách trả trễ
        </button>
        <button
          onClick={() => loadReportData("financialReport")}
          className="bg-teal-500 text-white px-4 py-2 my-auto mx-0 rounded-lg shadow hover:bg-teal-600"
        >
          Thống kê tài chính
        </button>
      </div>

      <section className="h-auto bg-white p-4 rounded-lg shadow-lg mt-5">
        <h2 className="text-2xl font-semibold text-color-text-light mb-6">
          Chi tiết Báo Cáo
        </h2>

        {reportType === "bookQuantity" && (
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-xl text-gray-700">
              Số lượng sách
            </h3>
            <div className="my-4">
              <BookStatistics />
            </div>
          </div>
        )}

        {reportType === "readerQuantity" && (
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-xl text-gray-700">
              Số lượng độc giả
            </h3>
            <div className="my-4">
              <ReaderStatistics />
            </div>
          </div>
        )}

        {reportType === "borrowReturn" && (
          <div className="overflow-x-auto h-auto">
            <h3 className="font-semibold text-xl text-gray-700">
              Mượn và trả sách
            </h3>
            <div className="my-4 h-auto">
              <LibraryStatsChart />
            </div>
          </div>
        )}

        {reportType === "lateReport" && (
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-xl text-gray-700">
              Sách trả trễ
            </h3>
            <div className="my-4">
              <LateBookReport />
            </div>
          </div>
        )}

        {reportType === "financialReport" && (
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-xl text-gray-700">Tài chính</h3>
            <div className="my-4">
              <FinancialStatistics />
            </div>
          </div>
        )}

        <div className="w-full text-center mt-10 flex justify-end">
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600">
            Xuất Báo Cáo
          </button>
        </div>
      </section>
    </>
  );
};

export default LibraryReport;
