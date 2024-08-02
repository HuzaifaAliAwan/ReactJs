import { useState } from "react"

import ProfileCard from "./components/profileCard"
import ProfileEditCard from "./components/profileEditCard"

function App() {

const [profileCardData, setProfileCardData] = useState({
    name: "Name",
    description: "Description",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXh66ZR5-pcHt-LvRPo40zHoCCnzJa_hqzBaO6FSm5pE9j7FMUcD26sIgdOdh-oUILn8&usqp=CAU",
});

function handleDataFromEditProfileCard(data){
  setProfileCardData(data);
}



  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row bg-gray-100 p-4 md:p-16 justify-between">
          <ProfileEditCard dataHandler={handleDataFromEditProfileCard}/>
          <ProfileCard 
              name={profileCardData.name} 
              description={profileCardData.description} 
              picture={profileCardData.picture} 
          />
      </div>
    </>
  )
}

export default App
