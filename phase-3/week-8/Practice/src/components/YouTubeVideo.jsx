// import React from 'react'

import { useEffect, useState } from "react"

const YouTubeVideo = () => {
    const [videos, setVideo] = useState([])

    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&key=AIzaSyCmLJyNCJ3umKCbVW6OVpeceMprWgiatGE")
            .then(res => res.json())
            .then(data => {
                const realValue = data.items
                // console.log(videos);

                setVideo(realValue)
            })
    }, [])

    return (
        <div>
            {videos.map((video) => (
                <div key={video.id}>
                    {/* <a href={}></a> */}
                    {/* <img src={video.snippet?.thumbnails.high.url} alt="" /> */}
                    <h3>sami</h3>
                    <p>sami</p>
                </div>
            ))}
        </div>
    )
}

export default YouTubeVideo