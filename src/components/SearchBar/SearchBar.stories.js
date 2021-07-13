import React from "react";

import SearchBar from "./SearchBar";

export default {
  title: "Inputs/SearchBar",
  component: SearchBar,
};

const StoryTemplate = (args) => <SearchBar {...args} />;

export const Default = StoryTemplate.bind({});
// name of story
Default.args = {
  showListItems: true
};
