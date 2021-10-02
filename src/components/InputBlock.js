import React from "react";
import styled from "styled-components";

const SetTimeBlock = styled.div`
  position: relative;

  @media (max-width: 540px) {
    display: block;
    margin-top: 10px;
  }
`;

const SetTimeLabel = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  width: 150px;
  color: #1e213f;
  mix-blend-mode: normal;
  opacity: 0.5;

  @media (max-width: 540px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const SetTimeInput = styled.input`
  border: none;
  background: #eff1fa;
  border-radius: 10px;
  padding: 15px;
  width: 148px;
  margin-top: 7px;

  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: black;

  @media (max-width: 540px) {
    margin-top: 0;
    width: 140px;
    height: 40px;
  }
`;

const Wrapper = styled.span`
  margin: auto 0;
`;

const InputBlock = ({ name, onChange, placeholder }) => {
  return (
    <SetTimeBlock>
      <SetTimeLabel>
        <Wrapper>{name}</Wrapper>
        <SetTimeInput
          type="number"
          onChange={onChange}
          required
          placeholder={placeholder}
          min="1"
          max="120"
        />
      </SetTimeLabel>
    </SetTimeBlock>
  );
};

export default InputBlock;
