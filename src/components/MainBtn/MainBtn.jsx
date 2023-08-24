import React from "react";

export default function MainBtn({ text, extraStyles = {} }) {
  const defaultStyles = {
    backgroundColor: "#dcca87",
    padding: "8px 32px",
    color: "#000",
    fontSize: "16px",
    fontFamily: "Cormorant Upright",
    fontWeight: "700",
    lineHeight: "175%",
    letterSpacing: "0.64px",
    border: "none",
  };
  const styles = { ...defaultStyles, ...extraStyles };

  return <button style={styles}>{text}</button>;
}
