import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

// Modal content component
const ModalContent = ({ selectedColumns, handleCheckboxChange }) => (
  <div className="flex flex-col gap-2">
    {Object.keys(selectedColumns).map((column) => (
      <div key={column} className="flex gap-2">
        <input
          type="checkbox"
          name={column}
          id={column}
          checked={selectedColumns[column]}
          onChange={() => handleCheckboxChange(column)}
        />
        <label htmlFor={column}>{column}</label>
      </div>
    ))}
  </div>
);

const TableComponent = () => {
  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({
    Title: true,
    Categories: true,
    Price: true,
    Date: true,
    Author: true,
    Status: true,
    Action: true,
  });

  // Event handlers
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleCheckboxChange = (columnName) => {
    setSelectedColumns({
      ...selectedColumns,
      [columnName]: !selectedColumns[columnName],
    });
  };

  // Demo data
  const demoData = [
    {
      id: 1,
      Title: "Book 1",
      Categories: ["Fiction"],
      Price: 19.99,
      Date: "Feb 21",
      Author: "James",
      Status: "Available",
      Action: "Buy Now",
    },
    {
      id: 2,
      Title: "Book 2",
      Categories: ["Fiction"],
      Price: 14.99,
      Date: "Feb 22",
      Author: "John",
      Status: "Available",
      Action: "Buy Now",
    },
    {
      id: 3,
      Title: "Book 3",
      Categories: ["Fiction"],
      Price: 14.99,
      Date: "Feb 23",
      Author: "Alex",
      Status: "Available",
      Action: "Buy Now",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h3 className="text-2xl text-green-600 font-bold">TechnoFix Table</h3>
        <div>
          <button className="btn bg-green-600 btn-sm px-5" onClick={openModal}>
            Filter
          </button>
          {/* Modal component */}
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalContent
              selectedColumns={selectedColumns}
              handleCheckboxChange={handleCheckboxChange}
            />
          </Modal>
        </div>
      </div>

      {/* Table content */}
      <div className="w-fit table-area overflow-x-auto">
        <div className="flex gap-20 bg-green-600 text-white py-2 ">
          {Object.keys(selectedColumns).map(
            (column) =>
              selectedColumns[column] && (
                <h5 key={column} className="data-cell font-bold">
                  {column}
                </h5>
              )
          )}
        </div>
        {/* Render demo data for each selected column */}
        {demoData.map((item, index) => (
          <div
            key={item.id}
            className="flex gap-20 bg-gray-600 mt-5 text-white pl-2 pr-2"
          >
            {Object.keys(selectedColumns).map(
              (column) =>
                selectedColumns[column] && (
                  <p key={`${column}-${index}`} className="data-cell">
                    {item[column]}
                  </p>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
