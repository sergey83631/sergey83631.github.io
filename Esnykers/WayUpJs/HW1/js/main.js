// part 1 //
console.log("Part 1");
let city = 'Kharkiv';
console.log(city);
let country = 'Ukraine';
console.log(country);
let population = 2000000;
console.log(population);
let footballStadion = true;
console.log(footballStadion);

// part 2 //
console.log("Part 2");
let weight = 70;
let height = 40;
let square = height * weight;
console.log("Площадь равна: " + square);

// part 3 //
console.log("Part 3");
 let time = 2;
 let speedOfFirst = 95;
 let speedOfSecond = 114;

 let distanceOfFirst = speedOfFirst * time;
 console.log("Distance from town 1: " + distanceOfFirst);
 let distanceOfSecond = speedOfSecond * time;
 console.log("Distance from town 2: " + distanceOfSecond);

 // part 4 //
 console.log("Part 4");
 const randomNumber = Math.floor(Math.random() * 100);
 if(randomNumber < 20){
     console.log("randomNumber меньше 20");
 }else if(randomNumber > 50){
     console.log("randomNumber больше 50");
 }else{
     console.log("randomNumber больше 20, и меньше 50")
 }

 // part 5 // 
 console.log("Part 5");
 const randomNumber2 = Math.floor(Math.random() * 100);
 switch(true){
     case randomNumber2 < 20 : 
     console.log("randomNumber2 меньше 20");
     break;
     case randomNumber2 > 50 :
     console.log("randomNumber2 больше 50");
     break;
     default:
     console.log("randomNumber2 больше 20, и меньше 50");
 }