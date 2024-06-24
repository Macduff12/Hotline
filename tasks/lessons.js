// Рядок JavaScript at()
// let text = "Dima Top";
// let character = text.at(0);
// let character2 = text[3];
// let character3 = text.at(-1);
// console.log(character, character2, character3);

// Рядок JavaScript charAt()
let text2 = "HELLO WORLD";
let character4 = text2.charAt(0);
let character5 = text2[1];
let character6 = text2.charAt(text2.length - 1);
// console.log(character4, character5, character6);


// JavaScript String concat()
let text1 = "sea";
let text3 = "food";
let result = text1.concat(text3);
let text5 = "Hello";
let text6 = "world!";
let result2 = text5.concat(" ", text6);
// console.log(result2);

//Конструктор рядків JavaScript
let message = "Hello world";
let text7 = message.constructor;
// console.log(text7);

// Рядок JavaScript endsWith()
let text8 = "Hello World";
let result3 = text8.endsWith("World");
// console.log(result3);

let text9 = "Hello world, welcome to the universe.";
text9.endsWith("World", 11);
// console.log(text9);

// JavaScript String.fromCharCode()
let char = String.fromCharCode(65)
// console.log(char);
let text10 = String.fromCharCode(72, 69, 76, 76, 79);
// console.log(text10);

// JavaScript String includes()
let text11 = "Hello world, welcome to the universe.";
let result5 = text11.includes("Hello", 12) // 12 тут починаємо з поцихії з якої будемо рахувати типу я ставлю 12 тоді з 12 символа буде йти розрахунок
// console.log(result5);

//JavaScript String indexOf()
let text12 = "Hello world, welcome to the university."
let result6 = text12.indexOf("Welcome");
text12.indexOf("e")
// console.log(result6);


function isEvenSumThird(num){
    return num % 2 == 0
}

//Довжина рядка JavaScript
let text13 = "Hello world  University";
let length = text13.length
// console.log(length)

//JavaScript String localeCompare()
let text14 = "A";
let text15 = "a";
let result10 = text14.localeCompare(text15);
// console.log(result10)

//JavaScript String match()
let text16 = "The rain in SPAIN stays mainly in the plain";
text16.match(/ain/gi);
// console.log(text16)

//Рядок JavaScript padEnd()
let text17 = "5";
let padded = text17.padEnd(4, "0")
// console.log(padded)

//Рядок JavaScript padStart()
let text18 = "5";
let padded2 = text18.padStart(4, "0");
// console.log(padded2)

//Прототип рядка JavaScript
function employee(name, jobtitle, born, status, birthdate){
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
    this.status = status;
    this.birthdate = birthdate;
}

employee.prototype.salary = 2000;
const fred = new employee("Fred Flinstone", "Caveman", 1970, "worked", "29.10.1970")
// console.log(fred)

// function isEvenSecond(num){
//     return num % 2 === 0;
// }
// console.log(isEvenSecond(222))

//Repeat
let text20 = "Hello World!";
let result12 = text20.repeat(2);
// console.log(result12);

//JavaScript String replace()
let text21 = "Hello World!";
let result13 = text21.replace("World", "Universe");
// console.log(result13);
let text22 = "Mr Blue has a blue house and a blue car";
let result14 = text22.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});

// console.log(result14);
let text23 = "Mr Blue has a blue house and a blue car"
let position = text23.search("a | blue")
// console.log(position);

//JavaScript String slice()
let text24 = "Hello World!";
let result15 = text24.slice(0, 7);
// console.log(result15);

//JavaScript String split()
let text25 = "How are you doing today?";
const myArray = text25.split(" ");
// console.log(myArray);
let word = myArray[1];
// console.log(word);

// Рядок JavaScript startsWith()
let text26 = "How are you doing today?";
text26.startsWith("How", 1)
// console.log(text26);

//JavaScript String substr()
let text27 = "Hello World";
let result16 = text27.substr(1, 10);
// console.log(result16);


// reverse without method reverse
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// function isEven(num){
//     return num % 2 === 0;
// }
// console.log(isEven(1))

// function firstCharacter(str){
//     if(str.length === 0) {
//         return " ";
//     }
//     return str[0];
// }
// console.log(firstCharacter("hello"))

// function wordCount(str){
//     const words = str.split(" ");
//     return words.length;   
// }
// console.log(wordCount("Hello World"))


// task isPalindrome?
// function isPalindrome(str){
//     return str === str.split(" ").reverse().join(" ");
//     str = str.replace(/[^a-z]/g, '');
//     str = str.toLowerCase();
// }
// console.log(isPalindrome("racecar"))

//task kvadrat
// function square(num){
//     return num * num;
// }
// console.log(square(3))

//task add 2 numbers
// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(2,5))
//task isEven
// function isEvenSecond(num){
//     return num % 2 === 0;
// }
// console.log(isEvenSecond(10))
//task first character
// function firstCharacterSecond(str){
//     return str.charAt(0);
// }
// console.log(firstCharacterSecond("hello"))

//task done
// function stringLength(str){
//     return str.length;
// }
// console.log(stringLength("hello"))
//task done
// function isPositive(num){
//     return num > 0;
// }
// console.log(isPositive(20))

// function lastChar(str){
//     return str.charAt(str.length - 1)
// }
// console.log(lastChar("hello"))
//task done
// function stringToArray(str){
//     return str.split(" ");
// }
// console.log(stringToArray("hello world"))

//task done
// function max(num1, num2){
//     if(num1 < num2){
//         return num2;
//     }
// }
// console.log(max(10, 20))

// function isEmptyString(str){
//     return str.length === 0;
// }
// console.log(isEmptyString("asd"));

// function factorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function contains(arr, elem){
//     return arr.includes(elem);
// }
// console.log(contains([1, 2, 3, 4, 5], 2));

// function concatStrings(str1, str2, str3){
//     return str1 + str2 +str3
// }
// console.log(concatStrings("Fucka", "fucka", "fucka"));

//task done
// function isAdult(num){
//     return num >= 18;
// }
// console.log(isAdult(20));

//task done
// function isEvenCount(num){
//     return num % 2 === 0;
// }
// console.log(isEvenCount(10));

// function isAdultNum(num1, num2, num3){
//     if(num1 > num2){
//         console.log("Num1 bigger than num2")
//     } else if(num1 < num2){
//         console.log("Num2 bigger than num1") 
//     } else if(num1 > num3){
//         console.log("Num1 bigger than num3")
//     } else if(num3 > num1){
//         console.log("Num3 bigger than num1")
//     } else if(num3 < num2){
//         console.log("Num2 bigger than num3")
//     } else if(num2 < num3){
//         console.log("Num3 bigger than num2")
//     }
// }
// console.log(isAdultNum(10, 20, 30));


// function findMax(numbers){
//     let max = numbers[0];
//     for(let i = 1; i < numbers.length; i++) {
//         if(numbers[i] > max){
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function checkMarks(str, num){
//     str = "Mario"
//     num = 10;
//     let result = str + " " + num;
//     console.log(result);
// }
function checkRoad(num){
    return num + num;
}
console.log(checkRoad(10));