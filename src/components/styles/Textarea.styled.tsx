import styled, { css } from "styled-components";
interface TextAreaProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  p?: any;
  fontSize?: any;
  mh?: any;
}

export const TextArea = styled.textarea<TextAreaProps>`
  padding: ${({ p }) =>
    p
      ? (p == "sm" && "10px") ||
        (p == "md" && "20px") ||
        (p == "lg" && "60px") ||
        "7px"
      : "10px"};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  border-radius: 5px;
  resize: vertical;
  min-height: ${({ mh }) => (mh ? mh : "100px")};
  cursor: pointer;
  border: 1px solid gray;
  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border: 2px solid red;
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: #f2f2f2;
      color: #999999;
      cursor: not-allowed;
    `};
`;
