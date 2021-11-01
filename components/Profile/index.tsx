import { IProfile } from "../../interfaces/IProfile";
import Image from "next/image";
import { FaShare, FaCog } from "react-icons/fa";

const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <div className=" flex-col items-center flex-start h-30 w-full">
      <div className="relative z-0 ">
        <div className="relative z-1 h-34 w-full text-3xl ">
          <div className="absolute h-24 z-2 w-full flex flex-col items-end text-white pr-4 pt-4 text-4xl bg-gray-200">
            <FaCog />
          </div>
        </div>

        <div className="pt-4 mb-4 flex flex-col items-center h-40 w-full  ">
          <Image
            src={profile.photo_url}
            alt={profile.name}
            width={144}
            height={144}
            className="shadow-xs rounded-full bg-orange border-solid border-8 border-orange"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-30 w-full px-8">
        <h1 className="text-black text-2xl font-medium">{profile.name}</h1>
        <h2 className="text-gray-400 text-base font-medium">
          {"(" + profile.at + ")"}
        </h2>
        <h2 className="text-gray-400 text-base font-medium">
          {profile.company}
        </h2>
        <h3 className="text-gray-300 text-sm">{profile.location}</h3>
        <button className="my-2 rounded-full h-10 w-full flex items-center justify-center text-white bg-orange ">
          <FaShare />
          <span className="pl-4">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
