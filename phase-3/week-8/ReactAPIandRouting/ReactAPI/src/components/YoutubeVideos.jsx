// import React from 'react'
import { useEffect, useState } from "react"

const YoutubeVideos = () => {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)

    // api_key = AIzaSyDqH2-HgN8O6if_lxRrCkPker183W-3laQ
    // channel_id = UCE_M8A5yxnLfW0KghEeajjw
    // full_link = https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&order=date&key=AIzaSyDqH2-HgN8O6if_lxRrCkPker183W-3laQ

    useEffect(() => {
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyDqH2-HgN8O6if_lxRrCkPker183W-3laQ')
            .then(res => res.json())
            .then(res => {
                const realItem = res.items
                setVideos(realItem)
                setLoading(false)
            })

    }, [])
    return (
        <>
            <main>
                <h1>Apple API Videos</h1>
                <div className="card-wrapper">
                    {loading ? <div className="loader"></div> :
                        videos.map((video) => (
                            <div className="card" key={video.id}>
                                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
                                    <img src={video.snippet.thumbnails.high.url} alt="" />
                                </a>
                                <h3>{video.snippet.title}</h3>
                                <p>{video.snippet.description}</p>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>

    )
}

export default YoutubeVideos