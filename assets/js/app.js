let btn = document.getElementById('addbtn');

btn.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let r = num1 + num2;
    document.getElementById('result').value = r;
    
})
let btn1 = document.getElementById('subtractbtn');

btn1.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let r = num1 - num2;
    document.getElementById('result').value = r;
    
})
let btn2 = document.getElementById('multiplybtn');

btn2.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let r = num1 * num2;
    document.getElementById('result').value = r;
    
})
let btn3 = document.getElementById('dividebtn');

btn3.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let r = num1 / num2;
    document.getElementById('result').value = r;
    
})

