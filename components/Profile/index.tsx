import { IProfile } from "../../interfaces/IProfile";
import Image from "next/image";
import { Share, Cog } from "@styled-icons/fa-solid";

const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Cog />

      <Image
        src={profile.photo_url}
        alt={profile.name}
        width={500}
        height={500}
      />
      <span>{profile.name}</span>
      <span>{"(" + profile.at + ")"}</span>
      <span>{profile.company}</span>
      <span>{profile.location}</span>
      <button>
        <Share />
        <span>Share</span>
      </button>
    </div>
  );
};

export default Profile;
