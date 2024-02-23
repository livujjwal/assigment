import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Theme;
