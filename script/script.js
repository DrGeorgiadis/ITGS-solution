const quotes = [
    {
        quote: "I think, therefore I am.",
        author: "René Descartes",
        category: "Philosophy"
    },
    {
        quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        author: "Aristotle",
        category: "Philosophy"
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
        category: "Philosophy"
    },
    {
        quote: "Eureka!",
        author: "Archimedes",
        category: "Science"
    },
    {
        quote: "Nothing in life is to be feared, it is only to be understood.",
        author: "Marie Curie",
        category: "Science"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        category: "Science"
    },
    {
        quote: "Know thyself",
        author: "Socrates",
        category: "Philosophy"
    },
    {
        quote: "Give me a place to stand, and a lever long enough, and I will move the world.",
        author: "Archimedes",
        category: "Science"
    }
];

function generateQuote() {
    const quoteContainer = document.querySelector('.quote-container');
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    const randomIndex = dayOfYear % quotes.length;
    const randomQuote = quotes[randomIndex];

    quote.textContent = randomQuote.quote;
    author.textContent = "- " + randomQuote.author + " (" + randomQuote.category + ")";
    quoteContainer.style.display = "block";
}

window.onload = generateQuote;
