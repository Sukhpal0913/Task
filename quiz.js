function check() {
    // alert("You are the winner of this game..");

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;


    var correct = 0;


    if (question1 == "1") {
        correct++;
    }

    if (question2 == "5") {
        correct++;
    }

    if (question3 == "8") {
        correct++;
    }

    if (question4 == "10") {
        correct++;
    }

    if (question5 == "13") {
        correct++;
    }

    if (question6 == "18") {
        correct++;
    }

    if (question7 == "23") {
        correct++;
    }

    if (question8 == "27") {
        correct++;
    }

    if (question9 == "30") {
        correct++;
    }

    if (question10 == "35") {
        correct++;
    }


    document.getElementById("after_submit").style.visibility = "visible";
    alert(document.getElementById("number_correct").innerHTML = "You got " + correct + " answers correct.");
}