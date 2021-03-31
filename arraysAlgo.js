var testArr = [6,3,5,1,2,4]

//Problem #1
var sum = 0
for( var i = 0; i < testArr.length; i++){
    console.log("Num", testArr[i])
    sum=testArr[i]+sum
    console.log("Sum", sum)
}

//Problem #2

for ( var i = 0; i < testArr.length; i++){
    console.log(testArr[i] * i)
}