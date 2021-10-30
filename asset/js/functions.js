
// Function without return statement
function salutation (name) {
    console.log ('Hello ' + name);
    }
   salutation ('Matenneh Dorley, my lovely mom'); // Hello Jamielatou
    
// Function with return statement
function greetings (name) {
    return 'Hello Jamielatou B Kanneh, my lovely wife ';
        }
        
    let message = greetings();
    console.log(message);
        
// Function with Arguments

function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(2, 3);
console.log(result); // 5

function greetings(name) {
    console.log(`Hello ${name}`);
}

greetings('Oldma Tanue');
greetings('Jamielatou');

// The Arguments Object

function printAll(){
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printAll(1,2,3,4,5); //1 2 3 4 5
printAll(10, 20); // 10 20


//Functions Scope

function greeting() {
    let message = 'Hello';
}

greeting();

console.log(message); //ReferenceError; message is not defined


function greetin(){
    let message = 'I love my wife';
    let sayHi = function hi(){
        console.log(message);
    };
    sayHi(); // Hello
}

greetin();


function greeti(){
    let message = 'I love my wife';
    let sayHi = function hi(){
        message = 'and my wife loves me';
    };
    sayHi(); // Hello
    console.log(message);
}

greeti();

//Block Scope

/* Variables declared with the var keyword or within function declarations DO NOT have block scope */

let message1 = 'Hello';
if (message1 === 'Good day') {
    let count = 100;
}

// console.log(count); //Error


let message2 = 'Message2';
if(message2 === 'Message2'){
    let message2 = 'Inside if block';
    console.log(message2); // Inside if block
}

console.log(message2); // Message2

//Self executing or Immediately Invoked Function Expression(IIFE)

(function (){
    console.log("Good Friday");
}



)();

//Closures

let message3 = (function(){

    let message4 = 'I love Programming';

    let getMessage = function() {
        return message4;
    };
       
// Closure starts here
return {
  myMessage: getMessage,
};//Closure ends here

})();
console.log(message3.myMessage()); //I love Programming


//Another example of Closure

function setupCounter(val){
    return function counter(){
        return val++;
    }
}

let counter1 = setupCounter(0);

console.log(counter1()); //0
console.log(counter1()); //1

let counter2 = setupCounter(10);

console.log(counter2()); //10
console.log(counter2()); //11

