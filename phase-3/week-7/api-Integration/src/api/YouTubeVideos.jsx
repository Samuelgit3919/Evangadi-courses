import { useState, useEffect } from 'react';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50000);

    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=10&order=date&key=AIzaSyBYyOYldQA8VJ_dv-c4js1iawXj-MZkW04')
      .then(res => res.json())
      .then(res => {
        setVideos(res.items)
        setLoading(false)
      })
    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      <h1 className='title'>Evangadi Videos</h1>
      <div className="youtube-container">
        {
          loading ? <div className='loader'></div> :
            videos.map((video) => (
              <div key={video.id.videoId} className="youtube-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet.title}
                ></iframe>
              </div>
            ))}
      </div>
    </>
  );
};

export default YouTubeVideos;
