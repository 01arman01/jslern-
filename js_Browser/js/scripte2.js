let table = document.querySelector('#table').rows
// console.log(table.rows)
for (let i=0; i< table.length; i++){
    table[i].children[i].style.backgroundColor = 'red'
}

let elements = document.querySelectorAll('ul>li:last-child')
// console.log(elements)
for (let elem of elements){
    console.log(elem.innerHTML)
}