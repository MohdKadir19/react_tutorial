import React, { memo, useRef } from "react";

const Count = () => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <>
      <p>{renderCount.current++} Time(s)</p>
    </>
  );
};

export default memo(Count);
