import Image from "next/image";
import { useEffect } from "react";
import { IPost } from "../../interfaces/IPost";

const Post: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {posts?.map((post) => (
        <div key={post.photo}>
          <Image src={post.photo} alt={post.title} width={300} height={500} />
          <span>{post.title}</span>
          <span>{post.category}</span>
          <span>{post.views + " views"}</span>
        </div>
      ))}
    </div>
  );
};

export default Post;
