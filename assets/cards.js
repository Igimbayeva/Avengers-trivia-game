var ts = "1681802982683";
var publicKey = "3a0831b3a338e3e8018a4bb3175efe3a";
var hashVal = "02e6893f2e967cff388b27e4a61d3938";


var heroNameEl = document.getElementById('hero-name');
var heroImageEl = document.getElementById('hero-image');
var heroDescriptionEl = document.getElementById('hero-description');
var currentQuestionj = 0;
var questionsEl = document.getElementById('questions');
var heroQuestionEl = document.getElementById('hero-question');

var score = 0;

var avengerCharacters = [
    {
        name: "Captain America",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=captain%20america&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
        description: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        value: 2,
        question: "Which war did Steve Rogers fight in?",
        choices: [
            "The War of 1812",
            "World War 2",
            "World War Z",
            "The War on Drugs"
        ],
        answer: "World War 2"
    },
    {
        name: "Iron Man",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=iron%20man&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
        description: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
        value: 2,
        question: "What is the real name of Iron Man?",
        choices: [
            "Tony Stank",
            "Ned Stark",
            "Stark Contrast",
            "Tony Stark"
        ],
        answer: "Tony Stark"
    },
    {
        name: "Thor",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=Thor&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
        description: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        value: 3,
        question: "Who is the brother of Thor?",
        choices: [
            "Loki",
            "More",
            "MC Hammer",
            "Ned from IT"

        ],
        answer: "Loki"
    },
    {
        name: "Hulk",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=Hulk&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
        description:  "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        value: 3,
        question: "Who is the love interest of the Hulk?",
        choices: [
            "Tracee Ellis Ross",
            "Betty Ross",
            "Betsy Ross",
            "Bob Ross"
        ],
        answer: "Betty Ross"
    },
    {
        name: "Black Widow",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=black%20widow&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b",
        description: "",
        value: 1,
        question: "What is the nationality of Black Widow?",
        choices: [
            "Wakandan",
            "Belarusian",
            "Russian",
            "She is a Sovereign Citizen"
        ],
        answer: "Russian"
    },
    {
        name: "Hawkeye",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=hawkeye&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b",
        description: "",
        value: 1,
        question: "Who is the best friend of Hawkeye?",
        choices: [
            "Black Widow",
            "Green Lantern",
            "Blue Beetle",
            "Green Arrow"
        ],
        answer: "Black Widow"
    },
    {
        name: "War Machine",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=war%20machine&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "",
        description: "",
        value: 2,
        question: "What military rank does War Machine hold?",
        choices: [
            "Private First Class",
            "A Very Petty Officer",
            "An Officer and a Gentleman",
            "Lieutenant Colonel"
        ],
        answer: "Lieutenant Colonel"
    },
    {
        name: "Falcon",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=falcon&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009",
        description: "With a mental connection to all birds and a suit that gives him wings to fly, The Falcon has been both the partner to Captain America and an Avenger himself. Whether as a super hero or in his secret identity of social worker Sam Wilson, The Falcon dedicates his life to standing up for others.",
        value: 1,
        question: "What is the real name of Falcon?",
        choices: [
            "Owen Wilson",
            "Woodrow Wilson",
            "Sam Wilson",
            "August Wilson"
        ],
        answer: "Sam Wilson"
    },
    {
        name: "Scarlet Witch",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=scarlet%20witch&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
        description: "",
        value: 3,
        question: "How many siblings did Scarlet Witch have?",
        choices:[
            "1",
            "3",
            "5",
            "Unknown"
        ],
        answer: "1"
    },
    {
        name: "Vision",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=vision&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594",
        description: "The metal monstrosity called Ultron created the synthetic humanoid known as the Vision from the remains of the original android Human Torch of the 1940s to serve as a vehicle of vengeance against the Avengers.",
        value: 3,
        question: "Who was the love interest of Vision?",
        choices: [
            "Wanda Maximoff",
            "Morgan le Fay",
            "Minerva McGonagall",
            "Nancy Downs"
        ],
        answer: "Scarlet Witch"

    },
    {
        name: "Ant-Man",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=scott%20lang&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "",
        description: "",
        value: 1,
        question: "Which actor played Ant-Man?",
        choices: [
            "Tom Holland",
            "The ageless Paul Rudd. Long may he reign...",
            "Andy Serkis in a mo-cap suit",
            "Daniel Day-Lewis after living with actual ants"
        ],
        answer: "The ageless Paul Rudd. Long may he reign."
    },
    {
        name: "Spider-Man",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=peter%20parker&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        description: "",
        value: 3,
        question: "What is the name of the uncle of Spider-Man?",
        choices: [
            "Uncle Ben",
            "Uncle Sam",
            "Scar",
            "Uncle Buck"
        ],
        answer: "Uncle Ben"
    },
    {
        name: "Winter Soldier",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=winter%20soldier&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/d/03/5265478293c1e",
        description: "",
        value: 2,
        question: "Which actor played Winter Soldier?",
        choices: [
            "Taron Egerton",
            "Penn Badgley",
            "Sam Claflin",
            "Sebastian Stan"
        ],
        answer: "Sebastian Stan"
    },
    {
        name: "Black Panther",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=black%20panther&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d",
        description: "",
        value: 2,
        question: "Where was Black Panther from?",
        choices: [
            "Secaucus",
            "Eswatini",
            "WAKANDA FOREVER!!",
            "Lesotho"
        ],
        answer: "WAKANDA FOREVER!!"
    },
        {
        name: "Nebula",
        URL: "https://gateway.marvel.com:443/v1/public/characters?name=nebula&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/e/30/528d339973337",
        description: "",
        value: 1,
        question: "What BBC show made Nebula actor Karen Gillan famous?",
        choices: [
            "Garth Marenghi's Dark Place",
            "Dr. Whom",
            "Peep Show",
            "Dr. Who"
        ],
        answer: "Dr. Who"
    }

];


function displayQuestions() {
    
    for (i=0; i < avengerCharacters.length; i++){
        const currentCharacter = avengerCharacters[i];
        console.log(currentCharacter);
        //var displayImage = avengerCharacters[i].image;
        //var heroImageEl = document.getElementById('hero-image' + i);
        //heroImageEl.textContent = displayImage;
        var displayQuestion = currentCharacter.question;
        var heroQuestionEl = document.getElementById('hero-question' + i);
        heroQuestionEl.textContent = displayQuestion;
        //console.log(key + ": " + avenger[key]);
        fetchCharacter(currentCharacter.name, i);
        for (j = 0; j < currentCharacter.choices.length; j++) {
            const characterChoice = currentCharacter.choices[j];
            console.log(characterChoice);
            var choiceNode = document.createElement('button');
            choiceNode.setAttribute('class', 'choice');
            choiceNode.setAttribute('value', currentCharacter.choices[j]);
            choiceNode.textContent = currentCharacter.choices[j];
            //choiceNode.onclick = checkAnswer;
            document.getElementById('choices' + i).appendChild(choiceNode);
            //console.log(choiceNode);
            choiceNode.addEventListener("click", checkAnswer);
        }
    }
    
}
function fetchCharacter(character, i){
    var name  = character;
    var apiURL = `https://gateway.marvel.com:443/v1/public/characters?name=${ name }&ts=1&apikey=3a0831b3a338e3e8018a4bb3175efe3a&hash=02e6893f2e967cff388b27e4a61d3938`;
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            //for(i=0; i< data.length; i++){
            //console.log(data);       
                document.getElementById('hero-name' + i).textContent = data.data.results[0].name;
                document.getElementById('hero-image' +i).setAttribute("src",data.data.results[0].thumbnail.path);
                document.getElementById('hero-description'+ i).textContent=data.data.results[0].description;
            //}  
        })
}

function checkAnswer(evt){
    evt.preventDefault();
    console.log(evt.currentTarget);
    
    var choicesEl = document.querySelectorAll('.choices');
    const choiceButtons = document.querySelectorAll('.choice');
    //console.log(choicesEl);
    //console.log(choicesEl.id);
    //const userAnswer = document.querySelector()
    for (let j = 0; j < choicesEl.length; j++) {
        const userChoice = evt.currentTarget[j];
        console.log(userChoice);
        const questionBlock = choicesEl[j];
        console.log(questionBlock);
        const correctAnswer = currentCharacter.answer[j];
    
    if (currentCharacter &&  correctAnswer === userChoice){
        score++;
        alert("Correct, Mr. Fury");
    } else {
        alert("Mr. Fury, I expected better");
    }
}
}

function endGame(){
    if (score > 7) {
        alert("You win, Director Fury.");
        return score;
    } else {
        alert("You lose. Loki wins.")
    }
}



document.addEventListener("DOMContentLoaded", (evt) =>{
    console.log(evt);
    displayQuestions();
})