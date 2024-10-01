import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeChangeBtn from "./components/ThemeChangeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    

    // Remove any existing theme classes
    html.classList.remove("light", "dark");

    // Add the new theme class
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div className="dark:bg-[#282828] dark:text-white text-black w-full h-screen fixed top-0 left-0 bg-[#b6b6b6]">
        <div className=" absolute w-[10px] top-2 right-[60px]">
          <ThemeChangeBtn />
        </div>
        <div className="w-full h-screen  flex justify-center items-center">
          <Card classList=" rounded" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
