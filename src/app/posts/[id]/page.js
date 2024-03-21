import React from "react";

const DetailPage = async ({ params }) => {
  // console.log(params.id)

  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  return (
    <div className="card w-96 bg-primary text-primary-content w-[70%] my-5 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <p> Likes: {post.likesCount}</p>
      </div>
    </div>
  );
};

export default DetailPage;
