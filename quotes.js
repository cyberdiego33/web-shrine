const message = document.querySelector('.message')
const author = document.querySelector('.author')
const NoOfQuote = document.querySelector('.number')

let times = 0
let collect = []


let quotes = [{person: "Dan Salomon",quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code."}
    ,{person: "David Leinweber", quote: "Give someone a program, you frustrate them for a day. Teach them to program, you frustrate them for a lifetime."}
    ,{person: "Martin Fowler", quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."}
    ,{person: "Edsger W. Dijkstra", quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in."}
    ,{person: "Diego", quote: "Code is like clay. Keep molding it until it becomes something beautiful."}
    ,{person: "Dennis Ritchie", quote: "The only way to learn a new programming language is by writing programs in it."}
    ,{person: "Barbara Liskov", quote: "Writing code is more than logic—it's about crafting solutions that inspire others to push boundaries. Great code isn't just functional; it's a legacy of possibility."}
    ,{person: "Robert C. Martin", quote: "Great programmers aren't born—they're made through persistence, curiosity, and the courage to face failure head-on. Each bug fixed, each problem solved, is a step toward mastery."}
    ,{person: "Margaret Hamilton", quote: "Every line of code you write has the power to change the world. Embrace the challenges, for within them lies the opportunity to create something extraordinary."}
    ,{person: "Tim Berners-Lee", quote: "The beauty of programming lies in its infinite potential. With every project, you're not just coding—you’re building bridges to ideas, dreams, and futures yet to be imagined."}
];


function change() {
    if (quotes.length === 0) {
        quotes = [...collect];
        collect = [];
        times = 0;
    }

    let random = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes.splice(random, 1)[0]; 
    collect.push(selectedQuote); 

    message.classList.remove('animate');
    author.classList.remove('animate');
    void message.offsetWidth; // Trigger reflow to reset animation
    message.classList.add('animate');
    author.classList.add('animate');


    message.innerText = selectedQuote.quote;
    author.innerText = selectedQuote.person;
    times++;
    NoOfQuote.innerText = times;

    console.log(quotes); 
    console.log(collect); 
}

