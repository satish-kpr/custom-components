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

export const Text = styled.p<Props>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "15px")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "none"};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "normal"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? `${fontWeight * 100}` : "600"};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Poppins")};
  color: ${(props) => props.color || "#333"};
  text-decoration: ${({ props }: any) => (props ? props.decoration : "none")};

  align-items: ${({ props }: any) => (props ? props.align : "baseline")};

  text-align: ${({ align }) => (align ? align : "baseline")};
  padding: ${({ p }) => (p ? p : "")};
  padding-top: ${({ pt }) => (pt ? pt : "")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
  margin: ${({ m }) => (m ? m : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  width: ${({ w }) => (w ? w : "auto")};
  max-width: ${({ maxW }) => (maxW ? maxW : "")};
`;
