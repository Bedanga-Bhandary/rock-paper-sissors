const computerChoice =document.getElementById('computer-choice')
const  usersChoice =document.getElementById('user-choice')
const resultDisplay =document.getElementById('result')
const  possibleChoices =document.querySelectorAll('button')
 let whattheychose 
 let randomcomputerChoice
let result

possibleChoices.forEach(choice => choice.addEventListener('click',(e)=>{
    whattheychose=e.target.id
    usersChoice.innerHTML=whattheychose
    generateComputeChoice()
    winloss()

}))
function generateComputeChoice(){
    let randomNumber=Math.floor(Math.random()* 3)+1
     console.log(randomNumber)
    if(randomNumber === 3) 
    {
        randomcomputerChoice='rock'
    }
    else if(randomNumber === 1)
    {
        randomcomputerChoice='sissors'
    }
    else if (randomNumber === 2)
    {
        randomcomputerChoice="paper"
    }
    computerChoice.innerHTML=randomcomputerChoice
}
function winloss(){
    if (randomcomputerChoice===whattheychose)
    {
        result='Its a draw'
    } 
    if (randomcomputerChoice === 'rock' && whattheychose === 'paper')
    {
        result= 'You lose'
    }
    if (randomcomputerChoice === 'sissors' && whattheychose === 'paper')
    {
        result= 'You lose'
    }
    if (randomcomputerChoice === 'rock' && whattheychose === 'sissors')
    {
        result= 'You lose'
    }
    if (whattheychose === 'rock' && randomcomputerChoice === 'sissors')
    {
        result= 'You Win'
    }
    if (whattheychose === 'rock' && randomcomputerChoice === 'paper')
    {
        result= 'You Win'
    }
    
    if (whattheychose === 'sissors' && randomcomputerChoice === 'paper')
    {
        result= 'You Win'
    }
    resultDisplay.innerHTML=result
}