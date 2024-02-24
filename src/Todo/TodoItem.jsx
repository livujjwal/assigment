import React from "react";

const TodoItem = ({ props }) => {
  const { todoList, setTodoList } = props;
  function handleDelete(todoId) {
    const newTodo = todoList.filter(({ id }) => id != todoId);
    setTodoList(newTodo);
  }
  function handleComplete(todoId) {
    const newTodo = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: true };
      }
      return todo;
    });
    setTodoList(newTodo);
  }
  function handleLike(todoId) {
    const newTodo = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, like: todo.like + 1 };
      }
      return todo;
    });
    setTodoList(newTodo);
  }
  return (
    <div>
      {todoList.length != 0 &&
        todoList.map(({ title, id, done, like }) => (
          <div
            key={id}
            className={
              done === true
                ? "text-green-700 flex items-center justify-around"
                : "flex items-center justify-around"
            }
          >
            <h1>{title}</h1>
            <p>like :{like}</p>
            <button onClick={() => handleLike(id)}>Like</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleComplete(id)}>Done</button>
          </div>
        ))}
    </div>
  );
};

export default TodoItem;
