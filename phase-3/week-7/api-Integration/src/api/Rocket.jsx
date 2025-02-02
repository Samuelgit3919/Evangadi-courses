// import React from 'react'

import { useEffect } from "react"
import { useState } from "react"
import './Rocket.css'

const Rocket = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // Set time interval for the spinner loader

        fetch('https://api.spacexdata.com/v3/rockets')
            .then(res => res.json())
            .then(response => {
                setData(response)
                setLoading(false) // Uncommented to stop loading when data is fetched
            })

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, [])

    return (
        <div className="card-container">
            {
                loading ? <div className="loader"></div>
                    :
                    data.map((item) => (
                        <div className="card" key={item.index}>
                            <h1>{item.country}</h1>
                            <p>{item.description}</p>
                            <p>{item.first_flight}</p>
                        </div>
                    ))}
        </div>
    )
}

export default Rocket