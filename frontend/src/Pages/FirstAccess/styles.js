import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-right: 80px;

  h2 {
    margin: 5px;
    color: #ffffff;
  }

  h4 {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 30px;
    color: #ffffff;
  }

  p {
    margin-left: 180px;
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
    width: 312px;
    height: 112px;
  }

  form {
    margin-left: 45px;
    opacity: 0.9;
    font-family: Helvetica;
    font-size: 18px;
    color: #ffffff;
    text-align: left;

    input {
      margin: 8px;
    }
  }

  button {
    margin: 10px 0 0;
    background: #e5556e;
    border-radius: 25px;
    height: 44px;
    width: 200px;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
  }
`;
