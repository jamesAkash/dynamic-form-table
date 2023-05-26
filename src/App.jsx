import React, { useState } from "react";
import Table from "./components/Table";
import "./index.css";
import Form from "./components/Form";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      task: "task",
      description: "desc",
      status: "pending",
    },
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleSubmit = (row) => {
    row.id = rows.length + 1;
    setRows([...rows, row]);
  };

  return (
    <div className="app">
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <button className="btn" onClick={() => setModalOpen(!modalOpen)}>
        Add
      </button>
      {modalOpen && (
        <Form addRow={handleSubmit} closeModal={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
