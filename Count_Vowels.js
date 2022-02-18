// node Count_Vowels.js
function Count_Vowels(x)
{var count = 0
    console.log(x.length)
    for (var i = -1; i <= x.length; i += 1)
    {
        console.log(i);
    }
    
}


// prompts user for input
const prompt = require("prompt-sync")({ sigint: true });
var string = prompt("Enter a word of sentence, and I will count number of vowels:");
Count_Vowels(string)