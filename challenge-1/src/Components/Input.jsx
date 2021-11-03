import React, { useState } from "react";
// import "./Input.css";

const Input = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const inputElement = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const withSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <form>
        <div>
          <h1>Hii welcome {fullName}</h1>
          <input
            type='text'
            placeholder='Enter your name'
            onChange={inputElement}
            value={name}
          />
          <button onClick={withSubmit}>click me</button>
        </div>
      </form>
    </>
  );
};

export default Input;
