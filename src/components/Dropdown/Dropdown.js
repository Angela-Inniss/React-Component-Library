import React from "react";
import bem from "../../bem";
import "./dropdown.scss";

type Props = {
  onSelectOptionChange: (string) => {}, // because we are passing a string value on select
  selected: boolean,
  label: string,
  disabled: boolean,
  options: Array,
};

const DropDown = ({ onSelectOptionChange, selected, label, options }: Props) => {
  const baseClass = "dropdown";
  return (
    <div>
      <label className={bem(baseClass, "label")} htmlFor="select">
        {label}
      </label>
      <select
        onChange={(option) => onSelectOptionChange(option)}
        className={bem(baseClass, "select")}
        name="dropdown"
        id="select"
      >
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;

// dropdown needs an input
// the onChange is attached to the select element- when a user selects it triggers this a function
// html select
// onChange
// selected?
// label
// options is an array
// example 1: const element = ( <h1 className="greeting"> Hello, world! </h1> );
// example 2: const element = React.createElement( 'h1', {className: 'greeting'}, 'Hello, world!' )
