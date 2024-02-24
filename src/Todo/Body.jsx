import React, { useState } from "react";
import Todoform from "./Todoform";
import TodoItem from "./TodoItem";

const Body = () => {
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <div className="m-2 p-2">
      <Todoform props={{ todoList, setTodoList, count, setCount }} />
      <TodoItem props={{ todoList, setTodoList }} />
    </div>
  );
};

export default Body;
