const arr = ['js', 'css', 'html'];
alert(arr[0]);

const values = [0, 1, false, 2, undefined, '', 3, null];
const filteredValues = values.filter(el => el);
alert(filteredValues);

const numbers = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
const el = numbers.findIndex(el => el.length > 3);
alert(el);