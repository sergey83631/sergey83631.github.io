let num1 = +prompt('Введите число:', '');

let operator = prompt('Введите +, введите -, введите *, введите /', '');
let result;

    if(num1 == null){
      alert('Error');
    }else if(!isNumber(num1)){
      alert('Не число');
    }else{
      let num2 = +prompt('Введите число:', '');
    }
    switch (operator)
    {    
      case '+':{
      result = num1 + num2;
      }break;
      case '-':{
      result = num1 - num2;
      }break;
      case '*':{
      result = num1 * num2;
      }break;
      case '/':{
        result = num1 / num2;
      }break;
      default:{
        result = 'Вы ввели неправильный знак:';
      }
    }
    alert(result);

    

// проверяем отмену()
// проверяем на число




