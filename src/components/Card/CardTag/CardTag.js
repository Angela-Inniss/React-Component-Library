// @flow
import React from "react";

import bem from "../../../bem";
import "./cardTag.scss";
type Props = {
  label: string,
};

const CardTag = ({ label }: Props) => {
  const baseClass = "c-card-tag";

  return <div className={bem(baseClass, "label")}>{label}</div>;
};

export default CardTag;
