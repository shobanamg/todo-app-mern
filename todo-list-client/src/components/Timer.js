import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return <span>{time}</span>;
};

export default Timer;
