import React from "react";


import DropDown from "./Dropdown";
export default {
  title: "Inputs/Dropdown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  label: "Storybook label",
  options: ["storybook cat", "storybook dog", "storybook pig"],
};
