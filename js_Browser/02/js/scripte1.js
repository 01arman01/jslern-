let block = document.querySelector('div[data-widget-name="menu"]')
console.log(block.dataset.widgetName)
// console.log()
let listElements = document.querySelectorAll('ul>li>a')
for(let element of listElements){

   if(element.getAttribute('href').includes('//') && !element.getAttribute('href').includes('http://internal.com')){
       element.style.color = "orange"
   }
}