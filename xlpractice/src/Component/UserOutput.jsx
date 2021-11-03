import React from "react";

const UserOutput = (props) => {
  // console.log("pooja", props);
  return (
    <>
      <p>Hello,welcome to my page</p>
      <p>Hi,i am Ipsita priyadarsini</p>
      <h1>{props.name}</h1>
    </>
  );
};
export default UserOutput;
