import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content bg-green-600 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className="mt-5 bg-red-500 p-1 rounded-lg" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
