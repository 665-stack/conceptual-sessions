let first = 4;
let second = 6;
// akhanker first = second mane ei na je ei duita soman. er mane holo second er value ta first e cole gece;
first = second;
console.log(first);
console.log(second);
console.log(first, second);
// find largest number from array
var arr = [3, 6, 2, 65, 34, 5, 89, 32];
var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) {
        largest = element;
    }
}
console.log('largest number is---', largest);
//=================
let first1 = 4;
let second1 = 7;
first1 = first1 + 5;
// we can do lot of things also; like +, -, /, *;
second1 = second1 * 2;
console.log('first1 --', first1);
console.log('second1 ---', second1);
//===========condition.js=======
let mark = 3;
if (mark > 10) {
    console.log('Mark is greater than 10')
}
else if (mark > 20) {
    console.log('Mark is greater than 10')
}
else if (mark > 30) {
    console.log('Mark is not greater than 10')
}
else {
    console.log('Mark is too small')
}
//============loop-Array.js======
let array = [3, 5, 34, 6, 33, 65];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//========more about return=======
function isPositive(number) {
    let result;
    if (number > 0) {
        result = 'positive';
    }
    else {
        result = 'negative';
    }
    return result;
}
console.log()
//=======Problem solving=========
//Print all even numbers from 1-20
function printEven() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
printEven();
// Count numbers divisible by 3 from 1 - 20;

function countNumbersDivisibleByThree() {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            count = count + 1;
        }
    }
    return count;
}
let result = countNumbersDivisibleByThree();
console.log('count Numbers Divisible By 3 is--', result);
//calculate the average of all the numbers that is divisible by 3 from 1 - n;
function average(n) {
    let sum = 0;
    let count1 = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
            count1 = count1 + 1;
        }
    }
    let avg = sum / count1;
    return avg;
}
var getAverage = average(20);
console.log(getAverage);
//


