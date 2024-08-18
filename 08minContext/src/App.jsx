

import './App.css'

import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextprovider from './Context/UserContextProvider'


function App() {


  return (
    <UserContextprovider>
    <h1 color='orange'>React with chai</h1>
    <Login/>
    <Profile/>

    </UserContextprovider>
  )
}

export default App
