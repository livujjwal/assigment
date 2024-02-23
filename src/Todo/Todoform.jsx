import React, { useState } from "react";

const Todoform = ({ props }) => {
  const { todoList, setTodoList, count, setCount } = props;
  console.log(todoList);
  const [title, setTitle] = useState("");
  function handleAdd() {
    let newCount = count + 1;
    setCount(newCount);
    setTodoList([
      ...todoList,
      { title: title, id: count, done: false, like: 1 },
    ]);
    setTitle("");
  }
  return (
    <div>
      <input
        className="border outline-none gap-4 flex"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Todoform;
