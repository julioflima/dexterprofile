import Image from "next/image";
import { IPost } from "../../interfaces/IPost";
import { FaShare, FaEllipsisH } from "react-icons/fa";

const Post: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <div>
          {posts.length}
          <span>{" Endorsements"}</span>
        </div>
        <div>
          <span>Edit</span>
          <FaEllipsisH />
        </div>
      </div>
      <div>
        {posts?.map((post) => (
          <div key={post.photo}>
            <div>
              <Image
                src={post.photo}
                alt={post.title}
                width={300}
                height={500}
              />
              <div>
                <FaShare />
              </div>
            </div>
            <span>{post.title}</span>
            <span>{post.category}</span>
            <span>{post.views + " views"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
