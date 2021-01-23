import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import MainPage from "./pages/MainPage";
import SingleNamePage from "./pages/SingleNamePage";

function App(): JSX.Element {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path={`/names/:name`}>
          <SingleNamePage />
        </Route>
        <Route>
          <NotFound invalidUrl={true} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
