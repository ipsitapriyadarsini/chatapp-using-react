import React, { useState } from "react";
import "../index.css";
import UserOutput from "./UserOutput";

const UserInput = () => {
  const [name, setName] = useState();
  // console.log(name);
  return (
    <>
      <div className='main'>
        <h3>username</h3>
        <input
          type='text'
          placeholder='Enter your conent'
          onChange={(e) => setName(e.target.value)}
        />
        <UserOutput name={name} />
      </div>
    </>
  );
};
export default UserInput;
