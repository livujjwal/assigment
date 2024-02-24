import { useState } from "react";
import ThemeContext from "./utils/ThemeContext";
import Body from "./Todo/Body";
import TodoWithReducer from "./useReducer";

function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <TodoWithReducer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
