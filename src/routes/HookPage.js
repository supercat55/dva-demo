import React, { Component, useState, useEffect } from "react";
import { connect } from "dva";
// import styles from "./IndexPage.css";
const emojiSet = ["🎃", "👻", "🧟", "😱", "👽", "💀"];

const EmojiGenerator = () => {
  const [emoji, setEmoji] = useState(emojiSet[0]);

  const generateEmoji = () => {
    let randomIndex = Math.floor(Math.random() * emojiSet.length);
    let randomEmoji = emojiSet[randomIndex];

    setEmoji(randomEmoji);
  };
  return (
    <div>
      <span className="emoji" role="img" aria-label="emoji">
        {emoji}
      </span>
      <button className="medium-btn" onClick={generateEmoji}>
        Generate
      </button>
    </div>
  );
};

class TokenForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { setToken } = this.props;
    const token = this.tokenInput.value;
    if (token) {
      setToken(token);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="Enter your Github token"
          ref={input => {
            this.tokenInput = input;
          }}
        />
      </form>
    );
  }
}

const TokenApp = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  //componentDidMount,componentDidUpdate会触发
  useEffect(() => {
    sessionStorage.setItem("token", token);
  });

  const removeItem = () => {
    setToken("");
    sessionStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Hello</h1>
      {token ? token : <TokenForm setToken={setToken} />}
      <button onClick={removeItem}>clear token</button>
    </div>
  );
};

const HookPage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("aa");

  // 第二个参数改变时才会触发，如果第二个参数为空[], 都不触发
  useEffect(
    () => {
      console.log(`render ${count}`);

      document.title = `You clicked ${count} times`;
    },
    [count]
  );

  useEffect(() => {
    console.log(`render Name is ${name}`);
  });

  return (
    <div>
      <p>
        You clicked <strong>{count}</strong> times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName("bbb")}>Click me</button>
      <hr />
      <EmojiGenerator />
      <hr />
      <TokenApp setToken={this.setToken} />
    </div>
  );
};

export default connect()(HookPage);
