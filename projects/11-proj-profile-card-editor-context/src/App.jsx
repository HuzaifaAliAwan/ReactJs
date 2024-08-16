import ProfileCard from "./components/profileCard";
import ProfileEditCard from "./components/profileEditCard";

import { ProfileContextProvider } from "./context/profileContext/profileContextProvider";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row bg-gray-100 p-4 md:p-16 justify-between">
        <ProfileContextProvider>
          <ProfileEditCard />
          <ProfileCard />
        </ProfileContextProvider>
      </div>
    </>
  );
}

export default App;
