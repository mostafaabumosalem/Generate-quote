
const quotes = [
    {'author': '--Jim Rohn', 
     'quote': '"Beware of what you become in pursuit of what you want."'
    },
    {'author': '--Steve Jobs', 
     'quote': '"The only way to do great work is to love what you do."'
    },
    {'author': '--Frank Sinatra', 
     'quote': '"The best revenge is massive success."'
    },
    {'author': '--Wayne Gretzy', 
     'quote': '"You miss 100% of the shots you don\'t take."'
    },
    {'author': '--Nelson Mandela', 
     'quote': '"Resentment is like drinking poison and waiting for your enemies to die."'
    },
    {'author': '--Robert Frost', 
     'quote': '"In three words I can sum up everything I have learned about life: it goes on."'
    },
];

var btn = document.querySelector("#quote-btn");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");

btn.addEventListener("click", function () {
    var random = Math.trunc(Math.random() * quotes.length);
    quote.innerHTML= quotes[random].quote;
    author.innerHTML= quotes[random].author;
} )



