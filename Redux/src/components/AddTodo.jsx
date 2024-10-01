import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo)); // Pass the todo text directly
      setTodo(""); // Clear the input field after adding
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex gap-2  border-none focus:outline-none focus:border-none "
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
        className="border-2 p-2 rounded-md flex-1 outline-none  dark:bg-[#292929]  border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
