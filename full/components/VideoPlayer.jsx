import React from 'react'

function VideoPlayer() {
    return (
        <div>
            <video class="w-full" controls>
            <source src="https://youtu.be/hGc-HlFonvo?si=WU4ANMTog7KgJ6kl" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        </div>
    )
}

export default VideoPlayer