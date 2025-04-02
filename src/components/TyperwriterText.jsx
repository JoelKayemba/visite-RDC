// src/components/TypewriterText.js
import React, { useEffect, useState } from "react";

const TypewriterText = ({ text = "", speed = 40, onDone, className }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = -1;
    setDisplayed(""); // reset à chaque nouveau texte

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        if (onDone) setTimeout(onDone, 1000); // délai avant trigger
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return <div className={className}>{displayed}</div>;
};

export default TypewriterText;
