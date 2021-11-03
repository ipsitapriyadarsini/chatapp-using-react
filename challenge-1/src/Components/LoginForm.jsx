import React from "react";
import "./LoginForm.css";

const LoginFrom = () => {
  return (
    <>
      <div className="container">
        <h1>Registration form</h1>
        <form action="">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            autoComplete="off"
            // value={registration.fname}
            // onChange={changeHandler}
            name="fname"
            id="first_name"
            placeholder="John"
          />
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            autoComplete="off"
            // value={registration.lname}
            // onChange={changeHandler}
            name="lname"
            id="last_name"
            placeholder="Doe"
          />
          <label htmlFor="email">Email ID</label>
          <input
            type="text"
            autoComplete="off"
            // value={registration.email}
            // onChange={changeHandler}
            name="email"
            id="email"
            placeholder="john@doe.com"
          />
          <label htmlFor="ph_no">Phone no</label>
          <input
            type="text"
            autoComplete="off"
            // value={registration.phno}
            // onChange={changeHandler}
            name="phno"
            id="ph_no"
            placeholder="+91-8966654467"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            // value={registration.password}
            // onChange={changeHandler}
            name="password"
            id="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginFrom;
