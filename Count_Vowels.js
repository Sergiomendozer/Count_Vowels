// node Count_Vowels.js
function Count_Vowels(string)
{var count = 0
    console.log(string.length) // !delete
    for (var i = -1; i <= string.length; i += 1)
    {console.log(string[i]) // !delete
        if (string[i] == "a" || string[i] == "A") {count +=1}
        else if (string[i] == "e" || string[i] == "E") {count +=1}
    }
count = String(count)
console.log(count)
}


// prompts user for input
const prompt = require("prompt-sync")({ sigint: true });
var input = prompt("Enter a word of sentence, and I will count number of vowels:");
Count_Vowels(input)