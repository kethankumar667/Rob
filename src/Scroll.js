import React from "react";
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        borderRadius: "6px",
        height: "422px",
        background: "rgb(131,58,180)",
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
