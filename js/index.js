
const quotes = [
    ` " The only way to do great work is to love what you do." -- Steve Jobs `,
    ` " Life is what happens when you're busy making other plans." -- John Lennon ` ,
    ` " You only live once, but if you do it right, once is enough." -- Mae West `,
    ` " Success is not final, failure is not fatal: It is the courage to continue that counts." -- Winston Churchill`,
    ` " The future belongs to those who believe in the beauty of their dreams." -- Eleanor Roosevelt`,
    ` " In three words I can sum up everything I've learned about life: it goes on." -- Robert Frost`
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generateButton");

    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        // Fade in the new quote
        // quoteElement.style.opacity = 1;
    }, 200);

}