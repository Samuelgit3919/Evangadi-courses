// import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "../App"

const Header = () => {
    const item = useContext(ThemeContext)
    console.log(item);


    return (
        <header className={`${item}-theme`}>
            <h1>{item} theme</h1>
        </header>
    )
}

export default Header