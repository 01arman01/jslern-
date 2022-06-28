let table = document.querySelector('#age-table')
   let lable = table.querySelectorAll('label')
  let   tdss = table.querySelectorAll('td')
  let form =  document.querySelector('form[name=search]')
let td
   for(let item of tdss){
       if(item.textContent.includes('Age')){
            td = item
           break
       }
   }
   let FirstInput = form.querySelector('input')
   let inputs = form.querySelectorAll('input')
   let lastInput = inputs[inputs.length-1]
console.log(form)
console.log(FirstInput)
console.dir(lastInput)
let test = document.querySelector('#divtest')
 // body.outerHTML =body.outerHTML+ '<h1> deleted</h1>'
test.textContent = ">_"
 setInterval(()=>test.hidden = !test.hidden, 1000)
//------------------------input---------------
let inputElement = document.querySelector('#elementIanput')
console.log('-------------')
console.log(inputElement.type)
console.log(inputElement.value)
console.log(inputElement.id)
inputElement.addEventListener('change',()=>{
    console.log(inputElement.value)
})
