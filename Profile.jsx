import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);

  if(!user) return <h1>Not logged In</h1>
  return (
    <div>
      <div><div>User Name: {user.username} </div></div>
    </div>
  )
}

export default Profile
