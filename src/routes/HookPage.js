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

const userFetch = (url, count) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 第二个参数改变时才会触发，如果第二个参数为空[], 只执行didmonut
  useEffect(
    () => {
      console.log(`render ${count}`);

      (async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        setData(item);
        setLoading(false);
      })();
    },
    [count]
  );

  return {
    data,
    loading
  };
};

const HookPage = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(`render ${count}`);

  //   document.title = `You clicked ${count} times`;

  //   (async () => {
  //     const response = await fetch("https://randomuser.me/api/");
  //     const data = await response.json();
  //     const [item] = data.results;
  //     setPerson(item);
  //   })();
  // }, []);
  const { data, loading } = userFetch("https://randomuser.me/api/", count);

  return (
    <div>
      <p>
        You clicked <strong>{count}</strong> times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
      <hr />
      <EmojiGenerator />
      <hr />
      <TokenApp setToken={this.setToken} />
    </div>
  );
};

export default connect()(HookPage);
