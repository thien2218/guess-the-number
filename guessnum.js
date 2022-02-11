// const description = document.getElementById('description')
// const play = document.getElementById('play-game')

window.onload = function() {
    document.getElementById('check').addEventListener('click', checkAnswer)
    document.getElementById('reset').addEventListener('click', restart)
}

function getRandNum(){
    return Math.floor(100*Math.random() + 1)
}

let randNum = getRandNum()

restart = () =>{
    answer.value = ''
    clue.innerHTML = ''
    bgrColor.setAttribute('style', 'background-color: #fff')
    guessedNum.innerHTML = ''
    guesses = []
    randNum = getRandNum()
}

checkAnswer = () =>{
    displayResult(answer.value)
    saveHistory(answer.value)
    showHistory()
}

displayResult = (answer) =>{
    // ES6+
    `${answer < randNum ? `${
        clue.innerHTML = "Your guess is too low!",
        clue.setAttribute('style', 'color: rgb(185, 36, 36)'),
        bgrColor.setAttribute('style', 'background-color: rgba(219, 73, 73, 0.5)')
    }` : `${answer > randNum ? `${
        clue.innerHTML = 'Your guess is too high!',
        clue.setAttribute('style', 'color: rgb(185, 36, 36)'),
        bgrColor.setAttribute('style', 'background-color: rgba(219, 73, 73, 0.5)')
    }` : `${
        clue.innerHTML = 'Awesome, you got it correct!!',
        clue.setAttribute('style', 'color: rgb(44, 197, 57)'),
        bgrColor.setAttribute('style', 'background-color: rgba(88, 241, 113, 0.5)')
    }`}`}`

    // Normal JS code

    // if(answer < randNum){
    //     clue.innerHTML = "Your guess is too low!"
    //     clue.setAttribute('style', 'color: rgb(185, 36, 36)')
    //     bgrColor.setAttribute('style', 'background-color: rgba(219, 73, 73, 0.5)')
    // }else if(answer > randNum){
    //     clue.innerHTML = 'Your guess is too high!'
    //     clue.setAttribute('style', 'color: rgb(185, 36, 36)')
    //     bgrColor.setAttribute('style', 'background-color: rgba(219, 73, 73, 0.5)')
    // }else{
    //     clue.innerHTML = 'Awesome, you got it correct!!'
    //     clue.setAttribute('style', 'color: rgb(44, 197, 57)')
    //     bgrColor.setAttribute('style', 'background-color: rgba(88, 241, 113, 0.5)')
    // }
}

let guesses = []

saveHistory = (guess) =>{
    guesses.push(guess)
}

showHistory = () =>{
    let i = guesses.length - 1
    let list = '<ul>';
    while(i >= 0){
        list += '<li class="guessHistory">You guessed ' + guesses[i] + '</li>'
        i -= 1
    }
    list += '</ul>'
    guessedNum.innerHTML = list
}

