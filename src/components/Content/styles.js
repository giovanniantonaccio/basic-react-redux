import styled from "styled-components";

export const Container = styled.div`
  height: 90%;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #333;
    font-size: 60px;
  }

  button {
    padding: 10px;
    border-radius: 4px;
    margin: 10px;
    border: 1px solid #ccc;

    &:hover {
      background: #f94d6a;
    }
  }

  input {
    padding: 10px;
    text-align: center;
    width: 80px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;
