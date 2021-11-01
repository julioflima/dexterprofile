import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import { IPost } from "../../interfaces/IPost";
import { IProfile } from "../../interfaces/IProfile";
import PostsService from "../../services/PostsService";
import ProfileService from "../../services/ProfileService";

const Home: React.FC<{ profile: IProfile; postsInitial: IPost[] }> = ({
  profile,
  postsInitial,
}) => {
  const [posts, setPosts] = useState<IPost[]>(postsInitial);

  if (!profile) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Dexter Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile profile={profile} />
      <Posts posts={posts} />
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/julioflima"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Julio Lima
        </a>
      </footer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["@julioflima", "@darryldex"].map((nick) => ({
    params: { nick },
  }));

  console.log(JSON.stringify(paths));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { nick } = params as { nick: string };

  const profile = await new ProfileService().get(nick);
  const postsInitial = await new PostsService().get(nick);

  const oneDayInSeconds = 60 * 60 * 24;

  return {
    props: {
      profile,
      postsInitial,
    },
    revalidate: oneDayInSeconds,
  };
};

export default Home;
