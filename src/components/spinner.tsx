import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  duration?: number;
  m?: any;
  size?: any;
}

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBody = styled.div<SpinnerProps>`
  height: ${({ size }) =>
    size
      ? (size == "sm" && "20px") ||
        (size == "md" && "30px") ||
        (size == "lg" && "40px")
      : "2rem"};
  margin: ${(p) => (p.m ? p.m : "5px")};
  width: ${({ size }) =>
    size
      ? (size == "sm" && "20px") ||
        (size == "md" && "30px") ||
        (size == "lg" && "40px")
      : "20px"};
  border: ${({ size }) =>
      size
        ? (size == "sm" && "3px") ||
          (size == "md" && "5px") ||
          (size == "lg" && "6px")
        : "3px"}
    solid #d1d5db;
  border-top-color: ${(p) => (p.borderColor ? p.borderColor : "#3b82f6")};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    ${(p) => (p.duration ? `${p.duration}ms` : "800ms")} linear infinite;
`;

export const Spinner = (props: SpinnerProps) => {
  return <SpinnerBody {...props} />;
};
