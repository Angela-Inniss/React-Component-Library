import React from "react";

import  Switch from "./Switch";

export default{
    title: "Atoms/Switch",
    component: Switch
}


const StoryTemplate = (args) => <Switch {...args}/>;


export const Default = StoryTemplate.bind({});
// name of story
Default.args = {
    label: "SWITCH",
    checked: true
};
