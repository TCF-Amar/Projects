import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "../features/theme/themeSlice";

function ThemeChangeBtn() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.themeMode);

  // useEffect to apply the theme to the document body and save theme mode to localStorage
  useEffect(() => {
    document.body.className =
      themeMode === "dark" ? "dark": "light";
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const themeChange = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        className="theme-switch__checkbox"
        onChange={themeChange}
        checked={themeMode === "dark"}
      />
      <div className="theme-switch__container">
        <div className="theme-switch__clouds"></div>
        <div className="theme-switch__stars-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144 55"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447..."
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="theme-switch__circle-container">
          <div className="theme-switch__sun-moon-container">
            <div className="theme-switch__moon">
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}

export default ThemeChangeBtn;
