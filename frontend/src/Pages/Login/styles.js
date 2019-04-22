import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 250px;

  p {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    color: #e22476;
  }

  form {
    margin: 20px 0 0;
    width: 100%;
    max-width: 280px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: 580px;

    input {
      background-color: #241c2d;
      color: #ffffff;
      border: 0;
      padding: 0 15px;
      font-size: 14px;
      height: 44px;
    }

    button {
      margin: 10px 0 0;
      background: #e5556e;
      border-radius: 25px;
      height: 44px;
      border: 0;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background: rgb(249, 116, 138);
    }
  }
    a {
      margin-left: 660px;
      margin-top: 15px;
      color: #fff;
      cursor: pointer;
      width: 150px;
    }
`;
