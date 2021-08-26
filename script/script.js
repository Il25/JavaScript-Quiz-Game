const card = document.querySelectorAll("question_block");
const question1 = document.getElementById("first");
const question2 = document.getElementById("second");
const question3 = document.getElementById("third");
const question4 = document.getElementById("fourth");
const question5 = document.getElementById("fifth");
const question6 = document.getElementById("sixth");
const question7 = document.getElementById("seventh");
const question8 = document.getElementById("eighth");
const question9 = document.getElementById("ninth");
const question10 = document.getElementById("tenth");
const finishButton = document.getElementById("btn");

let correctAnswers = 0;
let wrongAnswers = 0;

question1.addEventListener('click', firstQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question1.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "b") {
        question1.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "c") {
        question1.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question1.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question2.addEventListener("click", secondQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question2.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question2.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "c") {
        question2.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question2.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question3.addEventListener("click", thirdQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question3.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question3.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "c") {
        question3.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question3.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question4.addEventListener("click", fourthQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question4.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question4.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "c") {
        question4.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "d") {
        question4.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question5.addEventListener("click", fifthQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question5.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "b") {
        question5.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "c") {
        question5.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question5.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question6.addEventListener("click", sixthQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question6.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "b") {
        question6.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "c") {
        question6.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question6.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question7.addEventListener("click", seventhQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question7.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question7.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "c") {
        question7.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question7.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question8.addEventListener("click", eighthQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question8.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question8.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "c") {
        question8.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question8.classList.add("green");
        correctAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question9.addEventListener("click", ninthQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question9.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question9.classList.add("green");
        correctAnswers++;
    } else if (playerChoice === "c") {
        question9.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question9.classList.add("red");
        wrongAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

question10.addEventListener("click", tenthQuestion = () => {
    let playerChoice = prompt("Пожалуйста введите ответ:").toLowerCase();
    if (playerChoice === "a") {
        question10.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "b") {
        question10.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "c") {
        question10.classList.add("red");
        wrongAnswers++;
    } else if (playerChoice === "d") {
        question10.classList.add("green");
        correctAnswers++;
    } else {
        alert("Введен некорректный ответ. Попробуйте еще раз!");
    }
});

finishButton.addEventListener("click", finishQuiz = () => {
    finishButton.textContent = `Количество верных ответов: ${correctAnswers}, количество неверных ответов: ${wrongAnswers}`;
});