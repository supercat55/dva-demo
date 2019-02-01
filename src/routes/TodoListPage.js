import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import { useImmerReducer } from "use-immer";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );

  return (
    <div>
      <TodoForm
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleComplete(index)}
            style={{ textDecoration: item.complete ? "line-through" : "" }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
