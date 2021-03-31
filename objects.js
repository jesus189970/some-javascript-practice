var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// 1.

console.log(users[1].age)

// 2.
console.log(users[0].name)

// 3.

for (i = 0; i < 3; i++){
    console.log(users[i].name)
    console.log(users[i].age)
}

function a(c){
    return c*4;
    console.log(c);
 }
 console.log(a(5));
 

 function a(c){
        console.log(c);
        return c*3;
    }
    console.log(a(2));
    