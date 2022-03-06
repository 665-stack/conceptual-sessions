// let count = 0;
// // add btn
// document.getElementById('add').addEventListener('click', function () {
//     count = count + 1;
//     document.getElementById('count').innerText = count;
// })
// //minus btn
// document.getElementById('minus').addEventListener('click', function () {
//     count = count - 1;
//     document.getElementById('count').innerText = count;
// })
//=====================================
// oporer code tar shortcut, cause I'm developer you know ; er jonno html file er button e onclick dite hoice
let count = 0;
// add btn
function add() {
    count++;
    control("count");
}
// minus btn
function minus() {
    count--;
    control("count");
}
// control function
function control(id) {
    document.getElementById(id).innerText = count;
}
