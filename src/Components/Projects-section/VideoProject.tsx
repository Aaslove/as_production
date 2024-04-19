
function VideoProject({ src }: { src: string }) {
    return (
        <>
            <video controls
                loop autoPlay muted>
                <source src={src} />
            </video>
        </>
    )
}

export default VideoProject