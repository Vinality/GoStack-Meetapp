import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-top: 250px;

//   form {
//     margin: 20px 0 0;
//     width: 100%;
//     max-width: 280px;
//     color: #fff;
//     font-family: Arial, Helvetica, sans-serif;
//     display: flex;
//     flex-direction: column;
//     align-items: stretch;
//     margin-left: 580px;

//     input {
//       /* background: #ffffff; */
//       background-color: #241c2d;
//       color: #ffffff;
//       border: 0;
//       height: 44px;
//       padding: 0 15px;
//       font-size: 14px;
//     }

//     button {
//       margin: 10px 0 0;
//       background: #e5556e;
//       border-radius: 25px;
//       height: 44px;
//       border: 0;
//       color: #fff;
//       font-weight: bold;
//       cursor: pointer;
//       font-size: 16px;
//     }

//     button:hover {
//       background: rgb(249, 116, 138);
//     }

//     a {
//       margin-top: 15px;
//       margin-left: 90px;
//       color: #fff;
//       cursor: pointer;
//     }
//   }
// `;

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
