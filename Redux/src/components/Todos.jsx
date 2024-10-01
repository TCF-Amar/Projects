import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo, toggleTodo } from "../features/todo/todoSlice";
import DeleteIconSvg from "../assets/Icons/DeleteIconSvg";

function Todos() {
  const dispatch = useDispatch();

  // Access todos from the Redux state
  const todos = useSelector((state) => state.todo.todos) || [];

  const handleUpdate = (id, updatedText) => {
    if (updatedText.trim()) {
      dispatch(updateTodo({ id, text: updatedText }));
    }
  };

  return (
    <div>
      <ul className="max-h-[40vh]">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center p-2 rounded-lg  dark:bg-[#3c3c3ccd] "
            >
              {/* Checkbox to toggle completion */}
              <input
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo.id))}
                checked={todo.completed}
                className="mr-2"
              />

              {/* Input for editing todo text */}
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleUpdate(todo.id, e.target.value)}
                className={`border-2 p-2 w-full rounded-md bg-transparent border-none outline-none 
                     py-1 px-2 dark:text-white ${
                       todo.completed ? "line-through dark:text-red-300" : ""
                     }`}
              />

              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
              >
                <DeleteIconSvg/>
              </button>
            </li>
          ))
        ) : (
          <p>No todos available.</p> // Display message if no todos are present
        )}
      </ul>
    </div>
  );
}

export default Todos;
