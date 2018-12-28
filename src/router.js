import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import CounterPage from "./routes/CounterPage";
import UserPage from "./routes/UserPage";
import AppPage from "./routes/AppPage";
import HookPage from "./routes/HookPage";
import TodoListPage from "./routes/TodoListPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/app" exact component={AppPage} />
        <Route path="/counter" exact component={CounterPage} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/hook" exact component={HookPage} />
        <Route path="/todoList" exact component={TodoListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
