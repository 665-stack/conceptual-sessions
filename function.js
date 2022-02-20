// akhane 2 bar sum korar jonno bar bar kicu likha lage nai. jeta function er maddome hocca;
function addTwoNumber(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}
addTwoNumber(6, 4);
addTwoNumber(10, 20);


//================================================
var numbers = [23, 423, 845, 76, 83, 24, 68];
console.log('number er shongkha --', numbers.length);
// jodi oporer array tar last element koto jante chai;
console.log('last numbers of array is :', numbers[numbers.length - 1]);

function printAllarrayNumbers(numbersArray) {
    console.log('array size is:', numbersArray.length)
    var evenArray = [];
    for (var index = 0; index < numbersArray.length; index++) {
        // console.log(numbersArray[index], index);
        if (numbersArray[index] % 2 == 0) {
            // console.log('even numbers', numbersArray[index]);
            evenArray.push(numbersArray[index]);
        }
    }
    return evenArray;
}
var y = printAllarrayNumbers(numbers);
console.log('new even numbers -', y);
var x = printAllarrayNumbers([988, 98, 5467, 376, 928, 38, 387, 272, 18, 47, 38, 394, 98, 87]);
console.log('even numbers', x);
//==============burger.js=================
function burgerkinbo(icca, enoughTaka) {
    if (icca == true && enoughTaka >= 110) {
        return 'Yes, Burger kinbo'
    }
    else {
        return 'No, Burger kinbo na'
    }
}
var kinbo = burgerkinbo(true, 80);
console.log(kinbo);
var tk = 200;
var icca = true;
var abrkinbo = burgerkinbo(icca, tk);
console.log(abrkinbo);
//=============reverse-string.js============
// one way to vertical reverse sentencs
function reverseString(sentencs) {
    // console.log(sentencs);
    // console.log(sentencs.length);
    for (var i = sentencs.length - 1; i >= 0; i--) {
        console.log(sentencs[i])
    }
}
reverseString('Hello World!');
// another way to horizontal reverse sentences
function reverseSentence(sentence2) {
    var reWord = '';
    for (var i = sentence2.length - 1; i >= 0; i--) {
        reWord = reWord + sentence2[i];
    }
    return reWord;
}
var getReverse = reverseSentence('I love you!');
console.log('getReverse---', getReverse);
// another way to horizontal reverse sentence
function reverseSentence2(sentence3) {
    var reWord2 = "";
    for (let i = 0; i < sentence3.length; i++) {
        reWord2 = sentence3[i] + reWord2;
    }
    return reWord2;
}
const getReverse2 = reverseSentence2('I am web dev.')
console.log('getReverse2----', getReverse2);
//=============largestNumber.js============
var numbrs = [19, 92, 61, 59, 95, 76, 83, 70, 37, 99];
//akhane 1st e array gulo k large to small babe shajano hoyece. Then shajano shogkhar 1st shogkha ta k neya hoyce. Ar akhaner code ta google theke neya and eta data sturcture er modder pore
function largestNumbrs(numArray) {
    numArray.sort(function (a, b) { return b - a });
    return numArray;
}
var getLargestNumbrs = largestNumbrs(numbrs);
console.log('large to small --', getLargestNumbrs);
console.log('largest number is ---', getLargestNumbrs[0])
// If if want second largest number
console.log('second largest number --', getLargestNumbrs[1]);
//================wordCount.js=============
var bakko = 'My name is Mahmodul Hasan Shahin';
//but space er age space thaka jabe na
function wordCount(bakkoCollection) {
    var count = 0;
    for (var i = 0; i < bakkoCollection.length; i++) {
        if (bakkoCollection[i] == " " && bakkoCollection[i - 1] != " ") {
            count++;
        }
    }
    count++;
    return count;
}
var getWordCount = wordCount(bakko);
console.log('total word---', getWordCount);
