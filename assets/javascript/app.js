$(document).ready(function () {
    var questions = [
        {question: "1. What is the only international grape variety to have originated outside of France?", answer1: "Chardonnay", answer2: "Merlot", answer3: "Riesling", answer4: "Syrah", correctAnswer: "Riesling"},
        {question: "2. What is the international white grape variety that has the heaviest body and lowest acidity?", answer1: "Riesling", answer2: "Sauvignon Blanc", answer3: "Pinot Grigio", answer4: "Chardonnay", correctAnswer: "Chardonnay"},
        {question: "3. What is the international red grape variety with the lowest amount of tannins, thinnest skins, and highest acidity?", answer1: "Pinot Noir", answer2: "Syrah", answer3: "Merlot", answer4: "Cabernet Sauvignon", correctAnswer: "Pinot Noir"},
        {question: "4. What is another name for the Syrah grape?", answer1: "Shazaam", answer2: "Petit Sirah", answer3: "Merlot", answer4: "Shiraz", correctAnswer: "Shiraz"},
        {question: "5. Which international red grape variety originated in the warmest climate and shows characteristics such as medium tannins, acidity, and body?", answer1: "Pinot Noir", answer2: "Syrah", answer3: "Merlot", answer4: "Cabernet Sauvignon", correctAnswer: "Syrah"},
        {question: "6. Which of the following characteristics is not useful when determining the quality of a wine?", answer1: "Complexity", answer2: "Tannins", answer3: "Finish", answer4: "Intensity", correctAnswer: "Tannins"},
        {question: "7. Grapes grown in a warm climate will produce wines with _____________ than grapes grown in a cool climate.", answer1: "more acid & less alcohol", answer2: "more acid & more alcohol", answer3: "less acid & more alcohol", answer4: "less acid & less alcohol", correctAnswer: "less acid & more alcohol"},
        {question: "8. Which of the following is not an indicator of the climate in which the grapes for a particular wine were grown?", answer1: "Color", answer2: "Body", answer3: "Alcohol", answer4: "Acid", correctAnswer: "Color"},
        {question: "9. Which of the following is not an indicator of age in a wine?", answer1: "Color", answer2: "Body", answer3: "Dominant aroma category", answer4: "Sediment", correctAnswer: "Body"},
        {question: "10. You are tasting a red wine that has a deep red color and soft tannins, and smells strongly of leather, tobacco, and wet dirt. How old is the wine?", answer1: "1 to 3 years", answer2: "3 to 5 years", answer3: "5 or more years", answer4: "The wine is past its prime & breaking down", correctAnswer: "3 to 5 years"},
        {question: "11. The wine laws of France are known by the acronym:", answer1: "DOC", answer2: "OAC", answer3: "AOC", answer4: "INAO", correctAnswer: "AOC"},
        {question: "12. Which of the following wine regions is considered the most commercially successful in the world and produces around a quarter of France's premium wine?", answer1: "Bordeaux", answer2: "Burgundy", answer3: "Champagne", answer4: "The Loire", correctAnswer: "Bordeaux"},
        {question: "13. A Champagne labeled 'Blanc de Blancs' is a sparkling wine produced with what types of grapes?", answer1: "Pinot Noir", answer2: "Pinot Meunier", answer3: "Merlot", answer4: "Chardonnay", correctAnswer: "Chardonnay"},
        {question: "14. Which of the following is not one of the most important grapes grown in Bordeaux?", answer1: "Cabernet Sauvignon", answer2: "Chardonnay", answer3: "Merlot", answer4: "Sauvignon Blanc", correctAnswer: "Chardonnay"},
        {question: "15. The red grape grown almost exclusively in Piedmont, Italy, that produces the red wines of Barolo and Barbaresco with extremely high tannins is called:", answer1: "Corvina", answer2: "Barbera", answer3: "Nebbiolo", answer4: "Sangiovese", correctAnswer: "Nebbiolo"},
        {question: "16. Which Italian wine region is famous for the production of Sangiovese-based wines such as Chianti Classico?", answer1: "Tuscany", answer2: "Veneto", answer3: "Piedmont", answer4: "Sicily", correctAnswer: "Tuscany"},
        {question: "17. Which of the following is used to produce sweet, sparkling wines in Asti, an appellation of Piedmont?", answer1: "Trebbiano", answer2: "Nebbiolo", answer3: "Pinot Grigio", answer4: "Moscato", correctAnswer: "Moscato"},
        {question: "18. The Italian wine laws are known by what acronym?", answer1: "AVA", answer2: "AOC", answer3: "DOC", answer4: "BATF", correctAnswer: "DOC"},
        {question: "19. Where does Italy rank in terms of wine exports to the United States?", answer1: "#1", answer2: "#2", answer3: "#3", answer4: "#4", correctAnswer: "#1"}];

    var showQuestionAnswer;
    var questionCount = 0;
    var timer;
    var number = 30;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var textAnswer = "";
    
    //starts off with only the start button visible
    $("#quiz-title").hide();
    $("#timer").hide();
    $("#question").hide();
    $("#answer-buttons").hide();
    $("#result-content").hide();
    $("#final-results-summary").hide();

    //once the start button is clicked then run the function startQuiz
    $("#start").click(startQuiz);

    //This function displays the questions and answers and assigns values and text to the buttons respectively of the question being asked
    function displayQuestionAnswer() {
        number = 30;
        clearInterval(timer);
        timer = setInterval(decrement, 1000);

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            number--;
  
            //  Show the number in the #show-number tag.
            $("#timer").text(number);

            if (number === 0) {
                //  ...run the displayQuestionResults function.
                displayQuestionResults();
            }
        }

        //Hides and displays the content
        $("#result-content").hide();
        $("#timer").show();
        $("#final-results-summary").hide();
        $("#question").show();
        $("#answer-buttons").show();

        //Assigns the questions array values to the question div and answer buttons
        $("#question").text(questions[questionCount].question);
        
        $("#button1").attr("value", questions[questionCount].answer1);
        $("#button1").text(questions[questionCount].answer1);

        $("#button2").attr("value", questions[questionCount].answer2);
        $("#button2").text(questions[questionCount].answer2);

        $("#button3").attr("value", questions[questionCount].answer3);
        $("#button3").text(questions[questionCount].answer3);

        $("#button4").attr("value", questions[questionCount].answer4);
        $("#button4").text(questions[questionCount].answer4);
    }


    //When the answer button options are clicked, this runs the displayQuestionResults function
    $("#button1").click( function() {
        var buttonValue = $(this).val();
        console.log("Your Pick: " + buttonValue);
        if (buttonValue === questions[questionCount].correctAnswer) {
            textAnswer = "Correct!";
            correctAnswers++;
            console.log(correctAnswers);
        } else {
            textAnswer = "Wrong!";
            wrongAnswers++;
            console.log(wrongAnswers);
        }
        displayQuestionResults();
    });

    $("#button2").click( function() {
        var buttonValue = $(this).val();
        console.log("Your Pick: " + buttonValue);
        if (buttonValue === questions[questionCount].correctAnswer) {
            textAnswer = "Correct!";
            correctAnswers++;
            console.log(correctAnswers);
        } else {
            textAnswer = "Wrong!";
            wrongAnswers++;
            console.log(wrongAnswers);
        }
        displayQuestionResults();
    });

    $("#button3").click( function() {
        var buttonValue = $(this).val();
        console.log("Your Pick: " + buttonValue);
        if (buttonValue === questions[questionCount].correctAnswer) {
            textAnswer = "Correct!";
            correctAnswers++;
            console.log(correctAnswers);
        } else {
            textAnswer = "Wrong!";
            wrongAnswers++;
            console.log(wrongAnswers);
        }
        displayQuestionResults();
    });

    $("#button4").click( function() {
        var buttonValue = $(this).val();
        console.log("Your Pick: " + buttonValue);
        if (buttonValue === questions[questionCount].correctAnswer) {
            textAnswer = "Correct!";
            correctAnswers++;
            console.log(correctAnswers);
        } else {
            textAnswer = "Wrong!";
            wrongAnswers++;
            console.log(wrongAnswers);
        }
        displayQuestionResults();
    });
  

    //This function hides the question and answers and displays whether the user got the answer correct or not and what the correct answer is
    function displayQuestionResults () {
        $("#result-content").show();
        $("#result").text(textAnswer);
        $("#result-message").text("The correct answer is " + questions[questionCount].correctAnswer);
        $("#timer").show();
        $("#question").hide();
        $("#answer-buttons").hide();

        clearTimeout(showQuestionAnswer);
        //This page only lasts 3 seconds before changing back to the next question
        showQuestionAnswer = setTimeout(nextQuestionAnswer, 3000);
    }

    function nextQuestionAnswer() {
        //Increment the questionCount by 1.
        questionCount++;
        console.log(questionCount);
  
        if (questionCount === questions.length) {
            gameOver();
        } else {
            displayQuestionAnswer();
        }
    }

    function startQuiz() {
        questionCount = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        displayQuestionAnswer();
        $("#quiz-title").show();
        $("#timer").show();
        $("#question").show();
        $("#answer-buttons").show();
        //$("#result-content").hide();
        $("#start-page").hide();
        $("#final-results-summary").hide();
    }

    function gameOver() {
         clearInterval(timer);
         $("#final-results-summary").show();
         $("#correct-total").text("Total Correct: " + correctAnswers);
         $("#wrong-total").text("Total Wrong: " + wrongAnswers);
         $("#restart-button").click(startQuiz);
         $("#question").hide();
         $("#answer-buttons").hide();
         $("#result-content").hide();  
    }

});