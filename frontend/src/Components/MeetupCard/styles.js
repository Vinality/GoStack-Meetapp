import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  width: 300px;
  border-radius: 10px;
  margin: 20px;

  .hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
  }
`;

export const Img = styled.img`
  border-radius: 5px 5px 0 0;
  max-width: 300px;
  max-height: 200px;
`
export const CardText = styled.div`
  padding: 2px 16px;
  color: #fff;
  background-color: #e5556e;
`