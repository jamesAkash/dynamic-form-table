import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <Wrapper>
      <div className="modal">
        <h1>Add a new Task</h1>
        <form>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="finished">Finished</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
              <option value="quit">Quit</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;

export default Form;
