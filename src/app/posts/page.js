import Link from "next/link";
import React from "react";
import styles from "./Posts.module.css"

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts",{
   cache: 'no-store'
  });
  const posts = await res.json();
  console.log(posts)
  return (
    <div className="w-full">
      <h1 className={styles.header_text}>Total posts: {posts.length}</h1>
{
    posts.map((post)=> (
        <div key={post.id} className="card w-96 bg-primary text-primary-content w-[70%] my-5 mx-auto">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p> Likes: {post.likesCount}</p>
          <div className="card-actions justify-end">
          <Link href={`/posts/${post.id}`}>
          <button className="btn">See More</button>
          </Link>
          </div>
        </div>
      </div>
    ))
}
    </div>
  );
};

export default PostsPage;
