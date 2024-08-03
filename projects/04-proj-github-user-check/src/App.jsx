import { useState, useEffect, useCallback } from 'react'


function App() {

  const [name, setName] = useState('Name')
  const [picture, setPicture] = useState('')
  const [location, setLocation] = useState('Random Location')
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [profileLink, setProfileLink] = useState(null)
  const [userName, setUserName] = useState('')

  const getGithubData = useCallback(
    async () => {

      console.log("i am running");
      try {
        let url = `https://api.github.com/users/${userName}`
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)

        setName(data.name)
        setPicture(data.avatar_url)
        setLocation(data.location)
        setFollowers(data.followers)
        setFollowing(data.following)
        setProfileLink(data.url)


      } catch (error) {
        console.log(error);
      } finally {
        console.log("nothing");
      }


    },
    [
      userName
    ]
  )

  useEffect(
    () => {
      if (userName) getGithubData();
    },
    [userName]
  )

  return (
    <>
      <div className='bg-white w-auto m-auto'>
        <div>
          <label htmlFor="username">User Name: </label>
          <input
            className='border rounded-lg outline-none'
            type="text"
            name="username"
            id="username"
            onChange={(e) => { setUserName(e.target.value) }}
          />
        </div>
        <div>
          <h1>{name}</h1>
          <img src={picture} alt="" srcset="" />
          <p>Location: {location}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>

          <a href={profileLink}><button>View Profile</button></a>

        </div>
      </div>

    </>

  )
}

export default App
