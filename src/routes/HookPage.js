import React, { useState, useEffect } from "react";
import { connect } from "dva";
// import styles from "./IndexPage.css";

const HookPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });

  return (
    <div>
      <p>
        You clicked <strong>{count}</strong> times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default connect()(HookPage);
