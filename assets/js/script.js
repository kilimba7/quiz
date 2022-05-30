// questions
var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choice: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choice: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choice: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choice: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choice: ["css", "class", "src", "style"],
        answer: "style"
    }
];


var questionIndex = 0;
var time = 75;
var timerId;

var targetHide = document.querySelector("#start-screen");
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start-quiz");
var nextQuestion = document.querySelector("#quiz-title");
var nextChoice = document.createElement("ul");
    

// Function that starts the quiz
var startQuiz = function() {



//timer
timerId = setInterval(countdown, 1000);

// show starting time
timeEl.textContent = time;
  
getQuestion();
}
//create a second taken off of a clock
var countdown = function(){
      time--;
      timeEl.textContent = time;

    
        if (time <= 0)
        {
            quizEnd();
        }
}
var getQuestion = function(){
    // Hiding the start screen and choices
    targetHide.innerHTML = "";
    nextChoice.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choice;
        nextQuestion.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        listItem.className = "btn";
        nextQuestion.appendChild(nextChoice);
        nextChoice.appendChild(listItem);
        listItem.onclick = questionClick;
    })
}

// click on question answer either generate new question or end quiz if final question
function questionClick() {
    var userAnswer = questions[questionIndex].answer;
    var feedbackDiv = document.createElement("div");
    feedbackDiv.setAttribute("class", "feedbackDiv");
    
    
        // Correct condition 
        if (feedbackDiv == userAnswer) {
            feedbackDiv.textContent = "Correct";
            // default to this if wrong 
        } else {
            feedbackDiv.textContent = "Wrong";
        }
    

    // move to next question
    questionIndex++;
  
    // check if we've run out of questions
    if (questionIndex >= questions.length) {
      quizEnd();
      feedbackDiv.textContent = "End of the quiz!";
    } else {
      getQuestion();
    }

    nextQuestion.appendChild(feedbackDiv);
}
  
  
// end the quiz function
  function quizEnd() {
    // stop timer
    clearInterval(timerId);
  
    // hide questions section
    nextQuestion.innerHTML = "";
  };

  // user clicks button to start quiz
  startBtn.onclick = startQuiz;
   










