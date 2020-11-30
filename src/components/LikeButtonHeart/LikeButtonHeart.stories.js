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
  backgroundColor: "pink",
};

export const LikeButtonGrey = Template.bind({});
LikeButtonGrey.args = {
  backgroundColor: "grey",
};

export const LikeButtonPurple = Template.bind({});
LikeButtonPurple.args = {
  backgroundColor: "mediumslateblue",
};
