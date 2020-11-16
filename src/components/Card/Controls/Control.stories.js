import React from "react";
import Control from "./Control";

export default {
  title: "Atoms/Control",
  component: Control,
  argTypes: {},
};

const Template = (args) => <Control {...args} />;

export const defaultControl = Template.bind({});

defaultControl.args = {
  direction: "right",
  onClick: () => {},
};
