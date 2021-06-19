import React from "react";
import { Begin, Selection, NotFound } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Begin />
        </Route>
        {["/past", "/upcoming", "/latest", "/next"].map((path, index) => (
          <Route path={path} key={index}>
            <Selection />
          </Route>
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
