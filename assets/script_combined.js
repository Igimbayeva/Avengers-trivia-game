// Function to hide the current page and redirect to video page
function assembleTeam() {
    window.location.href = 'video.html';
}

// Load YouTube IFrame Player API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Function to create an <iframe> (and YouTube player) after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '720',
        width: '1280',
        videoId: 'pQKYN-yR2oM',
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'mute': 1  // Autoplay and mute the video without having to press play button 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Function called when the player is ready
function onPlayerReady(event) {
    // Seek to the desired time (22 seconds)
    player.seekTo(22);
    // Start playing the video
    player.playVideo();
}

// Function called when the player's state changes
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 28000); // Stop the video after 28 seconds
        done = true;
    }
}

// Function to stop the video and redirect to the next page
function stopVideo() {
    player.stopVideo();
    window.location.href = 'card-screen.html';
}