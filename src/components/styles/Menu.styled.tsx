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
  visible?: any;
  open?: any;
  bgcolor?: any;
};

export const Menu = styled.ul<Props>`
  list-style: none;
  width: ${({ size }) =>
    size
      ? (size == "sm" && "50px") ||
        (size == "md" && "100px") ||
        (size == "lg" && "120px") ||
        "7px"
      : "10rem"};
  height: ${({ size }) =>
    size
      ? (size == "sm" && "50px") ||
        (size == "md" && "100px") ||
        (size == "lg" && "120px") ||
        "7px"
      : "10rem"};
  padding: ${({ p }) =>
    p
      ? (p == "sm" && "8px") ||
        (p == "md" && "9px") ||
        (p == "lg" && "13px") ||
        "7px"
      : "10px"};
  padding-top: ${({ pt }) => (pt ? pt : "")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
  margin: 0;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#f1f1f1;")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Poppins")};
  border-radius: 5px;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export const MenuItem = styled.li<Props>`
  padding: ${({ size }) =>
    size
      ? (size == "sm" && "10px") ||
        (size == "md" && "15px") ||
        (size == "lg" && "20px") ||
        "0"
      : "10px"};
  visibility: ${({ visible }) => (visible ? visible : "visible")};
  text-align: ${({ align }) => (align ? align : "center")};
  min-width: max-content;
  cursor: pointer;
  display:ab
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Poppins")};
  &:hover {
    background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#ddd;")};
  }
`;
