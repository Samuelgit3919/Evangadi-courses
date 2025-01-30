import React, { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"

const ThemeContext = React.createContext()

export default function App() {

  const [theme, setTheme] = useState('light')
  
  function ToggleTheme() {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}

export { ThemeContext }