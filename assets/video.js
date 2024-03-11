// Load YouTube Iframe API asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
    // Initialize the YouTube player with specified settings
    player = new YT.Player('player', {
        height: '780',
        width: '1280',
        videoId: 'pQKYN-yR2oM', // Replace with your actual video ID
        playerVars: {
            'autoplay': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // You can do something when the player is ready
}

function onPlayerStateChange(event) {
    // You can do something when the player state changes
}
