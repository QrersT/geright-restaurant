import React from "react";

const Heading = ({ text, extraStyles = {}, className }) => {
  const defaultStyles = { color: "#dcca87", fontFamily: "Cormorant Upright", fontStyle: "normal", fontWeight: "700", lineHeight: "130%", letterSpacing: "3.6px", textTransform: "capitalize" };

  const styles = { ...defaultStyles, ...extraStyles };
  return (
    <>
      <h3 className={className} style={styles}>
        {text}
      </h3>
    </>
  );
};

export default Heading;
