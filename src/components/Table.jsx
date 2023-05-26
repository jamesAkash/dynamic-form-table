import React from "react";
import styled from "styled-components";

const Table = () => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>Finish useContext next</td>
            <td>
              <span>Live</span>
            </td>
            <td>
              <span></span>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Table;
