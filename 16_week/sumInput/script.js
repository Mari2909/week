let sum = 0;
function sumInput() {
    let arr = [];
    for (; ;) {
        const value = +prompt("Введите число", '');
        arr.push(value);
        if (!value) break;
    }
    if (arr.length > 1) { arr.pop(); };
    arr.sort();
    alert(arr);
    sum = arr.reduce((sum, item) => sum += +item, 0);
    alert(sum);
}
