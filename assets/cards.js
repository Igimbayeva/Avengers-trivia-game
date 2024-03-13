// Define the array of Avenger characters with their questions and answers
var avengerCharacters = [
    {
        name: "Captain America",
        question: "Which war did Steve Rogers fight in?",
        choices: ["The War of 1812", "World War 2", "The Korean War", "The War on Drugs"],
        answer: "World War 2",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087"
    },
    {
        name: "Iron Man",
        question: "What is the real name of Iron Man?",
        choices: ["Tony Stank", "Ned Stark", "Stark Contrast", "Tony Stark"],
        answer: "Tony Stark",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55"
    },
    {
        name: "Thor",
        question: "Who is the brother of Thor?",
        choices: ["Loki", "More", "MC Hammer", "Ned from IT"],
        answer: "Loki",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350"
    },
    {
        name: "Hulk",
        question: "Who is the love interest of the Hulk?",
        choices: ["Tracee Ellis Ross", "Betty Ross", "Betsy Ross", "Bob Ross"],
        answer: "Betty Ross",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0"
    },
    {
        name: "Black Widow",
        question: "What is the nationality of Black Widow?",
        choices: ["Wakandan", "Belarusian", "Russian", "She is a Sovereign Citizen"],
        answer: "Russian",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b"
    },
    {
        name: "Hawkeye",
        question: "Who is the best friend of Hawkeye?",
        choices: ["Black Widow", "Green Lantern", "Blue Beetle", "Green Arrow"],
        answer: "Black Widow",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b"
    },
    {
        name: "War Machine",
        question: "What military rank does War Machine hold?",
        choices: ["Private First Class", "A Very Petty Officer", "An Officer and a Gentleman", "Lieutenant Colonel"],
        answer: "Lieutenant Colonel",
        image: "https://i.ibb.co/v1nVxqw/war-machine.jpg"
    },
    {
        name: "Falcon",
        question: "What is the real name of Falcon?",
        choices: ["Owen Wilson", "Woodrow Wilson", "Sam Wilson", "August Wilson"],
        answer: "Sam Wilson",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009"
    },
    {
        name: "Scarlet Witch",
        question: "How many siblings did Scarlet Witch have?",
        choices: ["1", "3", "5", "Unknown"],
        answer: "1",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b"
    },
    {
        name: "Vision",
        question: "Who was the love interest of Vision?",
        choices: ["Wanda Maximoff", "Morgan le Fay", "Minerva McGonagall", "Nancy Downs"],
        answer: "Wanda Maximoff",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594"
    },
    {
        name: "Ant-Man",
        question: "Which actor played Ant-Man?",
        choices: ["Tom Holland", "The ageless Paul Rudd. Long may he reign...", "Andy Serkis in a mo-cap suit", "Daniel Day-Lewis after living with actual ants"],
        answer: "The ageless Paul Rudd. Long may he reign...", 
        image: "https://i.ibb.co/JyXJPmZ/ant-man.jpg"
    },
    {
        name: "Spider-Man",
        question: "What is the name of the uncle of Spider-Man?",
        choices: ["Uncle Ben", "Uncle Sam", "Scar", "Uncle Buck"],
        answer: "Uncle Ben",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b"
    },
    {
        name: "Winter Soldier",
        question: "Which actor played Winter Soldier?",
        choices: ["Taron Egerton", "Penn Badgley", "Sam Claflin", "Sebastian Stan, Rutgers class of 2005"],
        answer: "Sebastian Stan, Rutgers class of 2005",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/d/03/5265478293c1e"
    },
    {
        name: "Black Panther",
        question: "Where was Black Panther from?",
        choices: ["Secaucus", "Eswatini", "WAKANDA FOREVER!!", "Lesotho"],
        answer: "WAKANDA FOREVER!!",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d"
    },
    {
        name: "Nebula",
        question: "What BBC show made Nebula actor Karen Gillan famous?",
        choices: ["Garth Marenghi's Dark Place", "Dr. Whom", "Peep Show", "Dr. Who"],
        answer: "Dr. Who",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/e/30/528d339973337"
    }
];

var currentIndex = 0;
var score = 0;

// Function to initialize the card grid with character information
function init() {
    avengerCharacters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = character.image + '/standard_fantastic.jpg'; // Example: Append '/standard_fantastic.jpg' for a medium-sized image
        image.alt = character.name;

        const heading = document.createElement('h2');
        heading.textContent = character.name;

        const question = document.createElement('p');
        question.textContent = character.question;

        const choicesList = document.createElement('ul');
        character.choices.forEach(choice => {
            const choiceItem = document.createElement('li');
            const choiceButton = document.createElement('button');
            choiceButton.textContent = choice;
            choiceButton.setAttribute('data-answer', character.answer); // Assigning the correct answer attribute
            choiceButton.classList.add('choice');
            choiceItem.appendChild(choiceButton);
            choicesList.appendChild(choiceItem);
        });

        card.appendChild(image);
        card.appendChild(heading);
        card.appendChild(question);
        card.appendChild(choicesList);

        document.querySelector('.card-container').appendChild(card);
    });
}

// Function to check the user's answer
function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
        alert("Correct, Mr. Fury");
        score++; // Increment score if the answer is correct
        // Automatically close the alert after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);
    } else {
        alert("Mr. Fury, I expected better");
    }
    // Check if all questions have been answered
    if (score === avengerCharacters.length) {
        endGame();
    }
}

// Function to end the game
function endGame() {
    if (score > 7) {
        alert("You win, Director Fury.");
    } else {
        alert("You lose. Loki wins.");
    }
}

// Event listener to initialize the game when the DOM content is loaded
document.addEventListener("DOMContentLoaded", init);

// Event listener to check the user's answer when a choice is clicked
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('choice')) {
        const selectedChoice = event.target.textContent;
        const correctAnswer = event.target.getAttribute('data-answer');
        checkAnswer(selectedChoice, correctAnswer);
    }
});