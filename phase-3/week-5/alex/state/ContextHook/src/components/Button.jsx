// import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "../App"

const Button = () => {
    const { theme, ToggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={ToggleTheme} className={`${theme}-theme`}>Switch theme</button>
    )
}

export default Button