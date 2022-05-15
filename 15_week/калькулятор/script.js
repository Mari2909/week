const showResultSum=()=> {
    let resultSum = +document.getElementsByTagName("input")[0].value + +document.getElementsByTagName("input")[1].value;
    document.getElementById("result").value = resultSum;
}

const showResultSubtraction=()=>{
    let resultSubtraction=document.getElementsByTagName("input")[0].value - document.getElementsByTagName("input")[1].value;
    document.getElementById("result").value=resultSubtraction;
}

const showResultDivision=()=>{
    if (document.getElementsByTagName("input")[1].value==0) {
        alert ("На ноль делить нельзя!");
    } else {
        let resultDivision=document.getElementsByTagName("input")[0].value / document.getElementsByTagName("input")[1].value;
    document.getElementById("result").value=resultDivision;
    }
    
}

const showResultMultiplication=()=>{
    let resultMultiplication=document.getElementsByTagName("input")[0].value * document.getElementsByTagName("input")[1].value;
document.getElementById("result").value=resultMultiplication;
}

function clickDiv(){
    let color = document.getElementsByTagName('div'); 
    color.style.background = 'blue';
} 