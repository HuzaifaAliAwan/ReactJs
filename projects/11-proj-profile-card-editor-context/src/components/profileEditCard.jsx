import { useState, useContext, useEffect } from "react";

import { ProfileContext } from "../context/profileContext/profileContext";

const ProfileEditCard = () => {
  const { setProfileData } = useContext(ProfileContext);

  const [name, setName] = useState("Name");
  const [description, setDescription] = useState("Description");
  const [picture, setPicture] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXh66ZR5-pcHt-LvRPo40zHoCCnzJa_hqzBaO6FSm5pE9j7FMUcD26sIgdOdh-oUILn8&usqp=CAU"
  );

  useEffect(() => {
    setProfileData({ name, description, picture });
  }, [name, description, picture]);

  return (
    <section className="shadow-lg rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Edit Profile
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Edit the information below?{" "}
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder={name}
                      id="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder={description}
                      id="description"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="picture"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Picture Link{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder={picture}
                      id="picture"
                      onChange={(e) => {
                        setPicture(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEditCard;
