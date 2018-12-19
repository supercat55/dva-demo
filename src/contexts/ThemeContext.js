import React, { Component } from "react";

const localMap = {
  "en-US": { locale: "en-US", flag: "US", content: "Hello World!" },
  "fr-FR": { locale: "fr-FR", flag: "FR", content: "Bonjour le monde!" },
  "es-ES": { locale: "es-ES", flag: "ES", content: "Hola Mundo!" }
};
// 1、创建 context
export const ThemeContext = React.createContext();

// 2、 创建 Provider Component

export class LocaleSwitcher extends Component {
  state = localMap["es-ES"];

  selectChange = v => {
    this.setState(localMap[v]);
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          updateLocale: v => this.selectChange(v)
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
