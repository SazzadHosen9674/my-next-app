import React from "react";

const userDetailPage = async ({ params }) => {
  const { userid } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`,
  );
  const user = await res.json();
  console.log(user);
  return (
    <div>
      <h2>helo </h2>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h2>{user.id}</h2>
    </div>
  );
};

export default userDetailPage;
