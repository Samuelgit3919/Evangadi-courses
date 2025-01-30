// import React from 'react'

import { useState } from "react"
import styles from './Header.module.css'

const Header = () => {
    const [ahadu, setAhadu] = useState(true)
    // console.log(aha);
    const [number, setNumber] = useState(0)


    function handleUpdateNumber() {
        setAhadu(!ahadu)
    }

    function handleIncrement() {
        setNumber(number + 1)
    }

    function handleDecrement() {
        if (number > 0) {
            setNumber(number - 1)
        }
    }



    return (
        <div>
            <button className={ahadu === true ? styles.btn : styles.btn_2} onClick={handleUpdateNumber}>{ahadu === true ? "Completed" : "Mark Complete"}</button><br /><br />
            <button onClick={handleDecrement} >-</button>
            <span>{number}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Header