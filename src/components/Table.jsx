import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Table = () => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>Finish useContext next</td>
            <td>
              <span className="label label-finished">Finished</span>
            </td>
            <td>
              <span className="actions">
                <DeleteIcon className="delete-btn" />
                <EditIcon />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  table {
    display: block;
    overflow: hidden;
    table-layout: auto;
    border-collapse: collapse;
    box-shadow: 0px 10px 10px #ccc;
    border-radius: 10px;
    white-space: nowrap;
    max-width: 80%;
    margin: 0 auto;
    overflow-x: auto;
  }

  thead {
    background-color: #ccc;
    color: #222;
  }

  table th,
  table td {
    padding: 0.8rem;
  }

  table td {
    border-top: 0.5px solid #ddd;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  tbody tr:hover {
    background-color: #dedede;
  }

  .expand {
    width: 100%;
  }

  .label {
    border-radius: 3px;
    padding: 0.3rem;
    color: white;
  }

  .label-finished {
    background-color: #42a942;
  }

  .label-pending {
    background-color: yellow;
  }

  .label-postpone {
    background-color: #cc0101;
  }

  .label-draft {
    background-color: #777;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .actions svg {
    cursor: pointer;
  }

  .delete-btn {
    color: #cc0101;
  }
`;

export default Table;
