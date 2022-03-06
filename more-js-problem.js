//count the number of vowels in a string
function countVowel(sentence) {
    let count2 = 0;
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i].toLowerCase();//toLowerCase dile case js er case sensitive shore jay;
        console.log(letter)
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            count2 = count2 + 1;
        }
    }
    return count2;
}
let string = 'I have not yet figured the vowel harmony thing.';
var getVowel = countVowel(string)
console.log('vowels is--', getVowel);

// same problem solve with another way
function count3(sentence2) {
    let count3 = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const letter2 of sentence2.toLowerCase()) {// let letter2 = sentence2[i].toLowerCase();
        if (vowels.indexOf(letter2) != -1) {
            count3 = count3 + 1;
        }
    }
    return count3;
}
var string2 = "I have not yet figured the vowel harmony thing."
var getVowel2 = count3(string2);
console.log('vowels2 is --', getVowel2);
//========factorial=============
// factorial mane porpor shogkha gulo multiply korte thaka
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
var getFactorial = factorial(5);
console.log('getFactorial is--', getFactorial)

//write a function to calculate total price based on given qunatity. + handle errors
//Mular dam:
//For first 2 kg - 30 tk per kg
//For more than 2 kg - 25 tk per kg
function mularDam(quantity) {
    if (typeof quantity != 'number') {
        return 'Please enter a valid quantity';
    }
    if (quantity <= 0) {
        return 'Please enter positive number';
    }
    if (quantity > 20) {
        return 'Please enter less than 20 kg'
    }
    let price = 0;
    if (quantity <= 2) {
        price = quantity * 30;
    }
    else {
        price = quantity * 25;
    }
    return price;
}
const getMularPrice = mularDam(5);
console.log('total mular price is --', getMularPrice);
//calculate electricity bill
//5 tk per unit - for first 100 unit
//6 tk per unit - for more than 100 unit and less than 200 ;
// 7 tk per unit - for more than 300 unit;
function electricityBill(units) {
    if (typeof units != 'number') {
        return 'Please enter a valid number'
    }
    if (units <= 0) {
        return 'Please enter positive number'
    }
    let totalBill;
    if (units <= 100) {
        totalBill = units * 5;
    }
    else if (units <= 200) {
        let fisrt100Unit = 100 * 5;
        let second100Unit = (units - 100) * 6;
        totalBill = fisrt100Unit + second100Unit;
    }
    else {
        let fisrt100Unit = 100 * 5;
        let over200 = (units - 200) * 7;
        let second100Unit = ((units - 100) - (units - 200)) * 6;
        totalBill = fisrt100Unit + second100Unit + over200;
    }
    return totalBill;
}
const getUnit = electricityBill(201);
console.log('Your total electricity bill is :', getUnit);
//Find if anybody got A+ from your friends;
function checkGPA(marks) {
    if (Array.isArray(marks) != true) {
        return 'enter a valid value'
    }
    for (let i = 0; i < marks.length; i++) {
        let element = marks[i];
        if (element >= 80) {
            return true;
        }
    }
    return false;
}
var friedsMarks = [67, 87, 78];
var getGpa = checkGPA(friedsMarks)
console.log(getGpa);
//find the largest element of an array
function largestElement(largeNumbers) {
    let largest = largeNumbers[0];
    for (const largeElements of largeNumbers) {
        if (largeElements > largest) {
            largest = largeElements;
        }
    }
    return largest;
}
var getLargest = largestElement([23, 34, 43, 87, 978, 23, 44]);
console.log('largest numbers is--', getLargest);
//find the second largest element of an array
function secondLargestElement(array) {
    let Largest = array[0];
    let secLargest = array[0];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > Largest) {
            secLargest = Largest;
            Largest = element;
        }
        else if (element > secLargest) {
            secLargest = element;
        }
    }
    return secLargest;
}
var getSecondLargestNumber = secondLargestElement([23, 45, 235, 76, 495, 384, 47]);
console.log('second largest element is -- ', getSecondLargestNumber);


