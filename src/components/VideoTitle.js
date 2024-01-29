const VideoTitle = ({original_title, overview}) => {
    return (
        <div>
            <span className="text-4xl text-white font-bold">{original_title}</span>
            <span>{overview}</span>
        </div>
    )
}
export default VideoTitle;