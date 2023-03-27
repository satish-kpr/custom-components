import styled from "styled-components";
type Props = {
  bg?: any;
  w?: any;
  h?: any;
};
export const Slider = styled.input.attrs({ type: "range" })<Props>`
  width: ${({ w }) => (w ? w : "80%")}
  -webkit-appearance: none;
  background-color:${({ bg }) => (bg ? bg : "green")};
  height:${({ h }) => (h ? h : "5px")};
  border-radius: 5px;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
   
    cursor: pointer;
    border-radius: 50%;
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const SliderWrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
