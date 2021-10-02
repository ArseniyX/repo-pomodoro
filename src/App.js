import { GlobalStyles } from "./components/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";
import settingsIcon from "./assets/icon-settings.svg";
import Settings from "./components/Settings";
import React, { useState, createContext, useRef } from "react";

const Container = styled.div`
  margin: 48px auto;
  width: 100%;

  /* @media (max-width: 768px) {
    margin-top: 80px;
  } */

  @media (max-width: 375px) {
    margin-top: 32px;
  }
`;

const SettingsImg = styled.img`
  margin-top: 63px;
  @media (max-width: 375px) {
    margin-top: 144px;
  }
`;

const SettingsButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const Context = createContext("");

const App = () => {
  const initialValue = {
    pomodoro: "25",
    short_break: "5",
    long_break: "15",
    font: "0",
    color: "0",
  };

  const [values, setValues] = useState(initialValue);

  const [toggle, setToggle] = useState("pomodoro");

  const [acceptedValues, setAcceptedValues] = useState(initialValue);

  const visible = useRef(null);

  const toggleVisibility = () => {
    visible.current.hidden = !visible.current.hidden;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setAcceptedValues(values);
    toggleVisibility();
  };

  return (
    <>
      <GlobalStyles />
      <>
        <Container>
          <Header
            values={acceptedValues}
            toggle={toggle}
            setToggle={setToggle}
          />
          <Timer values={acceptedValues} toggle={toggle} />
          <SettingsButton>
            <SettingsImg
              src={settingsIcon}
              alt="settings-icon"
              onClick={toggleVisibility}
            />
          </SettingsButton>
          <Context.Provider value={values}>
            <Settings
              toggleVisibility={toggleVisibility}
              setValues={setValues}
              onSubmit={onSubmit}
              values={values}
              visible={visible}
            />
          </Context.Provider>
        </Container>
      </>
    </>
  );
};

export default App;
