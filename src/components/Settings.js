import React from "react";
import styled from "styled-components";
import iconClose from "../assets/icon-close.svg";
import AcceptButton from "./AcceptButton";
import SelectFontOrColor from "./SelectBlock";
import InputBlock from "./InputBlock";

const Background = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SettingsContainer = styled.form`
  position: static;
  width: 540px;
  margin: 40px auto;
  min-height: 390px;
  background-color: #fff;
  border-radius: 25px;
  font-family: "Kumbh Sans";

  @media (max-width: 540px) {
    position: static;
    margin: 5% auto;
    width: 90%;
    min-width: 240px;
    border-radius: 15px;
    padding-bottom: 10px;
  }
`;

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e3e1e1;

  @media (max-width: 540px) {
    padding: 8px;
  }
`;

const SettingsTitle = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  margin: 0;
  /* identical to box height */

  color: #161932;

  @media (max-width: 540px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

const CloseIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: auto 0;
`;

const SetTime = styled.div`
  margin: 24px 40px;
  text-align: left;

  @media (max-width: 540px) {
    margin: 15px;
  }
`;

export const SetTimeTitle = styled.h2`
  font-size: 13px;
  padding-top: 2px;
  line-height: 16px;
  letter-spacing: 5px;

  color: #161932;

  @media (max-width: 540px) {
    font-size: 11px;
    line-height: 14px;
    margin: 0;
    padding: 0;
    /* identical to box height */
    text-align: center;
    letter-spacing: 4.23077px;
  }
`;

const SetTimeInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;

  @media (max-width: 540px) {
    display: block;
    padding-bottom: 12px;
  }
`;

const Settings = ({
  toggleVisibility,
  onSubmit,
  setValues,
  values,
  visible
}) => {
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <Background hidden={true} ref={visible}>
      <SettingsContainer onSubmit={onSubmit}>
        <SettingsHeader>
          <SettingsTitle>Settings</SettingsTitle>
          <CloseIcon
            src={iconClose}
            alt={"clone"}
            onClick={toggleVisibility}
          />
        </SettingsHeader>
        <SetTime>
          <SetTimeTitle>TIME (MINUTES)</SetTimeTitle>
          <SetTimeInner>
            <InputBlock name="pomodoro" onChange={set("pomodoro")} />
            <InputBlock name="short break" onChange={set("short_break")} />
            <InputBlock name="long break" onChange={set("long_break")} />
          </SetTimeInner>
          <SelectFontOrColor
            values={values}
            name="FONTS"
            onSelect={set("font")}
          />
          <SelectFontOrColor
            values={values}
            name="COLORS"
            onSelect={set("color")}
            isFont={false}
          />
        </SetTime>
        <AcceptButton values={values} />
      </SettingsContainer>
    </Background>
  );
};

export default Settings;
