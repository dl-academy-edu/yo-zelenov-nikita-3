
function enterNumber() {
    let age = +prompt("Чколько вас годиков?", 0);
    if (age > 18) {
      alert("А ты не врешь, тебе и правда есть 18!");
    } else {
      enterNumber();
    }
  }
  
  enterNumber();


// 1primer
function add(a, b) {  
    if(a > 0 && b > 0) {
        return a + b;
    } 
}

add(5, 8);  // Не изменяет состояние приложения(ничего не выводит на экран)

//2pr
function subtract(a, b) {  
        return a - b;   
    }
  //  ф-ция выводит одинаковый результат, если а=7, b=5, то мы вседа будем поулчать 2

  //3pr
  function divide(a, b) {
    if(b === 0) {
        return"Ну ты куда на 0 то делишь???";
    } else {
        return a/b;
    }
  }
  // функия выполняет деление до тех пор, пока в примере не будут делить на 0. При делении на 0 всегда получим ошибку.

  //4pr
  function multiply(a, b) {
    if(a ==== 0) {
        return"Ну ты реально пень, иди учи матан";
    } else {
        return a*b
    }
  } 
  // фунцуия выполняет деление, пока не будет произведено умнодение на 0, после чего он скажет что пора учить матан.

  function addCreator(a) {
    return function addCreator(b) {
        if(typeof a === "number" && typeof b === "number") {
            return a + b;
        }
    };
}

const addNumder = addCreator(5);

console.log(addNumber(5)); 
console.log(addCreator(1)(3)); 



function countCreater(step = 2) {
    let index = 0;
    return function() {
      index += step;
      return index;
    }
  }
  
  const counter = countCreater();
  
  console.log(counter()); // 2
  console.log(counter()); // 4
  console.log(counter()); // 6