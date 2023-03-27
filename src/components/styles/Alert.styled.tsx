import styled from "styled-components";

type Props = {
  maxW?: any;
  w?: any;
  gap?: any;
  direction?: any;
  justify?: any;
  flexWrap?: any;
  align?: any;
  color?: any;
  fontSize?: any;
  fontFamily?: any;
  fontWeight?: any;
  letterSpacing?: any;
  textTransform?: any;
  size?: any;
  bg?: any;
  p?: any;
  m?: any;
  pt?: any;
  pr?: any;
  pl?: any;
  pb?: any;
  ml?: any;
  mb?: any;
  mt?: any;
  mr?: any;
};

export const AlertFunction = styled.div<Props>`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size }) =>
    size
      ? (size == "sm" && "10px") ||
        (size == "md" && "20px") ||
        (size == "lg" && "40px") ||
        "7px"
      : "10px"};

  color: ${({ color }) => (color ? color : "white")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  border-radius: 10px;
  margin: ${({ m }) => (m ? m : "10px;")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
  border: 1px solid #ccc;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
 
}
`;

export const Alertfooter = styled.div<Props>`
  padding-top:${({ pt }) => (pt ? pt : "2rem")}
  justify-content: center;
  background-color: white;
  padding: ${({ size }) =>
    size
      ? (size == "sm" && "10px") ||
        (size == "md" && "20px") ||
        (size == "lg" && "40px") ||
        "7px"
      : "10px"};
  border-radius: 10px;
`;
