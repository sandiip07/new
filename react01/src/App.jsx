import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const infun = () => {
      count = count+1;
      setCount(count)
      console.log(count)
    
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
