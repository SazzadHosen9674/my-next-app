import React from "react";

const Page = async ({ params }) => {
      const { id } = await params;

  return (
    <div>
      <p>products id: {id}</p>
    </div>
  );
};

export default Page;
