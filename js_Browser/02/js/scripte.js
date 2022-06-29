let elem = document.querySelector('#elem')
let input = document.querySelector('input')
let check = document.querySelector('input[type=checkbox]')
let styleTest = document.querySelector('.styleTest')
let link = document.querySelector('a')

console.log(elem.getAttribute('About'))
elem.setAttribute('naumbers',1234)
console.log(elem.outerHTML)



console.log('------------------------')
for(let atr  of elem.attributes){
    console.log(`${atr.name}=${atr.value}`)
}
console.log('--------------test for attributes-------------------')

input.setAttribute('value','text')
console.log(input.getAttribute('value'))
input.setAttribute('value','id1')
console.log(input.getAttribute('value'))
console.log('--------------test for checkbox-------------------')
setInterval(()=>check.checked = !check.checked, 2000)
console.log('--------------test for style-------------------')
console.log(styleTest.getAttribute('style'))
console.log(styleTest.style.border)
console.log('--------------test for href link a-------------------')
console.log(link.getAttribute('href'))
console.log(link.href)
// alert(link.href)
console.log('--------------test attribute-------------------')
let user = {
    age:22,
    name:'Arman'
}
for (let div of document.querySelectorAll('[show_info]')){
    let field = div.getAttribute('show_info')
    div.innerHTML = user[field]
}
console.log('--------------test attribute data -------------------')
let dataElement  =document.querySelector('div[data-order-state="new"]')
// console.log(dataElement.dataset.about)
dataElement.dataset.orderState ="pending"