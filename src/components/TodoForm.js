import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit }) => {
  console.log("rending form");
  const { resetValue, ...text } = useInputValue("");
  console.log(text);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input type="text" {...text} />
    </form>
  );
};
