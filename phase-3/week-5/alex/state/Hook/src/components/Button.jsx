// import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../App"



export default function Button() {
    const { theme, ToggleTheme } = useContext(ThemeContext)


    return (
        <button onClick={ToggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}