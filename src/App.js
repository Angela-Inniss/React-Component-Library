import React from "react";

import bem from "./bem";
import ButtonAng from "./components/ButtonAng/ButtonAng";
import Switch from "./components/Switch/Switch";
import Control from "./components/Card/Controls/Control";
import SearchBar from "./components/SearchBar/SearchBar";
import LikeButtonHeart from "./components/LikeButtonHeart/LikeButtonHeart";
import DropDown from "./components/Dropdown/Dropdown";
import SelectDropdown from "./components/SelectDropdown/SelectDropdown";

import { options } from "./optionsLists";
import { optionsSelectDropdown } from "./optionsLists";

import "./app.scss";

const onSwitchChange = () => {};
const onButtonAngClick = () => {};
const handleSelectOption = (event) => {
  // add API request here
  console.log(event.target.value);
};

const baseClass = "c-app";
function App() {
  const handleSelectDropdown = (event) => {
    console.log(event.value);
  };
  const color = "mediumslateblue";
  const components = [
    <ButtonAng type="primary" onClick={onButtonAngClick} pill={false} />,
    <Switch onSwitchChange={onSwitchChange} className="app-switch" />,
    <Control style={{ margin: "auto" }} direction="right" />,
    <SearchBar />,
    <LikeButtonHeart onLikeClick={() => {}} backgroundColor={color} />,
    <DropDown
      options={options}
      label="Choose a pet"
      onSelectOptionChange={handleSelectOption}
    />,
    <SelectDropdown
      onChange={handleSelectDropdown}
      options={optionsSelectDropdown}
      isClearable={true}
      isSearchable={false}
    />,
  ];
  return (
    <div className={bem(baseClass, "grid-container")}>
      {components.map((component) => (
        <div className="grid-item">{component}</div>
      ))}
    </div>
  );
}

export default App;

// N.B missing selected option props from each dropdown - decide what to do with them later - add useState hook
