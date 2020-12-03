import React from "react";

import SelectDropdown from "./SelectDropdown";
export default {
  title: "Inputs/Select Dropdown",
  component: SelectDropdown,
};

const Template = (args) => <SelectDropdown {...args} />;

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  label: "Select an ice cream flavour",
  options: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "mint", label: "Mint" },
    { value: "cookie dough", label: "CookieDough" },
  ],
  isSearchable: false,
};
