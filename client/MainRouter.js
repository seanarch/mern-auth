import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";

export default function MainRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/" Component={Home} />
      </Switch>
    </div>
  );
}
