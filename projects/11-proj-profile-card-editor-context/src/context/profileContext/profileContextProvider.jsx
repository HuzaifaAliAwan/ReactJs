import { ProfileContext } from "./profileContext";
import { useState } from "react";

export const ProfileContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: "Name",
    description: "Description",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXh66ZR5-pcHt-LvRPo40zHoCCnzJa_hqzBaO6FSm5pE9j7FMUcD26sIgdOdh-oUILn8&usqp=CAU",
  });
  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};
