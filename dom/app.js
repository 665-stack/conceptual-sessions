//=============class=============
//akhane class diye select korar fole console e ekta htmlcollection asbe ba array type kocu akta cole asbe. jar fole dot(.) diyei amra kicu korte parbo na; Tai age amra Array ke jebabe use kortam shebabei use kokte hove. jemon --- index ba loop diye;
const allButton = document.getElementsByClassName('button-test');
for (const button of allButton) {
    //kono kicute click ba focus type kono kicu k event. ar eta korar jonno addEventListener kora lage 
    button.addEventListener('click', function (event) {
        // console.log(event.target.parentNode)

        if (event.target.id == 'prime') {
            document.getElementById("title").style.color = 'red';
        }
        else {
            document.getElementById("title").style.color = 'green';
        }
    })

}
//index diye select korte chaile
// console.log('button no is 1', allButton[0])

//===============id==============
//ar akhane id diye select korar fole direct oi object tai select hobe. and amra dot(.) diyei select kore mohurtei kicu akta korte parbo.
const prime = document.getElementById("prime");
// console.log(prime)