import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  a {
    margin-top: 30px;
    color: #fff;
  }
`;

export const Input = styled.input`
  background-color: #251f2d;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  width: 250px;
  height: 20px;
  padding: 10px;
  margin-top: 10px;
  border: 0px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 270px;
  padding: 10px;
  background: #f94d6a;
  border: 10px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;

  :hover {
    background: rgb(249, 116, 138);
  }
`;

export const Logo = styled.img`
  margin-bottom: 40px;
  height: 40px;
`;

export const Error = styled.p`
  display: flex;
  justify-content: center;
  color: #e22476;
`;
