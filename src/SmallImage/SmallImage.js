import React from "react";

export default function SmallImage(props) {
  return (
    <img
      alt={props.alt}
      id={props.id}
      src={props.src}
      onClick={() => props.handleClick(props.src)}
      style={{
        height: "110px",
        width: "105px",
        marginRight: "10px",
        marginTop: "10px"
      }}
    />
  );
}
