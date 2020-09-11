// Initialize regex
let re;
// Literal characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;
re = / world$/i;

// String to match
const str = 'Hello world';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  const output = re.test(str) ? 'matched' : 'does NOT match';
  console.log(`${str} ${output} ${re.source}`);
};

reTest(re, str);
