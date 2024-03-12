// Load YouTube IFrame Player API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Function to create an <iframe> (and YouTube player) after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '780',
        width: '1280',
        videoId: 'pQKYN-yR2oM',
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'mute': 1  // Autoplay and mute the video
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Function called when the player is ready
function onPlayerReady(event) {
    // No need to seek to a specific time, as autoplay will start from the beginning
}

// Function called when the player's state changes
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 40500); // Stop the video after 40.5 seconds
        done = true;
    }
}

// Function to stop the video
function stopVideo() {
    player.stopVideo();
}
