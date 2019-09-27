import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Meetup = styled(Paper)`
  &.my-root-class {
    background: #251f2d;
  }

  width: 800px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 15px 0px 15px 0px; 
  width: 100%;
  border-bottom: 1px solid #e5556e;
`;

export const Text = styled.p`
  color: #d1d1d1;
  margin-bottom: 5px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  max-height: 300px;
  max-width: 800px;
  margin: 10px;
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 270px;
  padding: 10px;
  background: #f94d6a;
  border: 10px;
  margin-top: 20px;
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
