var apiUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938";

var publicKey = "3a0831b3a338e3e8018a4bb3175efe3a";
var privateKey = "276c4b2db7559aa093e8754ce510f4ea31ad2da4";
var hashValue = "02e6893f2e967cff388b27e4a61d3938";
var ts = new Date().getTime();
console.log(apiUrl);

var heroCount;
var teamValue;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'pQKYN-yR2oM',
    'startSeconds': 44,
    'endSeconds': 49,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

//  On screenload:
//      -   3 x 3 layout of random superhero cards
//      -   on click or hover, short video of specific superhero
//      -   video goes away, reveals hero pic,= question, and multiple choice
//      -   user clicks answer, card flips and reveals answer
//      -   user then wins/loses said hero

/*
func randomQuestion(){
    question randomizer
}

func saveHeroes(){
    if hero is won from correct answer, it is saved to 
        local storage
}

func getQuestion(){
    get random question object from array of questions
    loop over choices
    create new button for each multiple choice answer
    display on hero card
}

function questionClick(){
    check to see if clicked element is a button
    check to see if user guessed wrong
        -   penalize user, remove hero
        -   otherwise, award user hero
            -   update player's hero count and cumulative hero value
    inform user of question outcome
    check to see if we're run out of questions
}

function endQuiz(){
    show end screen
    show final score
    show win/lose youtube video
}



event handlers here
*/