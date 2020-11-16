import React from "react";

import bem from "../../../bem";

import "./control.scss";

const baseClass = "c-control";

type Props = {
  direction: "left" | "right" | "up" | "down",
  onClick: () => void,
};

const Control = ({ direction, onClick }: Props) => {
  return (
    <div onClick={onClick} className={bem(baseClass, "arrow-container")}>
      <div className={bem(baseClass, "arrow-icon", { direction: direction })} />
    </div>
  );
};

export default Control;

// Component notes:
// make reusable with props
// arrow direction will need to change that will be the modifier and for each left right up down there will be diff styles
// add onClick function so when user clicks we can pass a function to this
