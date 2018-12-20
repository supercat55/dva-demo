import React, { Component } from "react";
import { CDNFlagIcon } from "react-flag-kit";
import styled, { keyframes } from "styled-components";

const AppWrapper = styled.div`
  background-color: ${props => (props.isBlack ? "#222" : "red")};
`;

const SeleteWrapper = styled.select`
  outline: 0;
  overflow: hidden;
  height: 30px;
  color: #555;
  border: 1px solid #ccc;
  padding: 5px 3px 5px 10px;
  border-radius: 10px;
  width: 250px;
  font-size: 1rem;
`;

const TextScale = keyframes`
  from{transform: scale(1.5); }
  to{transform: scale(.5); }
`;

const H1Wrapper = styled.h1`
  margin: 0 auto;
  animation: ${TextScale} infinite 5s linear;
`;

class App extends Component {
  render() {
    console.log(this.props);
    const { state, updateLocale } = this.props;
    const { locale, flag, content } = state;
    return (
      <AppWrapper className="app" isBlack>
        <SeleteWrapper
          value={locale}
          onChange={e => updateLocale(e.target.value)}
        >
          <option value="en-US">English</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
        </SeleteWrapper>
        <CDNFlagIcon code={flag} size={256} />
        <H1Wrapper>{content}</H1Wrapper>
      </AppWrapper>
    );
  }
}

export default App;
