import React, { useId } from "react";

const Index = () => {
  //   const usernameId = useId();
  //   const emailId = useId();
  //   return (
  //     <>
  //       <form>
  //         <div>
  //           <label htmlFor={usernameId}>Username:</label>
  //           <input id={usernameId} type="text" />
  //         </div>
  //         <div>
  //           <label htmlFor={emailId}>Email:</label>
  //           <input
  //             id={emailId}
  //             type="email
  //           "
  //           />
  //         </div>
  //       </form>
  //     </>
  //   );

  const id = useId();
  return (
    <form>
      <div>
        <label htmlFor={id + "usernameId"}>Username:</label>
        <input id={id + "usernameId"} type="text" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Password:</label>
        <input id={id + "passwordId"} type="password" />
      </div>
    </form>
  );
};

export default Index;
