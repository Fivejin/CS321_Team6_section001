const takeQuizButton = document.getElementById('starting')
takeQuizButton.addEventListener("click",takeQuiz)
const welcomeMessage = document.getElementById('welc')
const myQuestions = document.getElementById('myquest')
const myActualQuestion = document.getElementById('thisQuest')
const myAnswers = document.getElementById('answers')
const nextBtn = document.getElementById('nextQuest')
var myPickedAnswers = []

let myArrayQuestons, currentQuestionLocation

nextBtn.addEventListener("click",() => {
    currentQuestionLocation++
    getNextQuestion()
})

function takeQuiz() {
    takeQuizButton.classList.add('hidden')
    welcomeMessage.classList.add('hidden')
    myQuestions.classList.remove('hidden')
    myArrayQuestons = questions.sort()
    currentQuestionLocation = 0
    getNextQuestion()
}

function getNextQuestion() {
    deleteCurrentVals()
    if (currentQuestionLocation > 2) {
        myActualQuestion.classList.add('hidden')
        displayResults()
        return
    } 
    makeQuesitonVisible(myArrayQuestons[currentQuestionLocation])
}

function deleteCurrentVals() {

    nextBtn.classList.add('hidden')
    myAnswers.classList.remove('hidden')
    myActualQuestion.classList.remove('hidden')
    while (myAnswers.firstChild) {
        myAnswers.removeChild(myAnswers.firstChild)
    }
}

function makeQuesitonVisible(question) {
    myActualQuestion.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.ans
        button.classList.add('mybtns')
        button.addEventListener("click",pickedAnswer)
        myAnswers.appendChild(button)
    })
}

function pickedAnswer(e) {
    const selectedAnswer = e.target.innerText
    myPickedAnswers.push(selectedAnswer)
    if (myArrayQuestons.length > currentQuestionLocation + 1) {
        myAnswers.classList.add('hidden')
        myActualQuestion.classList.add('hidden')
        nextBtn.classList.remove('hidden')
    }
    else {
        myAnswers.classList.add('hidden')
        myActualQuestion.classList.add('hidden')
        nextBtn.innerText = 'Results'
        nextBtn.classList.remove('hidden')
    }
}

function displayResults() {

    document.body.innerHTML += "You Picked:"
    document.body.innerHTML += "<br>"
    document.body.innerHTML += "<br>"
    
    for (i = 0; i < myPickedAnswers.length; i++) {
        if (i == 0) {
            document.body.innerHTML += "Skin Type: "
        }

        else if (i == 1) {
            document.body.innerHTML += "Age: "
        }

        else if (i == 2) {
            document.body.innerHTML += "Top Skin Conern: "
        }
        document.body.innerHTML += myPickedAnswers[i]
        document.body.innerHTML += "<br>"
    }

    document.body.innerHTML += "<br>"
    document.body.innerHTML += "Your results are:"
    document.body.innerHTML += "<br>"
    document.body.innerHTML += "<br>"

    if ((myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Fine lines/wrinkles")) {
        for (i = 0; i < myProducts1.length; i++) {
            document.body.innerHTML += myProducts1[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if (myPickedAnswers[2] === "Fine lines/wrinkles") {
        for (i = 0; i < myProducts2.length; i++) {
            document.body.innerHTML += myProducts2[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Discoloration")) {
        for (i = 0; i < myProducts3.length; i++) {
            document.body.innerHTML += myProducts3[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if (myPickedAnswers[2] === "Discoloration") {
        for (i = 0; i < myProducts4.length; i++) {
            document.body.innerHTML += myProducts4[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Acne")) {
        for (i = 0; i < myProducts5.length; i++) {
            document.body.innerHTML += myProducts5[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if (myPickedAnswers[2] == "Acne") {
        for (i = 0; i < myProducts6.length; i++) {
            document.body.innerHTML += myProducts6[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Brightening")) {
        for (i = 0; i < myProducts7.length; i++) {
            document.body.innerHTML += myProducts7[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if (myPickedAnswers[2] === "Brightening") {
        for (i = 0; i < myProducts8.length; i++) {
            document.body.innerHTML += myProducts8[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Combination") && (myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts9.length; i++) {
            document.body.innerHTML += myProducts9[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Normal") && (myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts9.length; i++) {
            document.body.innerHTML += myProducts9[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Oily") && (myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts10.length; i++) {
            document.body.innerHTML += myProducts10[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Dry") && (myPickedAnswers[1] === "Teens") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts11.length; i++) {
            document.body.innerHTML += myProducts11[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Oily") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts12.length; i++) {
            document.body.innerHTML += myProducts12[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Dry") && (myPickedAnswers[1] === "20s") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts13.length; i++) {
            document.body.innerHTML += myProducts13[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Dry") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts14.length; i++) {
            document.body.innerHTML += myProducts14[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Combination") && (myPickedAnswers[1] === "20s") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts15.length; i++) {
            document.body.innerHTML += myProducts15[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Combination") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts16.length; i++) {
            document.body.innerHTML += myProducts16[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Normal") && (myPickedAnswers[1] === "20s") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts17.length; i++) {
            document.body.innerHTML += myProducts17[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }

    else if ((myPickedAnswers[0] === "Normal") && (myPickedAnswers[2] === "Dryness")) {
        for (i = 0; i < myProducts18.length; i++) {
            document.body.innerHTML += myProducts18[i]
            document.body.innerHTML += "<br>"
            document.body.innerHTML += "<br>"
        }
        return
    }





}

const questions = [
    {
        question: 'What kind of skin do you have?',
        answers: [
            {ans: 'Combination'},
            {ans: 'Oily'},
            {ans: 'Normal'},
            {ans: 'Dry'}
        ]
    },
    {
        question: ' \xa0 \xa0 \xa0 \xa0 How old are you?',
        answers: [
            {ans: 'Teens'},
            {ans: '20s'},
            {ans: '30s'},
            {ans: '40+'}
        ] 
    },
    {
        question: 'What is your top skin concern?',
        answers: [
            {ans: 'Fine lines/wrinkles'},
            {ans: 'Discoloration'},
            {ans: 'Acne'},
            {ans: 'Brightening'},
            {ans: 'Dryness'}
        ]
    }
]