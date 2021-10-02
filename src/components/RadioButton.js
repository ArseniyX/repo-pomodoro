import React from "react";
import styled from "styled-components";

const RadioBtn = styled.input`
  position: absolute;
  visibility: hidden;
`;

const SelectLabel = styled.label`
  color: ${({ fontColor }) => fontColor};
  width: 40px;
  height: 40px;
  text-align: center;
  padding-top: ${({ font }) => (font !== "Space Mono" ? "8px" : "6px")};
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  font-family: ${({ font }) => font};

  &:hover {
    cursor: pointer;
    padding-top: ${({ font }) => (font !== "Space Mono" ? "6px" : "4px")};
    border: 2px solid #fff1fa;
  }
`;

const RadioButton = ({
  index,
  font,
  color,
  onSelect,
  isFont,
  fontColor,
  content,
}) => {
  return (
    <SelectLabel bgColor={color} font={font} fontColor={fontColor}>
      {content}
      <RadioBtn
        type="radio"
        value={index}
        name={isFont ? "font" : "color"}
        onChange={onSelect}
      />
    </SelectLabel>
  );
};

export default RadioButton;
