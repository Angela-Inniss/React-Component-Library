// @flow
import React from "react";

type Props = {
  id: string,
  placeholder: string | null,
  label: string,
  disabled: boolean,
  value: string,
  onChange: (string) => void,
  type: "text" | "number" | "password" | "date" | "time",
};

const InputBox = ({
  id,
  placeholder,
  label,
  disabled,
  value,
  onChange,
  type,
  name,
}: Props) => {
  const baseClass = "c-input";

  return (
    <div>
      <input
        id={id}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        name={name}
      />
    </div>
  );
};

InputBox.defaultProps = {
  label: null,
  placeholder: null,
  error: "",
  disabled: false,
  value: "",
  type: "text",
  name: "",
};

export default InputBox;
