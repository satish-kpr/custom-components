import styled from "styled-components";
type Props = {
  SwitchSlider?: any;
  bgcolor?: any;
  bradius?: any;
  w?: any;
  pb?: any;
  h?: any;
  pl?: any;
  bg?: any;
  mb?: any;
  spacing?: any;
  border?: any;
  mr?: any;
  p?: any;
};
export const Container = styled.div<Props>`
 background:${({ bg }) => (bg ? bg : "white")};
 background-color:${({ bgcolor }) => (bgcolor ? bgcolor : "white")};
  display: flex;
  height: ${({ h }) => (h ? h : "20px")}
  border-radius:${({ bradius }) => (bradius ? bradius : "0.5rem;")} 
  flex-direction: row;
`;
export const Label = styled.label<Props>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ mb }) => (mb ? mb : "1rem")}
  margin-right: ${({ spacing }) => (spacing ? spacing : "10px")};
`;

export const RadioBox = styled.div<Props>`
  height: ${({ h }) => (h ? h : "10px")};
  width: ${({ w }) => (w ? w : "10px")};
  border: ${({ border }) => (border ? border : "1px solid red")};
  border-radius: ${({ bradius }) => (bradius ? bradius : "50%")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: ${({ mr }) => (mr ? mr : "0.4rem")};
  transition: background 0.15s, border-color 0.15s;
  padding: ${({ p }) => (p ? p : "1px")};

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: ${({ bg }) => (bg ? bg : "#2266dc")};
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
`;
