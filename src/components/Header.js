import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FONTS, COLORS } from "../utils/constants";

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
`;

const Navigation = styled.div`
  z-index: -1;
  min-width: 300px;
  max-width: 373px;
  width: 90%;
  height: 63px;
  background: #161932;
  border-radius: 31px;
  margin: 47px auto;

  display: flex;
  justify-content: space-evenly;
`;

const ToggleButton = styled.button`
  margin: auto;
  cursor: pointer;

  color: ${({ fontColor }) => fontColor};
  font-family: ${({ font }) => font};

  width: 120px;
  background: ${({ color }) => color};
  border-radius: 26.5px;
  padding: 17px 0;
  font-weight: bold;
  border: none;

  @media (max-width: 375px) {
    width: 105px;
  }
`;

const Header = ({ values, toggle, setToggle }) => {
  const onToggleButton = (name) => {
    setToggle(name);
  };

  return (
    <StyledHeader>
      <img src={logo} alt="alt" />
      <Navigation>
        {["pomodoro", "short_break", "long_break"].map((value) => (
          <ToggleButton
            font={FONTS[values.font]}
            color={toggle === value ? COLORS[values.color] : "transparent"}
            fontColor={toggle === value ? "#1E213F" : "#D7E0FF"}
            onClick={() => onToggleButton(value)}
          >
            {value.replace("_", " ")}
          </ToggleButton>
        ))}
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
