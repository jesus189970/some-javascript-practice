// Problem 1
function array(num) {
    var newArray = []
    for (var i = 1; i < num; i++) {
        newArray.push(i)
    }
    return newArray;
}

array(255);

// Problem 2

function sumEven(num) {
    for (var i = 0; i <= num; i+=2) {
        var sum = 0
        sum = i+sum;
    }
    return sum;
}

sumEven(1000);
