import styled from "styled-components";

interface DividerProps {
  color?: string;
  thickness?: string;
}

const Divider = styled.div<DividerProps>`
  height: ${(props) => props.thickness || "1px"};
  width: 50%;
  background-color: ${(props) => props.color || "black"};
`;

export default Divider;
