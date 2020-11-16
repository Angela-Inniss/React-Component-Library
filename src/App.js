import React from "react";
import "./app.scss";
import bem from "./bem";
import ButtonAng from "./components/ButtonAng/ButtonAng";
import Switch from "./components/Switch/Switch";
import Control from "./components/Card/Controls/Control";

const onSwitchChange = () => {};
const onButtonAngClick = () => {};

const baseClass = "c-app";
function App() {
  const components = [
    <ButtonAng type="primary" onClick={onButtonAngClick} pill={false} />,
    <Switch onSwitchChange={onSwitchChange} className="app-switch" />,
    <Control direction="right"/>,
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








// do a grid display grid and tehn map over each elemtnt i create an dput it in a cell :)
