let div  = document.createElement('div')
let p  = document.createElement('p')
let h1 = document.createElement('h1')
let  strong = document.createElement('strong')

let block3  = document.querySelector('.class4')
let block5  = document.querySelector('.class5')

div.className = 'alert1';
div.innerHTML = "WORNING!!!"

p.className = 'disign'
p.textContent="elementic heto"

strong.textContent = ' elementi verj'

h1.textContent = "elementi skizb"
console.log(div.textContent)
//--insert  and end
// block3.append(div)
//--isert and start
// block5.prepend(div)
// block5.before(div)
// block5.after(div)
block3.insertAdjacentElement('beforebegin',div)
block3.insertAdjacentElement('afterend',p)

div.insertAdjacentElement('afterbegin', h1)
p.insertAdjacentElement('beforeend',strong)
// let katalizator = true
// setInterval(()=>{
//     h1.remove()
//     if(katalizator){
//         katalizator = !katalizator
//         div.remove()
//     }else{
//         block3.insertAdjacentElement('beforebegin',div)
//         katalizator = !katalizator
//     }
//
// },1000)
