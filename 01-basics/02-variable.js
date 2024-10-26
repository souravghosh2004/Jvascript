const userId = 12345;
var userName = "Sourav";
console.log("userName datatype =>  ",typeof userName);

let password =  "password123";
console.log("pasword datatype => ",typeof password);
// userId =  67890; // not allowed
//const userId  = 67890; // not allowed
var  userName = "Sourav-Ghosh"; /* allowed this is the main problem 
in var keyword we dont use var keyword*/

city = "Bardhaman";
console.log("city  datatype => ",typeof city);


//let password  = "newpassword"; // not allowed
let mail;
console.table([userId,userName,password,city,mail]);


city =  25;
console.log("city datatype => ",typeof city);
password = 255;
console.log("pasword datatype => ",typeof password);
console.log(typeof userName);

console.log(userName);
console.table([userId,userName,password,city,mail]);

console.log("mail datatype => ",typeof  mail);



