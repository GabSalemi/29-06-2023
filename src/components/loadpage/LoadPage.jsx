import "./index.css"

const LoadPage = () => {
    return <div className="load__page">
        <div className="video__container">
            <video src="https://player.vimeo.com/external/465321874.sd.mp4?s=391aa19d257d98905da234504204bf24422257f1&profile_id=164&oauth2_token_id=57447761" autoPlay muted playsInline loop></video>
        </div>
        <div className="text__container">
            <h1>BeerIpsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>Our products</span>
        </div>

    </div>
}

export default LoadPage;