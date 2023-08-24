import React from "react";
import images from "../../constants/images";

export default function SubHeading({ text, extraStyles, className }) {
  const defaultStyles = { color: "#fff", fontFamily: "Cormorant Upright", fontSize: "23px", fontStyle: "normal", fontWeight: "700", lineHeight: "130%", letterSpacing: "0.92px", textTransform: "capitalize", marginBottom: "8px", display: "inline-block" };

  const styles = { ...defaultStyles, ...extraStyles };
  return (
    <>
      <div className={className}>
        <div style={styles}>{text}</div>
        <br />
        <span>
          <img src={images.spoon} alt="spoon" />
        </span>
      </div>
    </>
  );
}
