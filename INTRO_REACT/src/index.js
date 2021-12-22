import add from "./calc";
import('./index.css');
import img from './file.png';


console.log(add(3,5))
console.log(add(8,5))


const h1 = document.createElement('h1');
h1.innerText = 'Welcome to WebPack';
h1.classList.add('heading');

document.getElementById("root").appendChild(h1);

const input = document.createElement('input');
input.placeholder ="Type here .. "
input.setAttribute('id','input_val')

const ul = document.createElement('ul');
ul.setAttribute('id','ul_Val')

const btn = document.createElement('button')
btn.innerText = "Add"
btn.addEventListener('click',function(){
    let li = document.createElement('li');
    let inputval = document.getElementById('input_val').value;
    let x = document.createTextNode(inputval);
    li.appendChild(x);
    if(inputval === ''){
        alert("You must write something")
    }else{
        document.getElementById('ul_Val').appendChild(li)
    }
    document.getElementById('input_val').value = ''
});





document.getElementById('list').append(input , btn)
document.getElementById('ul').appendChild(ul)
