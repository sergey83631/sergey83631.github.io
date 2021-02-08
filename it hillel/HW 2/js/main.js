let a = +prompt('Введите число:', '');
let b = +prompt('Введите число:', '');
let c = prompt('Введите +, введите -, введите *, введите /', '');
let d;

if(isNaN(a) || isNaN(b)){
  d = ('Введите число:');
}else if(!a || !b){
  d = ('Введите что-то:')
}else{
switch (c){
  case '+':{
  d = a + b;
  }break;
  case '-':{
  d = a - b;
  }break;
  case '*':{
  d = a * b;
  }break;
  case '/':{
  d = a / b;
  }break;
  default:{
  d = ('Вы ввели неправильный знак:');

}
}
}
alert(d);



