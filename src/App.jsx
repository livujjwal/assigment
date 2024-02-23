import { useState } from "react";
import ThemeContext from "./utils/ThemeContext";
import Body from "./Todo/Body";

function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Body />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
