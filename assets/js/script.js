// questions
var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
]

var currentQuestion = 0;
var time = 75;
var timerId;

var targetHide = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start-quiz");
var feedbackEl = document.querySelector("#feedback");

    

// Function that starts the quiz
var startQuiz = function() {

    if (targetHide.style.display = "none") {
        targetHide.style.display = "none";
    }
    else {
        targetHide.style.display = "block";
    }

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
      time.innerHTML = ' Time:';

      if(time <= 0){
            quizEnd();
        }
}

var getQuestion = function(){
    var titleEl = document.getElementById("quiz-title");
    titleEl.textContent = questions.title;

    choicesEl = "";

    //created a loop for the questions
    questions.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;
  
        // attach click event listener to each choice
        choiceNode.onclick = questionClick;
    
        // display on the page
        choicesEl.appendChild(choiceNode);
    });

}
// click on question answer either generate new question or end quiz if final question
function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions.answer) {
      
        feedbackEl.textContent = "Wrong!";
    } else {

      feedbackEl.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    questions++;
  
    // check if we've run out of questions
    if (questions === currentQuestion) {
      quizEnd();
    } else {
      getQuestion();
    }
  }


// end the quiz function
  function quizEnd() {
    // stop timer
    clearInterval(timerId);
  
    // hide questions section
    quizScreen.setAttribute("class", "hide");
  };

  // user clicks button to start quiz
  startBtn.onclick = startQuiz;
   
    // var pageDown = document.createElement("div");
    // pageDown.contentPage = 
    // pageDown.className = "content";

    // pageDown.appendChild(buttonEl);



 



// create submit button
//var submitButtonEl = document.createElement("button");
//submitButtonEl.textContent = "Submit";
//submitButtonEl.className = "btn edit-btn";
//submitButtonEl.setAttribute("data-task-id", taskId);











