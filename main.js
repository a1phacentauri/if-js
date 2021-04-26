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
    console.log(array[i] == 0)
}
}

//Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".): создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет.

function Palindrome(str) {
    let strLen = str.length,
        strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
      return 'true';
    } else {
      return 'false';
    }
  }

word = Palindrome(prompt('Enter word'));
console.log(word);

//Функция min(a, b) и функция max(a,b): напишите функцию min(a,b), которая возвращает меньшее из чисел; напишите функцию max(a,y), которая возвращает большее из чисел; попробуйте переписать функцию, используя тернарный оператор.

let a = prompt("Enter number");
let b = prompt("Enter number");

function max(a,b){
 if (a > b){
return a
}else{
return b
}
}
let result = min(a,b);
console.log(result);

let a = prompt("Enter number");
let b = prompt("Enter number");

function min(a,b){
 if (a < b){
return a
}else{
return b
}
}

let result = min(a,b);
console.log(result);

let a = prompt("Enter number");
let b = prompt("Enter number");

function min(a,b){

(a > b) ? 
a
: b;
}
let resalt = min(a,b);
console.log(result);

//Замена элементов массива: создайте массив с десятью случайными элементами от 0 до 100; напишите функцию, которая будет заменять все 0 на строку 'zero'; выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).

let arr = [0, 25, 30, 56, 99, 78, 10, 9, 57, 100];

arr.forEach((element, index) => {
  if(element % 10 === 0) {
    arr[index] = element.toString().replaceAll(0, 'zero');
  }
})
console.log(arr);