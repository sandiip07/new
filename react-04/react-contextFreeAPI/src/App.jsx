
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider >

        <h1 className='bg-yellow-500 text-blue-700 text-3xl'> Context Free API </h1>
        <Login/>
        <Profile/>
      
    </UserContextProvider>
  )
}

export default App
