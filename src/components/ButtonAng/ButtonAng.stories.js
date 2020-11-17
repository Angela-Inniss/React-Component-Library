import React from "react";

import ButtonAng from "./ButtonAng";
export default {
  title: "Atoms/ButtonAng",
  component: ButtonAng,
};

const StoryTemplate = (args) => <ButtonAng {...args} />;

export const Default = StoryTemplate.bind({});

Default.args = {
  label: "This is a button",
  outline: false,
  disabled: false,
};

export const Primary = StoryTemplate.bind({});

Primary.args = {
  label: "This is a button",
  outline: false,
  disabled: false,
  type: "primary",
};

export const Secondary = StoryTemplate.bind({});

Secondary.args = {
  label: "This is a button",
  disabled: false,
  type: "secondary",
};

export const Disabled = StoryTemplate.bind({});

Disabled.args = {
  label: "This is a button",
  disabled: true,
};

export const Pill = StoryTemplate.bind({});

Pill.args = {
  label: "This is a button",
  disabled: true,
  pill: true,
};
