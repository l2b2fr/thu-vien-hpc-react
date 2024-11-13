import React from "react";

function ViewModalReturnBook({ isOpen, onClose, selectedData }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>Phiếu trả sách</h2>
          <p>
            <strong>ID:</strong> {selectedData.id}
          </p>
          <p>
            <strong>Tên người dùng:</strong> {selectedData.name}
          </p>
          <p>
            <strong>Sách đã mượn:</strong> {selectedData.bookName}
          </p>
          <p>
            <strong>Ngày mượn:</strong> {selectedData.ngayMuon}
          </p>
          <p>
            <strong>Ngày trả dự kiến:</strong> {selectedData.ngayTraDuKien}
          </p>
          <p>
            <strong>Ngày trả thực tế:</strong> {selectedData.ngayTraThucTe}
          </p>
          <p>
            <strong>Phí trễ hạn:</strong> {selectedData.phiTreHan}
          </p>
          <button onClick={onClose}>Đóng</button>
        </div>
      </div>
    </>
  );
}

export default ViewModalReturnBook;
