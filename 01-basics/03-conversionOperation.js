//string to  int coversion 
let age = "21"
console.log(typeof age);
age = Number(age); // first apporach
console.log(typeof age);
 
let pinCode = "713513"
console.log(typeof pinCode);
pinCode = parseInt(pinCode);
console.log(typeof pinCode); // second approach

let  rollNo = "1a2"
console.log(typeof rollNo);
rollNo  = Number(rollNo); // it is allowed  but it will return NaN (its not working)
console.log(typeof rollNo); 
console.log(rollNo);

//boolean  to int conversion
let isAdult = true;
console.log(typeof isAdult);
isAdult =  Number(isAdult);
console.log(typeof isAdult); 
console.log(isAdult); // it will return 1 (because true is 1 in js)

let canVote = false
console.log(typeof canVote);
canVote = Number(canVote);
console.log(typeof canVote); 
console.log(canVote); // it will return 0 (because false is 0 in js)

// int to string
let score  = 100
console.log(typeof score);
score = String(score); // first apporach
console.log(typeof score);
console.log(score);

let marks  = 98;
console.log(typeof marks);
//marks = parseString(marks); // it will give error because parseString is not a function in js
//console.log(typeof marks);

// int to boolean
let flage = 100
console.log("flage => ",flage);
console.log(typeof flage);
flage = Boolean(flage); // it will return true because any number is true in js (0 is  false)
console.log(typeof flage);
console.log("flage => ",flage);

flage = -25;
console.log("flage => ",flage);
console.log(typeof flage);
flage = Boolean(flage); // it will return true because any number is true in js (0 is  false)

console.log(typeof flage);
console.log("flage => ",flage);

flage  = 0;
console.log("flage => ",flage);
console.log(typeof flage);
flage = Boolean(flage); // it will return false because 0 is false in js
console.log(typeof flage);
console.log("flage => ",flage);



//boolean to string
let isPrime = true;
console.log(typeof isPrime);
isPrime = String(isPrime);
console.log(typeof isPrime);
console.log("isPrime => ",isPrime)

//undefind to bollean
let a ;
console.log(typeof a);
a = Boolean(a); // it will return false because a is undefined and undefined is false in js
console.log(typeof a);
console.log("a => ",a);

//undefind to string
let  b ;
console.log(typeof b);
b = String(b); //  it will return "undefined" because b is undefined and undefined is string in js

console.log(typeof b);
console.log("b => ",b);

// null  to boolean
let c =  null;
console.log("c => ",c);
console.log(typeof c);
c = Boolean(c); // it will return false because null is false in js
console.log(typeof c);
console.log("c => ",c);

// null  to string
let d =  null;
console.log("d => ",d);
console.log(typeof d);
d = String(d); // it will return "null" because null is string in js
console.log(typeof d);
console.log("d => ",d);

//null to number
let e =  null;
console.log("e => ",e);
console.log(typeof e);
e = Number(e); // it will return 0 because null is coerced to 0 when converted to a number
console.log(typeof e);
console.log("e => ",e);









