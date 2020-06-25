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

// ** Match Ending String Patterns **

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);

// ** Match All Letters and Numbers **

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;

// ** Match Everything But Letters and Numbers **

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;

// ** Match All Numbers **

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;

// ** Match All Non-Numbers **

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;

// ** Restrict Possible Usernames **

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
// let result = userCheck.test(username);

// ** Match Whitespace **

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g;
// let result = sample.match(countWhiteSpace);

// ** Match Non-Whitespace Characters **

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g;
// let result = sample.match(countNonWhiteSpace);

// ** Specify Only the Lower Number of Matches **

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/;
// let result = haRegex.test(haStr);

// ** Specify Exact Number of Matches **

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/;
// let result = timRegex.test(timStr);

// ** Check for All or None **

// let favWord = "favorite";
// let favRegex = /favou?rite/;
// let result = favRegex.test(favWord);

// ** Check For Mixed Grouping of Characters **

// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).*Roosevelt/;
// let result = myRegex.test(myString);
