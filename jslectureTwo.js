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

