import React, { Component } from "react";
import { CDNFlagIcon } from "react-flag-kit";
import styled, { keyframes } from "styled-components";

import Modal from "./Modal";

const AppWrapper = styled.div`
  background-color: ${props => (props.isBlack ? "#fff" : "red")};
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
  /* animation: ${TextScale} infinite 5s linear; */
`;

class App extends Component {
  state = {
    visible: false
  };

  render() {
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

        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          show Modal
        </button>
        <Modal
          visible={this.state.visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
        >
          This message is from Modal
        </Modal>
      </AppWrapper>
    );
  }
}

export default App;
