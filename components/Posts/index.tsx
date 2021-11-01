import Image from "next/image";
import { IPost } from "../../interfaces/IPost";
import { FaEllipsisH } from "react-icons/fa";

const Post: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-8 py-4">
        <div className="flex text-black text-1xl font-medium items-center justify-between w-full">
          <div className="flex w-full">{posts.length + " Endorsements"}</div>
          <div className="flex justify-between w-20">
            <span>Edit</span>
            <FaEllipsisH className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 px-8 gap-2">
        {posts?.map((post) => (
          <div key={post.photo}>
            <Image
              src={post.photo}
              alt={post.title}
              layout="responsive"
              width={150}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />

            <div className="flex flex-col items-start justify-center w-full">
              <span className="text-black text-lg font-medium">
                {post.title}
              </span>
              <span className="text-gray-200 text-base font-medium">
                {post.category}
              </span>
              <span className="text-gray-200 text-sm font-medium">
                {post.views + " views"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
