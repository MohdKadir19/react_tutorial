import React, { use } from "react";
import ThemeContext from "./ThemeContext";

const ThemeMode = () => {
  //   const { mode, toggleMode } = useContext(ThemeContext);
  // instead use method
  const { mode, toggleMode } = use(ThemeContext);
  return (
    <>
      <div
        className={`h-screen w-screen flex justify-center items-center ${
          mode === "light" ? " bg-white" : "bg-black"
        }`}
      >
        <button
          onClick={toggleMode}
          className="bg-sky-500 hover:bg-sky-700 p-5 rounded-xl"
        >
          {mode === "light" ? "Switch to Dark Mode" : " Switch to Light Mode"}
        </button>
      </div>
    </>
  );
};

export default ThemeMode;
