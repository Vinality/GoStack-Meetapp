import styled from "styled-components";

const getColor = props => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#6e6e6e";
};

export const DropContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 20px; */
  padding: 20px;
  margin: 15px 0 15px 0;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #251f2d;
  color: #bdbdbd;
  height: 130px;
`;
