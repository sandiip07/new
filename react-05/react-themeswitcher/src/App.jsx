
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const ligthTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actuall change in theme

  useEffect(() => {

    document.querySelector('html').classList.remove("ligth", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (

    <ThemeProvider value={{ themeMode, ligthTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*theme buttons*/}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*cards*/}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>



  )
}

export default App
