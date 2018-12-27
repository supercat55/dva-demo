import React from "react";
import { createPortal } from "react-dom";

const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: 50
};

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  border: "1px solid #ccc",
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    document.addEventListener("keyup", this.onkeyUp);

    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.onkeyUp);

    modalRoot.removeChild(this.el);
  }

  onkeyUp = e => {
    if (e.which === 27 && this.props.visible) {
      this.props.onClose();
    }
  };

  render() {
    const modalUI = (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          {this.props.children}
          <div style={footerStyle}>
            <button onClick={e => this.props.onClose()}>Close</button>
          </div>
        </div>
      </div>
    );
    if (!this.props.visible) {
      return null;
    }
    return createPortal(modalUI, this.el);
  }
}

export default Modal;
