const quotes = [
  {
    quotes: "Don't judge a book by its cover.",
  },
  {
    quotes: "This is how life is.",
  },
  {
    quotes: "A friend is a second myself.",
  },
  {
    quotes: "No sweat, No sweet.",
  },
  {
    quotes: "He can do, she can do, why not me?",
  },
  {
    quotes: "If not now, then when?",
  },
  {
    quotes: "Time is gold.",
  },
  {
    quotes: "This too shall pass away.",
  },
  {
    quotes: "Love what you do.",
  },
  {
    quotes: "Life is unfair, get used to it",
  },
];

const quote = document.querySelector("#quote span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quotes;
