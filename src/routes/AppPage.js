import React from "react";
import App from "../components/App";
import { ThemeContext, LocaleSwitcher } from "../contexts/ThemeContext";
import "./AppPage.css";

const AppPage = () => {
  return (
    <LocaleSwitcher>
      <ThemeContext.Consumer>
        {context => <App {...context} />}
      </ThemeContext.Consumer>
    </LocaleSwitcher>
  );
};

export default AppPage;
