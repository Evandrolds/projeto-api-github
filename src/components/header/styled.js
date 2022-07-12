import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  
  h2 {
    margin-right: 10px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
  }
  input {
    border: 1px solid black;
    border-radius: 7px;
    width: 300px;
    height: 30px;
    margin-right: 10px;
    font-weight: 500px;
    padding-left: 15px;
  }
  .button {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    background-color: #6495ed;
    &:hover {
      background-color: #1e90ff;
    }
  }

  button {
    &:hover {
      font-size: 20px;
      color: white;
    }
  }
`;
