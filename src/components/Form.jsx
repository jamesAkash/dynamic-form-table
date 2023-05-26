import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ closeModal, addRow }) => {
  const [formState, setFormState] = useState({
    task: "",
    description: "",
    status: "finished",
  });

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.task && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    addRow(formState);
    closeModal();
  };
  return (
    <Wrapper>
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal">
          <h1>Add a new Task</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                name="task"
                value={formState.task}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={formState.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                value={formState.status}
                onChange={handleChange}
              >
                <option value="finished">Finished</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="quit">Quit</option>
              </select>
            </div>
            {errors && (
              <div className="error">{`Please include: ${errors}`}</div>
            )}
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal-container {
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal {
    border-radius: 5px;
    padding: 2rem;
    background-color: #fff;
    width: 25em;
  }

  .modal .btn {
    display: block;
    margin: auto;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-group input,
  .form-group textArea,
  .form-group select {
    border: 1px solid black;
    border-radius: 0.3rem;
    padding: 0.3rem;
    font-size: 1rem;
  }

  .form-group label {
    margin-bottom: 0.2rem;
  }

  .error {
    text-align: center;
    margin-bottom: 10px;
    background-color: coral;
    border-radius: 5px;
    padding: 3px;
  }
`;

export default Form;
