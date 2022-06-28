let elem = document.querySelector('#elem')
console.log(elem.getAttribute('About'))
elem.setAttribute('naumbers',1234)
console.log(elem.outerHTML)

console.log('------------------------')
for(let atr  of elem.attributes){
    console.log(`${atr.name}=${atr.value}`)
}