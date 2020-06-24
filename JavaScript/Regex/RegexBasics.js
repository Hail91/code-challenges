// ** Match single Characters not specified **

// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi;  <---- Match characters/Symbols not belonging to this charset
// let result = quoteSample.match(myRegex);

// ** Match Characters that Occur One or More Times **

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// ** Match Characters that Occur Zero or More Times **

// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);

// ** Find Characters with Lazy Matching **

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);

// ** Match Beginning String Patterns **

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
