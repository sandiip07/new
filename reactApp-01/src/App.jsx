import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const infun = () => {
    setCount(()=>{
      console.log(count++)
    })
    
  }

  return (
    <>
      <h1>sandeep</h1>
      <button 
      onClick={infun}
      >click me {count}</button> 
    </>
  )
}

export default App
