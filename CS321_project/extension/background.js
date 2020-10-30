const takeQuizButton = document.getElementById('starting')
takeQuizButton.addEventListener("click",takeQuiz)
const welcomeMessage = document.getElementById('welc')
const myQuestions = document.getElementById('myquest')
const myActualQuestion = document.getElementById('thisQuest')
const myAnswers = document.getElementById('answers')
const nextBtn = document.getElementById('nextQuest')

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
    makeQuesitonVisible(myArrayQuestons[currentQuestionLocation])
}

function deleteCurrentVals() {

    nextBtn.classList.add('hidden')
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
    const selectedAnswer = e.target
    if (myArrayQuestons.length > currentQuestionLocation + 1) {
        nextBtn.classList.remove('hidden')
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
        question: 'How old are you?',
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