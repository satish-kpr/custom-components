import styled from "styled-components";

type Props = {
  SwitchSlider?: any;
  bgcolor?: any;
  bradius?: any;
  w?: any;
  pb?: any;
  h?: any;
  pl?: any;
};

export const SwitchContainer = styled.label<Props>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: ${({ h }) => (h ? h : "34px")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
  padding-left: ${({ pl }) => (pl ? pl : "")};
`;

export const SwitchSlider = styled.span<Props>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#ccc")};
  transition: 0.4s;
  border-radius: ${({ bradius }) => (bradius ? bradius : "54px")};

  &::before {
    position: absolute;
    content: "";
    height: ${({ h }) => (h ? h : "16px")};
    width: ${({ w }) => (w ? w : "16px")};
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 80%;
  }
`;
export const SwitchInput = styled.input<Props>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchSlider} {
    background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "red")};
  }

  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px red;
  }

  &:checked + ${SwitchSlider}::before {
    transform: translateX(26px);
  }
`;
