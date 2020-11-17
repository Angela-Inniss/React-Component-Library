// @flow
import React from "react";

import bem from "../../bem";

import "./buttonAng.scss";

type Props = {
  label: string,
  onClick: ({}) => void,
  outline: boolean,
  type: "primary" | "secondary",
  disabled: boolean,
  pill: boolean,
};

const ButtonAng = ({
  label,
  onClick,
  disabled,
  outline,
  type,
  pill,
}: Props) => {
  const baseClass = "c-ang-button";

  return (
    <button
      type="button"
      className={bem(baseClass, null, {
        hasOutline: outline,
        isDisabled: disabled,
        buttonType: type,
        pill: pill,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

ButtonAng.defaultProps = {
  label: "Button",
  outline: false,
  disabled: false,
};

export default ButtonAng;

// Component notes:
// props needed: label, onClick, outline, backgroundColor, disabled , primary, secondary
