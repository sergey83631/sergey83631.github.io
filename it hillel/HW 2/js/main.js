let a = +prompt('Введите число:', '');
let b = +prompt('Введите число:', '');
let c = prompt('Введите +, введите -, введите *, введите /', '');
let d;

switch (c){
  case '+':
  d = a + b;
  break;
  case '-':
  d = a - b;
  break;
  case '*':
  d = a * b;
  break;
  case '/':
  d = a / b;
  break;

  default:
  alert('Nichego');
}
alert(d);

function isNumber(value){
return typeof value === 'number' && !isNaN(parseFloat(value)) && isFinite(value);
}

console.log(isNumber('10'))
console.log(isNumber(0))
console.log(isNumber(10.34))
console.log(isNumber('hi' / 3))
console.log(isNumber(-Infinity))
console.log(isNumber(undefined))