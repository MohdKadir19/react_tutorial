import React, { useContext } from "react";
import MyContext from "./MyContext";

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      {/* Hello my name is {value}, and email: {setValue} */}
      <p>{value}</p>
      <button onClick={() => setValue("Context Updated")}>Click me</button>
    </div>
  );
};

export default ChildComponent;
