// Created on iPad.




// let random = Math.random();

// if(random < 0.5) {
// console.log("Your number is less than 0.5")
// console.log(random)
// }


// if(random >= 0.5) {
// console.log("Your nunmber is greater thn 0.5")
// console.log(random)
// }

// const dayOfWeek = prompt('Enter a day.').toLowerCase()

// if(dayOfWeek === "monday") {
//     console.log("Ugghh i hate Mondays")
// } else if (dayOfWeek === "saturday") {
//     console.log("I love Saturdays")
// } else if (dayOfWeek === "friday") {
//     console.log("Fridays are decent")
// } else {
//     console.log("Meh")
// }

// 0-5 - free 
// 5 - 10 - child $10
// 10 - 65 adult $20
// 65+ senior $10 

// const age = 1;

// if (age < 5) {
//     console.log('You are a baby, you get in for free')
// } else if (age < 10) {
//     console.log('You are a child, you pay $10')
// } else if (age < 65) {
//     console.log('You are an adult. You pay $20')
// } else {
//     console.log('You are a senior, pay $10')
// }

// const password = prompt('please enter a new password')

// password must be 6+


// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid Password')
//     } else {
//         console.log('passord cannot contain spaces')
//     }
// } else {
//     console.log('Password too short, must be 6 characters')
// }

// password cannot include space

// const userInput = prompt('enter something');

// if(userInput) {
//     console.log("Truthy")
// } else {
//     console.log("falsy")


// if (1) {
//     console.log('Truthy')
// } else {
//     console.log('Falsy')
// }

// ******LOGICAL OPERATORS && (and) || (or)

// const password = prompt('Enter your password')

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid password')
// } else {
//     console.log('Incorerect password')
// }


// || OR OPERATOR

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = -10
// if(age >= 0 && age < 5 || age >= 65) {
//     console.log('Free')
// } else if(age >= 5 && age < 10) {
//     console.log('$10')
// } else if(age >= 10 && age < 65) {
//     console.log('$20')
// } else {
//     console.log("Invalid age")
// }

// ! (NOT OPERATOR)

// const firstName = prompt('Enter your first name')
// if(!firstName) {
//     firstName = prompt('Try again')
// }


// const age = 8;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log('You are not a baby or senior')
// }

//SWITCH AND CASE

const day = 6;
switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Weekend')
        break;
    default:
        console.log('I dont know that')
}


// if (day === 1) {
//     console.log('Monday')
// }
// else if (day === 2) {
//     console.log('Tuesday')
// } else if (day === 2) {
//     console.log('Wednesday')
// } else if (day === 2) {
//     console.log('Thursday')
// } else if (day === 2) {
//     console.log('Friday')
// }
// else {
//     console.log('I dont know that')
// }