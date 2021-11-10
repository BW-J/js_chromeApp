const quotes = [
    {
        quote:"1111111111111111111111111111111111111",
        autor:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
    {
        quote:"222222222222222222222222222",
        autor:"BBBBBBBBBBBBBBBBBBBBBBBB",
    },
    {
        quote:"333333333333333333333333333333",
        autor:"CCCCCCCCCCCCCCC",
    },
    {
        quote:"44444444444444444444444444444444444444444444444v",
        autor:"DDDDDDDDDDDDDDDDDDDDDD",
    },
    {
        quote:"555555555",
        autor:"EEEEEEEEEEEEEEEEEEE",
    },
    {
        quote:"666666666666666666",
        autor:"FFFFFFFFFFFFFFFFFFFFFF",
    },
    {
        quote:"77777777777777777777777777",
        autor:"GGGGGGGG",
    },
    {
        quote:"8888888888",
        autor:"HHHH",
    },
    {
        quote:"99999999999999999",
        autor:"IIIIIIIIII",
    },
    {
        quote:"101010",
        autor:"JJJJJ",
    }
];

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
autor.innerText = todaysQuote.autor;