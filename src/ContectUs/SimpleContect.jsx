import React, { useState } from "react";

const SimpleContect = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleFormSubmit = (e) =>{
      e.preventDefault();
     const setData = {
        fullname,
        email,
        message
      }
      console.log(setData);
      
  }

  return (
    <>
      <div className="flex  flex-col justify-center px-6 py-6 lg:px-8 w-2/6 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Contect Us
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleFormSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="fullName"
                className=" text-left block text-sm/6 font-medium text-gray-900"
              >
                Fullname
              </label>
              <div className="mt-1">
                <input
                  name="fullname"
                  type="text"
                  required
                  onChange={(event) => setFullname(event.target.value)}
                  value={fullname}
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className=" text-left block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className=" text-left block text-sm/6 font-medium text-gray-900"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SimpleContect;
