let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-value').value;

    if (inputValue == "") {
        alert('Please enter a value')
    }
    else {
        const mainContainer = document.getElementById('content-container');
        // new tag er jonno createelement use kora hoice
        const tableContainer = document.createElement('tr');
        //akhane $ sign diye kono variable er value set kore dite pari
        tableContainer.innerHTML = ` <th>${count}</th>
        <td>${inputValue}</td>
        <td><button class = "btn btn-danger delete-btn">Delete</button> <button class = "btn btn-success done-btn">Done</button></td>`;
        // input er shathe table k add kora hoice
        mainContainer.appendChild(tableContainer);
        //input e type kore table e add kora por input abar khali hoye jabe
        document.getElementById('input-value').value = "";
        // table er bitorer button
        const deleteButton = document.getElementsByClassName('delete-btn');

        const doneButton = document.getElementsByClassName('done-btn');

        //for of
        for (const button of deleteButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none';
            })
        }
        for (const button of doneButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = 'line-through'
            })
        }
    }
})