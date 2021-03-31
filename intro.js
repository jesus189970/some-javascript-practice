//Lecture 1

console.log(document.getElementById("only"))

// Data Types

// Boleans (true/false)

var firstVar = false;
var wearing_glasses = true;

console.log(wearing_glasses);

// Numbers

var thirty = 30;
var twentyFive = 25;

console.log(thirty)

//Strings

var word = `I am wearing blue`

console.log(`I am wearing blue ${thirty}`)

console.log('Im wearing blue', + 30)

console.log(word[4] + word[5] + word[6]);

//Arrays

var clothes = ["Shirt", "Pants", "Socks", 456, false];

console.log(clothes[2][1]);

// above is looking for a specific item

// Objects

var zodiac = {
    "Taurus": "April-May"
}
// key: value

console.log(zodiac["Taurus"]);

//if statement

// = -> assignment
// == -> comparison
// === -> comparison ALSO with the datatype

// 7 == "7" //TRUE
// 7 === "7" //FALSE because it not close enough

if(twentyFive == thirty){
    console.log("They are the same")
}
else if (twentyFive == 25) {
    console.log("They are both 25")
}

//Else is always the end of the chain


// For Loops

var toy = "Nutcracker"
toy = "Slinky"

//for(START; END; Something to do after every iteration)
for(var num = 1; num <= 20; num += 2){
    console.log(num)
}

for(var i = 0; i <= clothes.length; i += 1){
    console.log("The value is" + clothes[i])
}

//Lecture 2

// While Loops

var arr = [5,7,8,3,4]
//         0 1 2 3 4  
for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//use while loops when we dont know when things are going to end

var i = 0;
while(i < arr.length){

    console.log(arr[i]);
    i++;
}

// Functions - this will run once I call it. I called it on line 28

function sayHello(num, fiftyFour, thirdvar = 0){ // paremeters
    //var num = 6
    //var fiftyFour, this is not gonna be logged because there is nothing to log it
    console.log(thirdvar)
    console.log(num)
    console.log("Hello")
    console.log("Bonjour")
    console.log("Hola")
    return num; // return ends the function no matter what
}

var o = 9;
console.log("Hey there, im about to call the function")
console.log(sayHello(6, 54)); // arguments


//Saturday Lecture

var arr = [2, 5, 3, 6, 2, 8, 2]
var count = 0

for(var i = 0; i < arr.length; i++){
    if (arr[i]) == 2 || arr[1] == 3) {
        count++
    }
}

console.log(count);

// Built-in Functions

//Push VS Pop

arr.push("Tree")