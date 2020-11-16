// @flow
import React from "react";
import bem from "../../bem";
import "./switch.scss";

type Props = {
  onSwitchChange: () => void,
  checked: boolean,
  label: string,
  className: string,
};

const baseClass = "c-switch";
const Switch = ({ onSwitchChange, checked, label, className }: Props) => {
  return (
    <label className={bem(baseClass, null, { isChecked: checked })}>
      <input type="checkbox" onChange={onSwitchChange} />
    </label>
  );
};

Switch.defaultProps = {
  checked: false,
  label: "Try me",
};

export default Switch;

// had to use a label to wrap the input
// https://stackoverflow.com/questions/774054/should-i-put-input-elements-inside-a-label-element

