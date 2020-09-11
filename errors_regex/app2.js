let re;
re = /hello/i; // case insensitive
// re = /hello/g; //Global - all instances

console.log(re.source);

// exec() - return result in an array or null
const result = re.exec('hi world');

console.log(result);

// test() - returns true or false
const result2 = re.test('Hello');

console.log(result2);

// match() - return result array or null
const str = 'Hello There';
const result3 = str.match(re);
console.log(result3);

// search() - return index of the first match; if not found returns -1
const result4 = str.search(re);
console.log(result4);

// replace() - return new string with some or all matches of a pattern
const newStr = str.replace(re, 'Hi');
console.log(newStr);