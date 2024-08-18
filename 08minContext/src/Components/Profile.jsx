import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div color='white'>please login</div>
     return <div> Welcome {user.username}</div>

    
    
}

export default Profile
