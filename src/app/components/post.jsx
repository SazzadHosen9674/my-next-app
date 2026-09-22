import Link from "next/link";
import React from "react";

const PostDat = async ({ post }) => {
  const { title, excerpt, id } = await post;
  return (
    <div>
      <div className="card card-dash bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{excerpt}</p>
          <div className="card-actions justify-end">
            <Link href={`/blogs/${id}`}>
            
              <button className="btn btn-primary">Show more</button>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDat;
