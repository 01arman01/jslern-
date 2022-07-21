let list = document.querySelector('.list')
let listAddElement = (text, list)=>{
    let li = document.createElement('li')
    li.style = {
        background:'orange',
        margin:'20p'
    }
    li.textContent =text
    list.append(li)
}

let caytalizator = true;
while (caytalizator){
    let text = prompt('')
    console.log(text)
    if (text != null && text != ''){
        listAddElement(text,list)
    }else{
        caytalizator = false
    }

}

