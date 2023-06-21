const btn1 = document.getElementById('btn1');
let number

function fun1() {
    number = document.getElementById('tbnumber').value;
    const out1 = document.getElementById('output1');
    out1.innerHTML = number;
}

function updateHtml(){
    const out1 = document.getElementById('output1');
    out1.innerHTML = number;
}

btn1.addEventListener('click',fun1);


let bool = false;   
function doSomething(){
    //number = document.getElementById('tbnumber').value
    
    console.log(number - 1)
    number--

     
    updateHtml()
}

function doSomething2(){
    //number = document.getElementById('tbnumber').value

    bool=true;
    if (bool)
    {
    console.log(number + 1)
    number++
    bool = false;
    } 
        updateHtml()

}


function doSomething3(){

    bool=true;
    if (bool)
    {
    console.log(number / 2)
    number = number / 2
    bool = false;
    } 
        updateHtml()

}


function doSomething4(){

    bool=true;
    if (bool)
    {
    console.log(number * 2)
    number = number * 2
    bool = false;
    } 
        updateHtml()

}
