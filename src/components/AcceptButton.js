import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/constants";

const ApplyButton = styled.input`
  border: none;
  width: 140px;
  height: 53px;
  border-radius: 26.5px;
  background-color: ${({ color = "#F87070" }) => color};
  font-weight: bold;
  font-size: 16px;
  font-family: inherit;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Rectangle = styled.div`
  position: absolute;
  top: 358px;
  left: 50%;
  margin-left: -70px;
  border: none;
  width: 140px;
  height: 53px;
  border-radius: 26.5px;
  background-color: #fff;

  @media (max-width: 540px) {
    top: 405px;
    left: 50%;
    margin-left: -70px;
  }
`;

const AcceptButton = ({ values }) => {
  return (
    <Rectangle>
      <ApplyButton type="submit" color={COLORS[values.color]} value="Apply" />
    </Rectangle>
  );
};

export default AcceptButton;
