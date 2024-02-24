import React, { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addNewTodo": {
      return [action.payload, ...state];
    }
    case "isDone": {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
      });
    }
    default:
      return state;
  }
};

const TodoWithReducer = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(todoReducer, []);
  return (
    <div>
      <div className="mx-auto p-4">
        <input
          className="outline-none border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({
              type: "addNewTodo",
              payload: { title: title, id: count, isDone: false },
            });
            setTitle("");
            let increCount = count + 1;
            setCount(increCount);
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {state.map(({ title, id, isDone }) => (
          <li key={id} className={isDone === true && "text-green-800"}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => dispatch({ type: "isDone", payload: id })}
            />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWithReducer;
