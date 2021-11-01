import { IProfile } from "../../interfaces/IProfile";
import Image from "next/image";
import { FaShare, FaCog } from "react-icons/fa";

const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <FaCog />
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
        <FaShare />
        <span>Share</span>
      </button>
    </div>
  );
};

export default Profile;
