import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/themeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("Light")

  const LightTheme= () => {
    setThemeMode("Light")
  } 
  const darkTheme= () => {
    setThemeMode("dark")
  }

  // actual change in theme explained

  useEffect(() => {
    document.querySelector('html'). classList.remove("Light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, LightTheme, darkTheme}}>
    
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>

  )
}

export default App
