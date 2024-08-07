import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {id} = useParams()
  return (
    <div className='bg-gray-700 p-4 text-white text-3xl align-middle text-center'>User: {id}</div>
  )
}

export default User