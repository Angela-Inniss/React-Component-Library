import React from "react";

import Card from "./Card";

export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {},
};
const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  type: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  type: "medium",
};

export const Large = Template.bind({});
Large.args = {
  type: "large",
};

export const WithImage = Template.bind({});
WithImage.args = {
  type: "with-image",
};

export const Modal = Template.bind({});
Modal.args = {
  type: "modal",
};
