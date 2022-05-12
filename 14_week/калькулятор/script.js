let showResultSum=()=> {
    let resultSum = +document.getElementsByTagName("input")[0].value + +document.getElementsByTagName("input")[1].value;
    document.getElementById("result").value = resultSum;
}

let showResultSubtraction=()=>{
    let resultSubtraction=document.getElementsByTagName("input")[0].value - document.getElementsByTagName("input")[1].value;
    document.getElementById("result").value=resultSubtraction;
}

let showResultDivision=()=>{
    let resultDivision=document.getElementsByTagName("input")[0].value / document.getElementsByTagName("input")[1].value;
document.getElementById("result").value=resultDivision;
}

let showResultMultiplication=()=>{
    let resultMultiplication=document.getElementsByTagName("input")[0].value * document.getElementsByTagName("input")[1].value;
document.getElementById("result").value=resultMultiplication;
}

function clickDiv(){
    let color = document.getElementsByTagName('div'); 
    color.style.background = 'blue';
} 