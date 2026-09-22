import React from "react";

const PostLayout = ({ children }) => {
  return (
    <div>
      <section>
        <h1>fixed portion of blog layout</h1>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default PostLayout;
