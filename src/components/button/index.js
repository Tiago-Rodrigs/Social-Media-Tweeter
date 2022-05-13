import React from "react";
import "../../scss/style.scss";
export default function Button(props) {
  return (
    <button className="btn">
      <i class={props.icon}></i> {props.text}
    </button>
  );
}
