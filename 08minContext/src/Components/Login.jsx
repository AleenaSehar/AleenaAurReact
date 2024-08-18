import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const {setUser} = useContext(UserContext)
    

    const handlesubmit =(e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
    <div>
        <h2>login</h2>
        <input type = 'text' 
        onChange={(e) => setUsername(e.target.value)} value={username} placeholder='username'/>

        {" "}
        <input type='password'
         onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password'/>

        <button onClick={handlesubmit}> Submit</button>
    </div>
    )
}

export default Login
