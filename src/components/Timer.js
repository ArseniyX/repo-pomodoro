import React, { useRef } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { COLORS, FONTS } from "../utils/constants";
import Countdown, { zeroPad } from "react-countdown";

const Container = styled.div`
  position: relative;
  width: 410px;
  height: 410px;

  border-radius: 50%;
  background: green;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  margin: 48px auto;
  margin-bottom: 0;

  @media (max-width: 450px) {
    width: 300px;
    height: 300px;
  }
`;

const TimerInner = styled.div`
  border-radius: 50%;
  background-color: #161932;
  position: absolute;
  top: 22px;
  left: 22px;

  @media (max-width: 450px) {
    top: 16px; 
    left: 16px;
  }
`;

const CustomProgressBar = styled(CircularProgressbar)`
  margin: 13px;
  width: 339px;
  height: 339px;
  font-weight: ${({ font }) => (font === "Space Mono" ? "normal" : "bold")};
  font-family: ${({ font }) => font};

  @media (max-width: 450px) {
    width: 244px;
    height: 244px;
  }
`;

const TimerButton = styled.button`
  font-family: ${({font}) => font};
  margin-top: 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 15px;
  margin-right: -15px;

  color: #d7e0ff;

  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 13.125px;
    margin-right: -13.125px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 60%;
  margin: auto;
  text-align: center;

  @media (max-width: 450px) {
    top: 50%
  }
`;

const Timer = ({ values, toggle }) => {
  const timerRef = useRef();

  const renderer = ({ minutes, seconds, total, api }) => {
    const countdownTime = `${zeroPad(minutes)}:${zeroPad(seconds)}`;

    const value = values[toggle] * 60;

    const progressBarValue = (100 / value) * (value - total / 1000);

    return (
      <>
        <CustomProgressBar
          font={FONTS[values.font]}

          strokeWidth={3}
          styles={buildStyles({
            pathColor: `${COLORS[values.color]}`,
            trailColor: "transparent",
            textColor: `#D7E0FF`,
          })}
          value={progressBarValue}
          text={countdownTime}
        />
        <Wrapper>
          <TimerButton font={FONTS[values.font]} onClick={handleButtonState}>
            {!api.isCompleted()
              ? !api.isStarted()
                ? "start"
                : "pause"
              : "restart"}
          </TimerButton>
        </Wrapper>
      </>
    );
  };

  const handleButtonState = () => {
    if (timerRef.current.isStopped() || timerRef.current.isPaused()) {
      timerRef.current.start();
    }
    
    if (timerRef.current.isStarted()) {
      timerRef.current.pause();
    }

    if (timerRef.current.isCompleted()) {
      timerRef.current.stop();
    }
  };

  return (
    <Container>
      <TimerInner>
        <Countdown
          date={Date.now() + values[toggle] * 60000}
          renderer={renderer}
          ref={timerRef}
          autoStart={false}
        />
      </TimerInner>
    </Container>
  );
};

export default Timer;
