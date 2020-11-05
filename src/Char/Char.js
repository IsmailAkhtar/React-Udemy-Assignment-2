import React from "react";

const Char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    border: "1px solid black",
    margin: "16px",
    textAlign: "center",
  };
  return (
    <div style={style} onClick={props.clicked}>
      <p>{props.character}</p>
    </div>
  );
};
export default Char;
