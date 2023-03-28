
//Написать игру Угадай число

let secretNumber = Math.floor(1 + Math.random() * 10);
let num;

do {
  num = prompt("Угадайте число от 1 до 100");

  if (num < secretNumber) {
    alert("Загаданное число больше");
  } else if (num > secretNumber) {
    alert("Загаданное число меньше");
  }
} while (num != secretNumber);

alert("Вы угадали число!");
