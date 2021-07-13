// @flow
import React, { useState } from "react";

import InputBox from "./Input/InputBox";

type Props = {
  submitData: (string) => {},
};

const UserInputForm = ({ submitData }: Props) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    submitData(name); //  submitData is a prop that will be used when this component is passed up to its container component it will be used then and teh logic will be executed there? // it passes up the data we are submitting
    setName("");
  };
  return (
    <form htmlForm onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <InputBox
        onChange={handleChange}
        value={name}
        placeholder="type your name"
        label="label"
        id={1}
        disabled={false}
        type="text"
        name="name"
      />
      <button>submit name</button>
    </form>
  );
};

export default UserInputForm;
