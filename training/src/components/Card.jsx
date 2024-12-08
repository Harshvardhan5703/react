import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate rotation degrees for each hand
  const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5; // 30° per hour, 0.5° per minute
  const minuteRotation = time.getMinutes() * 6; // 6° per minute
  const secondRotation = time.getSeconds() * 6; // 6° per second

  return (
    <StyledWrapper>
      <div className="realistic-clock">
        <div className="clock-face">
          <div className="glass-cover" />
          <div
            className="hour hand"
            style={{ transform: `translateX(-50%) rotate(${hourRotation}deg)` }}
          />
          <div
            className="minute hand"
            style={{ transform: `translateX(-50%) rotate(${minuteRotation}deg)` }}
          />
          <div
            className="second hand"
            style={{ transform: `translateX(-50%) rotate(${secondRotation}deg)` }}
          />
          <div className="center-circle" />
          <div className="clock-numbers">
            <p style={{ top: '0.5px', left: 135 }} className="number">
              12
            </p>
            <p style={{ top: 100, right: 10 }} className="number">
              3
            </p>
            <p style={{ bottom: '0.5px', left: 135 }} className="number">
              6
            </p>
            <p style={{ top: 100, left: 10 }} className="number">
              9
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .realistic-clock {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 50px auto;
  }

  .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #333, #111);
    border-radius: 50%;
    border: 10px solid #cec5c5;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1);
  }

  .glass-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3);
    pointer-events: none;
  }

  .center-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, #666, #333);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .hand {
    position: absolute;
    background: #222;
    border-radius: 2px;
    left: 50%;
    transform-origin: bottom;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }

  .hour {
    width: 10px;
    height: 100px;
    top: 50px;
    background: linear-gradient(to bottom, #1d6981, #444);
  }

  .minute {
    width: 6px;
    height: 100px;
    top: 50px;
    background: linear-gradient(to bottom, #bbb, #666);
  }

  .second {
    width: 3px;
    height: 100px;
    top: 45px;
    background: red;
  }

  .number {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  }
`;

export default Card;