import React, { Component } from "react";
import Select from "react-select";

// styles

const fontFamily = "monospace";
const fontSize = 20;
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "deeppink" : "mediumslateblue",
    fontSize: fontSize,
    backgroundColor: state.isFocused ? "#e9e3f4" : "white",
    fontFamily: fontFamily,
  }),
  control: (provided, state) => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    fontSize: fontSize,
    color: state.isSelected ? "deeppink" : "mediumslateblue",
    fontFamily: fontFamily,
  }),
};

// props
type Option = {
  label: string,
  value: any,
};

type Props = {
  options: Array<Option>,
  onChange: (Option) => {},
  isClearable: boolean,
  isSearchable: boolean,
  label: string,
  "aria-labelledby": string,
  "aria-label": string,
  selectedOption: string,
};

const SelectDropdown = ({
  isClearable,
  isSearchable,
  options,
  onChange,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  label,
  selectedOption,
}: Props) => (
  <>
    <label style={{ fontSize: fontSize, fontFamily: fontFamily }}>
      {label}
    </label>
    <Select
      label
      styles={customStyles}
      placeholder="Please select an option..."
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      onChange={(selectedOption) => onChange(selectedOption)}
      clearable={isClearable}
      searchable={isSearchable}
      options={options}
      value={selectedOption}
    />
  </>
);

export default SelectDropdown;

// Notes:
// used react select which comes with predefined props
// options prop is a list of label and value pairs
// value prop i have passed the selectedOption which is the option in the list the user selects - this will be passed to the onChange
// onChange prop takes the selectedOption selected by user and passes it on so we can do something with it i.e send it off to a database & return some results?
// searchable prop makes the options in the drop down searchable
// clearable ensures you can clear the search
// aria labels are to make the component accessible  - assistive tech
