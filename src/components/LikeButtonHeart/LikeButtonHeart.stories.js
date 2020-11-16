import React from "react";
import LikeButtonHeart from "./LikeButtonHeart";
export default {
  title: "Atoms/LikeButtonHeart",
  component: LikeButtonHeart,
};

const Template = (args) => <LikeButtonHeart {...args} />;

export const LikeButtonDefault = Template.bind({});
LikeButtonDefault.args = {
  liked: false,
};

export const LikeButtonPink = Template.bind({});
LikeButtonPink.args = {
  liked: true,
};

export const LikeButtonGrey = Template.bind({});
LikeButtonPink.args = {
  liked: false,
};
