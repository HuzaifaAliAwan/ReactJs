import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState('')

    // useEffect(() => {
    //   fetch('https://api.github.com/users/huzaifaaliawan')
    //   .then((res)=> res.json())
    //   .then((data)=>{
    //     console.log(data);
    //     setdata(data);
    //   })
    
      
    // }, [])
    
    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl flex flex-col items-center'>
            Github Followers: {data.followers}
            <img 
            src={data.avatar_url} 
            alt="Person " 
            width={300}
            className='rounded-full'
            />
        </div>

    )
}
export default Github

export const GithubInfoLoader = async ()=>{
    const data =await fetch('https://api.github.com/users/huzaifaaliawan')
    return data.json()
}