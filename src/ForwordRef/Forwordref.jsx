import React, { forwardRef, useId, useRef } from "react";

const Forwordref = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value.password.current.value);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <ForwordrefInput label={username} ref={username} />
        <ForwordrefInput label={password} ref={password} />
      </form>
    </>
  );
};

export default Forwordref;

const ForwordrefInput = forwardRef((props, ref) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});
