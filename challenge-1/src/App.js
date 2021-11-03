import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Input from "./Components/Input";
import Form from "./Components/Form";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    <>
      <Menu />

      <Switch>
        <Route exact path="/" component={Input} />
        <Route path="/form" component={Form} />
        <Route path="/loginform" component={LoginForm} />
      </Switch>
    </>
  );
};

export default App;
