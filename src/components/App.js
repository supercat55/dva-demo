import React, { Component } from "react";
import { CDNFlagIcon } from "react-flag-kit";

class App extends Component {
  render() {
    console.log(this.props);
    const { state, updateLocale } = this.props;
    const { locale, flag, content } = state;
    return (
      <div className="app">
        <select value={locale} onChange={e => updateLocale(e.target.value)}>
          <option value="en-US">English</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
        </select>
        <CDNFlagIcon code={flag} size={256} />
        <h1>{content}</h1>
      </div>
    );
  }
}

export default App;
