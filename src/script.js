import {quotes} from "./utils/quotes.js"

const quoteText = document.querySelector('.text');
const quoteAuthor= document.querySelector('.author');
const quoteBtn = document.querySelector('#quoteBtn');

function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
}

quoteBtn.addEventListener('click', getQuote);