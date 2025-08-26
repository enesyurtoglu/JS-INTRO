/*
	02-escape-sequences.js

	This file demonstrates the use of escape sequences in JavaScript strings.
	Escape sequences allow you to include special characters in strings, such as newlines, tabs, quotes, and backslashes.

	Common escape sequences:
		\n  - New line
		\t  - Tab
		\'  - Single quote
		\"  - Double quote
		\\  - Backslash
*/

// Examples:
console.log("Hello,\nWorld!");        // New line
console.log("Column1\tColumn2");      // Tab
console.log('It\'s a sunny day.');    // Single quote
console.log("He said, \"Hello!\"");   // Double quote
console.log("C:\\Program Files\\");   // Backslash
console.log(`"This is '!"^' a backslash"`); // Backtick allows to use the columns
console.log(`   Hello, today is a good day. 
    
    I enjoy it so far!`);//ES6 feature for multi-line strings came on 2015
console.log("\n");
console.log('\t\"Hello, today is a good day.\n\n\tI enjoy it so far!');

