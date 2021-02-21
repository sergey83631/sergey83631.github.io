var words = ['мама', 'футбол', 'машина', 'прекрасный', 'папа', 'телефон', 'планшет', 'книга'];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

var remainingLetters = word.length;
while (remainingLetters > 0){
    alert(answerArray.join(' '));

var guess = prompt('Угадайте букву, или нажмите Отмена для выхода.');
if (guess === null && guess === NaN) {
    break;
}else if (guess.length !== 1){
    alert('Введите, пожалуйста, одну букву');
}else{
    for (var j = 0; j < word.length; j++){
        var letterWasEntered = answerArray[j] === guess;
        if (letterWasEntered) {
        alert("Вы уже вводили эту букву");
        break;}
        if (word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
}
alert(answerArray.join(' '));

alert('Отлично! Было загадано слово ' + word);
