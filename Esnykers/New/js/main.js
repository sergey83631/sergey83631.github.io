alert('Ответ писать с большой буквы и на русском, после ответа нажимаешь Ок и будет следующий вопрос')
let nameOfPerson = 'Рита';
let name = prompt('Введите имя:');
while (name != nameOfPerson || name == ''){
    name = prompt('Введите имя:');
}
alert('Привет, ' + name);

let mainDateOur = '19';
let date = prompt('Введи число начала наших отношений:');
while (date != mainDateOur || date == ''){
    date = prompt('Введи число начала наших отношений:');
}
alert('Умничка! Ты близка к финишу =)');

let answerFromRita = 'Да';
let answer = prompt('Ты меня любишь?');
while (answer != answerFromRita || answer == ''){
    answer = prompt('Ты меня любишь?');
}
alert('Я тебя люблю больше!');
alert('Давай мириться? Пожалуйста');

let answerToInvite = 'Да';
let inviteToCafe = prompt('Ты согласна со мной встретиться вечером?');
while (inviteToCafe != answerToInvite || inviteToCafe == ''){
    inviteToCafe = prompt('Ты согласна со мной встретиться вечером?');
}
alert('Напиши мне в телегу +, потому что я еще не успел выучить, чтобы ответ приходил мне =)');
