import React, { useState } from "react";
import "./Input.css";

const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const [fullName, setFullName] = useState("");
  const [fullLastName, setFullLastName] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setFullLastName(lastname);
  };
  const inputElement = (e) => {
    setName(e.target.value);
  };
  const inputElementTwo = (e) => {
    setLastname(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {fullName} {fullLastName}
          </h1>
          <input
            type='text'
            placeholder='Enter your first name'
            onChange={inputElement}
            value={name}
          />
          <input
            type='text'
            placeholder='Enter your first name'
            onChange={inputElementTwo}
            value={lastname}
          />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  );
};
export default Form;
