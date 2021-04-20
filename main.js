let user = 'John Doe';
console.log(user); 

let student = 'Viktoria';
console.log(student);

user = student;
console.log(user);

let test = 1;
++test; //2
test+'1'; //21
test - 1; //20
console.log(test);

console.log(Boolean(test));//true

let arr = [2, 3, 5, 8];
let result = 1;
for(let i = 0; i < arr.length; i++){
    result = result * arr[i];
}
console.log(result);

let array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array.length; i++) {
if (array[i] > 5 && array[i] < 10) {
    console.log(array[i])
}
}

let array = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array.length; i++) {
if (array[i] % 2 == 0) {
    console.log(array[i])
}
}