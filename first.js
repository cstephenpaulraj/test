console.log("Hello from Javascript")

var a = 2;
a++;

var firstName = 'Stephen';
firstName += ' Paulraj'
firstName[0] = 'P';
var secondName = " Chinnadurai";
console.log(a)
console.log("Hi, "+firstName+secondName + ". How are you? "+ a + firstName.length);

var myArray = [["Stephen", 44],["Paulraj", 45]];

//var myRemovedArray = myArray.shift();

//console.log(myArray[0]);

myArray.unshift(["abc",10]);

console.log(myArray[0]);