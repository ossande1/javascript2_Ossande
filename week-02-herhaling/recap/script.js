let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let output = document.querySelector('#output');

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btn1 = document.getElementById('btn1');
let outputCalc = document.getElementById('outputCalc');

btn1.addEventListener('click', function(){
    outputCalc.textContent = calculater(input1.value, input2.value);

    input1.value = '';

    input2.value = '';
})

function calculater(a, b){
    return a * b;
}

btn.addEventListener('click', function(){
    console.log('object');

    btn.style.backgroundColor = 'green';

    output.textContent = input.value;

    output.style.color = 'green';

    input.value = '';
})