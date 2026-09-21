"use client";

const Error = ({ Error, reset }) => {
  return (
    <div>
      <h1>something went wrong error  </h1>
      <button className="bg-red-600" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
};

export default Error;
