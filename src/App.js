import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "./pages/LoginForm";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import Layout from "./components/layout/LayoutDashboard";
import LayoutAuth from "./components/layout/LayoutAuth";
import { Toaster } from "sonner";
import Dashboard from "./pages/Dashboard";
import UserManager from "./pages/UserManager";
import DocumentManager from "./pages/DocumentManager";
import BorrowReserveManager from "./pages/BorrowReserveManager";
import SoftwareInfo from "./pages/SoftwareInfo";
import LibraryReport from "./pages/LibraryReport";
import ReturnBookManager from "./pages/ReturnBookManager";

function App() {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem("isOpen");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    const savedState = localStorage.getItem("isOpen");
    setIsOpen(savedState !== null ? JSON.parse(savedState) : true);
  }, []);

  return (
    <>
      <Toaster position="top-right" richColors />
      <Router>
        <div>
          {/* Cấu hình các tuyến đường (routes) */}
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <LayoutAuth>
                    <LoginForm />
                  </LayoutAuth>
                </>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <>
                  <LayoutAuth>
                    <ForgotPasswordForm />
                  </LayoutAuth>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </>
              }
            />
            <Route
              path="/lap-the-doc-gia"
              element={
                <>
                  <Layout>
                    <UserManager />
                  </Layout>
                </>
              }
            />
            <Route
              path="/tiep-nhan-sach-moi"
              element={
                <>
                  <Layout>
                    <DocumentManager />
                  </Layout>
                </>
              }
            />
            <Route
              path="/tra-cuu-sach"
              element={
                <>
                  <Layout>
                    <h1 className="text-center font-bold text-7xl w-full">
                      Tra cứu sách
                    </h1>
                  </Layout>
                </>
              }
            />
            <Route
              path="/cho-muon-sach"
              element={
                <>
                  <Layout>
                    <BorrowReserveManager />
                  </Layout>
                </>
              }
            />
            <Route
              path="/quan-ly-tra-sach"
              element={
                <>
                  <Layout>
                    <ReturnBookManager />
                  </Layout>
                </>
              }
            />
            <Route
              path="/lap-phieu-thu-tien-phat"
              element={
                <>
                  <Layout>
                    <h1 className="text-center font-bold text-7xl w-full">
                      Lập phiếu thu tiền phạt
                    </h1>
                  </Layout>
                </>
              }
            />
            <Route
              path="/lap-bao-cao"
              element={
                <>
                  <Layout>
                    <LibraryReport />
                  </Layout>
                </>
              }
            />
            <Route
              path="/thong-tin-phan-mem"
              element={
                <>
                  <Layout>
                    <SoftwareInfo />
                  </Layout>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
