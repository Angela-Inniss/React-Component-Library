import React from "react";

import  ButtonAng from "./ButtonAng";
export default{
    title: "Atoms/ButtonAng",
    component: ButtonAng
}


const StoryTemplate = (args) => <ButtonAng {...args}/>;

//name of story
export const Default = StoryTemplate.bind({});
//name of story
Default.args = {
    label: "This is a button",
    outline: false,
    disabled: false
};

//name of story
export const Primary = StoryTemplate.bind({});
// story props / args
Primary.args = {
    label: "This is a button",
    outline: false,
    disabled: false,
    type: "primary"
};

//name of story
export const Secondary = StoryTemplate.bind({});
// story props / args
Secondary.args = {
    label: "This is a button",
    disabled: false,
    type: "secondary"
};

//name of story
export const Disabled = StoryTemplate.bind({});
// story props / args
Disabled.args = {
    label: "This is a button",
    disabled: true
};

export const Pill = StoryTemplate.bind({});
// story props / args
Pill.args = {
    label: "This is a button",
    disabled: true,
    pill: true
};
