import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import ThemeChangeBtn from "./components/ThemeChangeBtn";

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center dark:bg-black dark:text-white ">
        <div className=" fixed top-3 right-4">
          <ThemeChangeBtn />
        </div>
        <div className="md:w-2/4 container  relative   p-2  ">
          <div className=" relative ">
            <AddTodo />
          </div>
          <br />
          <div className="  overflow-hidden  overflow-y-auto p-2 ">
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
