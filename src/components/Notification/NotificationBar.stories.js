import React from "react";
import {successIcon } from "./Notification"

import Notification from "./Notification";
export default {
  title: "Atoms/Notification",
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const NotificationDefault = Template.bind({});

NotificationDefault.args = {
  colorBar: "error",
  text: "this is the text",
  icon: "error"
};

export const NotificationSuccess = Template.bind({});
NotificationSuccess.args = {
  colorBar: "success",
  text: "this is a success message",
  icon: "success"
};

export const NotificationInfo = Template.bind({});
NotificationInfo.args = {
  colorBar: "info",
  text: "this is an info message",
  icon: "info"
};

export const NotificationLoading = Template.bind({});
NotificationLoading.args = {
  colorBar: "loading",
  text: "this is a loading message",
  icon: "loading"
};

export const NotificationWarning = Template.bind({});
NotificationWarning.args = {
  colorBar: "warning",
  text: "this is a warning message",
  icon: "warning"
};

export const NotificationError = Template.bind({});
NotificationError.args = {
  colorBar: "error",
  text: "this is an error message",
  icon: "error"
};
