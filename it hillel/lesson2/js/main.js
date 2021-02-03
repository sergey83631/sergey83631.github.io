// let user = +prompt('Enter your chocie');
// let result = null;

// if(user == 1){
//     result = 'U want small', '30';
// } else if(user == 2){
//     result = 'U want middle', '50';
// }else if(user == 3){
//     result = 'U want big', '70';
// }else{
//     result = ('Go out')
// }
// console.log(result);

// let user = +prompt('Enter your choice');
//     result = user == 1 ? 'U want small' : 
//              user == 2 ? 'U want middle' :
//              user == 3 ? 'U want big' : 'go out';
// console.log(result);


// let number1 = +prompt('Введите число:', '');
// let number2 = +prompt('Введите число:', '');
// let number3 = +prompt('Введите znak:', '');
// result = null;


// // d = number1 `${number3}` number2;

// switch (result) {
//   case 1:
//     number3 = number1 + number2;
//     alert('+')
//     break;

//   case 2:
//     alert('Вы ввели число 1');
//     break;

//   case 3:
//     alert('chislo -');
//     break;
//   case 4:
//     alert('asd');
//     break;

//     default:
//     alert('Результат выглядит странновато. Честно.');
// }


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