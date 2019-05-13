import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-left: 40px;
  color: #fff;

  h4 {
    margin-top: 20px;
    display: flex;
    justify-content: left;
    /* color: #fff; */
  }

  form {
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
`;

export const Label = styled.label`
  font-size: 16px;
  width: 100%;
  max-width: 280px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: 580px;

  p {
    margin-left: 20px;
  }

  input {
    background-color: #241c2d;
    color: #ffffff;
    border: 0;
    margin-top: 18px;
    margin-left: -15px;
    padding: 0 15px;
    font-size: 14px;
  }

  input.preferences {
    margin-top: 20px;
    width: 20px;
  }
`;

export const Preferences = styled.div`
  margin-left: 590px;

  input {
    background-color: #241c2d;
    color: #ffffff;
    border: 0;
    padding: 0 15px;
    font-size: 14px;
    height: 15px;
    margin: 8px;
  }

  label.check {
    margin: -15px;
  }

  h4 {
    margin-left: -10px;
  }
  button {
    margin-left: -10px;
    background: #e5556e;
    border-radius: 25px;
    height: 44px;
    width: 280px;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background: rgb(249, 116, 138);
  }
`;
