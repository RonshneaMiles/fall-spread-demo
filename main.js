let inspirationalQuotes = []
let index = 0;
const authorSignature = document.querySelector(".signature")
const quoteText = document.querySelector(".quote")
const transitionTextBox = document.querySelector("container container--narrow")
let author = ''
let text = ''

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

window.addEventListener("load", fetchData)

//Fetch API from https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

function fetchData() {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(assignData)
}

function assignData(quotesArr) {
    inspirationalQuotes = quotesArr
    index = getRandomIndex(inspirationalQuotes)
    author = inspirationalQuotes[index].author
    text = inspirationalQuotes[index].text

    if(author === null) {
        authorSignature.innerHTML = 'Unknown'
    } else {
        authorSignature.innerHTML = `${author}`
    }

    quoteText.innerHTML = `${text}`
    // console.log(author)
    // console.log(text)
}

setInterval(() => {
    displayNewQuote()
}, 7500)

function displayNewQuote() {
    index = getRandomIndex(inspirationalQuotes)
    author = inspirationalQuotes[index].author
    text = inspirationalQuotes[index].text

    if(author === null) {
        authorSignature.innerHTML = 'Unknown'
    } else {
        authorSignature.innerHTML = `${author}`
    }
    quoteText.innerHTML = `${text}`
}
