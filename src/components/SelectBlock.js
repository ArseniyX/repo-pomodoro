import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../utils/constants";
import RadioButton from "./RadioButton";
import { SetTimeTitle } from "./Settings";

const SelectContainer = styled.div`
  padding: 7px 0;
  display: flex;

  justify-content: space-between;
  border-top: 1px solid #e3e1e1;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const SelectElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;

  @media (max-width: 540px) {
    margin: auto;
    margin-top: 10px;
  }
`;

const SelectFontOrColor = ({ name, onSelect, values, isFont = true }) => {
  const swapColor = (index, a, b) => (values.font === index.toString() ? a : b);
  return (
    <SelectContainer>
      <SetTimeTitle>{name}</SetTimeTitle>
      <SelectElement>
        {isFont
          ? FONTS.map((font, index) => (
              <RadioButton
                // checked={values.font === index.toString ? true : false}
                key={font}
                color={swapColor(index, "#161932", "#EFF1FA")}
                fontColor={swapColor(index, "#FFF", "#1E213F")}
                content={"Aa"}
                font={font}
                index={index}
                onSelect={onSelect}
                isFont={isFont}
              />
            ))
          : COLORS.map((color, index) => (
              <RadioButton
                content={values.color === index.toString() ? "✓" : ""}
                key={color}
                index={index}
                onSelect={onSelect}
                color={color}
                isFont={isFont}
              />
            ))}
      </SelectElement>
    </SelectContainer>
  );
};

export default SelectFontOrColor;
