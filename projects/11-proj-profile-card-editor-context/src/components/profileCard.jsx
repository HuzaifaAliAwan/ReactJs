import { ProfileContext } from "../context/profileContext/profileContext";
import { useContext } from "react";

const ProfileCard = ({ name, description, picture }) => {
  const { profileData } = useContext(ProfileContext);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md shadow-lg">
      <img
        src={profileData.picture}
        alt={profileData.name}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{profileData.name}</h1>
        <p className="mt-2 text-sm text-gray-300">{profileData.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
