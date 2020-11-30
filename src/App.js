import React from "react";

import bem from "./bem";
import ButtonAng from "./components/ButtonAng/ButtonAng";
import Switch from "./components/Switch/Switch";
import Control from "./components/Card/Controls/Control";
import SearchBar from "./components/SearchBar/SearchBar";
import LikeButtonHeart from "./components/LikeButtonHeart/LikeButtonHeart";

import "./app.scss";


const onSwitchChange = () => {};
const onButtonAngClick = () => {};

const baseClass = "c-app";

function App() {
  const color = "mediumslateblue";
  const components = [
    <ButtonAng type="primary" onClick={onButtonAngClick} pill={false} />,
    <Switch onSwitchChange={onSwitchChange} className="app-switch" />,
    <Control style={{margin:"auto"}} direction="right" />,
    <SearchBar />,
    <LikeButtonHeart onLikeClick={() => {}}  backgroundColor={color}/>
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
