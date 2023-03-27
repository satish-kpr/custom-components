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
  spacing?: any;
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
  variant?: any;
};
export const Button = styled.button<Props>`
  background: ${({ bg, variant }) =>
    variant == "outline" ? "transparent" : bg || "palevioletred"};
  border-radius: 4px;
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  border: ${({ variant, bg }) =>
    variant == "outline" ? `2px solid ${bg || "black"}` : "none"};
  padding: ${({ p }) =>
    p
      ? (p == "sm" && "8px") ||
        (p == "md" && "9px") ||
        (p == "lg" && "15px") ||
        "7px"
      : "10px"};
  margin: ${({ size }) =>
    size
      ? (size == "sm" && "5px") ||
        (size == "md" && "10px") ||
        (size == "lg" && "15px") ||
        "7px"
      : "10px"};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: ${({ size }) =>
    size
      ? (size == "sm" && "13px") ||
        (size == "md" && "17px") ||
        (size == "lg" && "20px") ||
        "15px"
      : "15px"};
  color: ${({ color }) => (color ? color : "black")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Poppins")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  text-align: ${({ align }) => (align ? align : "center")};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    cursor: pointer;
  }
`;
