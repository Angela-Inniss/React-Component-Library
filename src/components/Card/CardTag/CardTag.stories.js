import React from "react";

import CardTag from "./CardTag";

export default {
  title: "Atoms/CardTag",
  component: CardTag,
  argTypes: {},
};
const Template = (args) => <CardTag {...args} />;

export const defaultCardTag = Template.bind({});
defaultCardTag.args = {
  label: "LABEL",
};
