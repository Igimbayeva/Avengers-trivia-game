var apiUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938";

var publicKey = "3a0831b3a338e3e8018a4bb3175efe3a";
var privateKey = "276c4b2db7559aa093e8754ce510f4ea31ad2da4";
var hashValue = "02e6893f2e967cff388b27e4a61d3938";
var ts = new Date().getTime();
console.log(apiUrl);

var heroCount;
var teamValue;

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