alert('Ответ писать с большой буквы и на русском, после ответа нажимаешь Ок и будет следующий вопрос')
// let nameOfPerson = ('Тая', 'Рита', 'Макар' || 'тая', 'рита', 'макар');
let name = prompt('Введите имя:');
while (name == '' || name == null){
    name = prompt('Введите имя:');
}
alert('Привет, ' + name);

let number = prompt('Я сделал игру, в которой нужно угадать число от 1 до 100. Давай посмотрим, сколько тебе нужно будет попыток) Введи число:' );
let NumberOfGuesses = 0;
let guess = Math.ceil(Math.random() * 100);
while(number != guess){
    if(number > guess){
        number = prompt('Много! Попробуй еще раз: ');
        NumberOfGuesses += 1;
    }
    if(number < guess){
        number = prompt('Мало! Попробуй еще раз: ');
        NumberOfGuesses += 1;
    }
}
alert('Ты угадал(а), ' + 'я загадал ' + guess + '. Тебе понадобилось ' + NumberOfGuesses + ' попыток');
// while (date != mainDateOur || date == ''){
//     date = prompt('Введи число начала наших отношений:');
// }
// alert('Умничка! Ты близка к финишу =)');

// let answerFromRita = 'Да';
// let answer = prompt('Ты меня любишь?');
// while (answer != answerFromRita || answer == ''){
//     answer = prompt('Ты меня любишь?');
// }
// alert('Я тебя люблю больше!');
// alert('Давай мириться? Пожалуйста');

// let answerToInvite = 'Да';
// let inviteToCafe = prompt('Ты согласна со мной встретиться вечером?');
// while (inviteToCafe != answerToInvite || inviteToCafe == ''){
//     inviteToCafe = prompt('Ты согласна со мной встретиться вечером?');
// }
// alert('Напиши мне в телегу +, потому что я еще не успел выучить, чтобы ответ приходил мне =)');
