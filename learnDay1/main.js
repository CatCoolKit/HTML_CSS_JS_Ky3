// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0;

// console.log(count)

function increment() {

    console.log("The button was clicked")
    let a = 1;
    count = count + a
    // document.getElementById("count-el").innerText = count
    countEL.innerText = count
}

function save() {
    let countStr = count + " - "

    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}

let errorParagraph = document.getElementById("error")

function purcharse() {

    errorParagraph.textContent = "Something went wrong, please try again"
}

let num1 = 1
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("result-el")

function Add() {
    sumEL.textContent = "Result: "
    sumEL.textContent += num1 + num2

}

function Subtract() {
    sumEL.textContent = "Result: "
    sumEL.textContent += num1 - num2

}

function Divide() {
    sumEL.textContent = "Result: "
    sumEL.textContent += num1 / num2

}

function Multiply() {
    sumEL.textContent = "Result: "
    sumEL.textContent += num1 * num2

}


let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL1 = document.getElementById("sum-el")
let cardEL = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145,
    
}

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEL.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardEL.textContent += cards[index] + " "
        
    }
    sumEL1.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Whohoo! You've got Blackjack!"
        hasBlackjack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEL.textContent = message
}

function newCard() {

    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

let person = {
    name: "Per",
    age: 35,
    country: "Norway"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
let myLeads = []
let oldLeads = []
// turn the myleads string into an array
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const ulEL = document.getElementById("ul-el")

const leadsFromLocalStore = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStore) {
    myLeads = leadsFromLocalStore
    renderLeads(myLeads)
}

function renderLeads(leads) {
    let listItems = ""
    for (let index = 0; index < leads.length; index++) {
        //cach 1
        ulEL.innerHTML += "<li><a target='_blank' href='" + leads[index] + "'>" + leads[index] + "</a></li>"
    
        //cach 2
        listItems += `
            <li>
                <a target='_blank' href='${leads[index]}'>
                    ${leads[index]}
                </a>
            </li>
        `
    
        //cach 3
        const li = document.createElement("button")
        li.textContent = leads[index]
        ulEL.append(li)
    }
    
    ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value = ""

    // save the myleads array to localstore
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

tabBtn.addEventListener("dblclick", function() {
    // Grap url of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})


