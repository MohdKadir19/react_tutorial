import React, { useState } from "react";

const NotUseMethod = () => {
  const [ApiData, setApiData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => setApiData(data));
  return (
    <>
     <ul>
        {ApiData.map((item) => (
          <li key={item.id}>{item.title}</li> 
        ))}
     </ul>
    </>
  );
};

export default NotUseMethod;
