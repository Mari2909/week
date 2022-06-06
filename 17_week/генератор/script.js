const button = document.querySelector('button');

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

function result () {
    let arr = [];
    for ( i = 0; i < 10; i++ ) {
    arr.push(getRandomIntInclusive(-10, 10));
    }

    const numbers = arr.join(); 
    const minValue = Math.min( ...arr );
    const maxValue = Math.max( ...arr );
    const sumValue = arr.reduce((a,b)=>a+b);
    const multiplicationValue = arr.reduce((a,b)=>a*b);
    const averageionValue = arr.reduce((a,b)=>(a+b)/arr.length);


    const txt = `
                Сгенерировали:  ${arr.join(' ')}
                Минимальное: ${minValue}
                Максимальное: ${maxValue}
                Среднее арифметическое: ${averageionValue}
                Сумма чисел: ${sumValue}
                Произведение чисел: ${multiplicationValue}
    `;
    alert(txt)
} 

button.addEventListener("click", result);