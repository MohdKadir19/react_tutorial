import React from "react";

export const Propsdrilling = () => {
  const user = { name: "Mohd Kadir", email: "mohdkadir19@gmail.com" };
  return (
    <>
      <Parent user={user} />
    </>
  );
};

const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <Grandchild user={user} />;
};

const Grandchild = ({ user }) => {
  return <div>User name : {user.name}</div>;
};
