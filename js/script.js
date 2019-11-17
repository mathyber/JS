//1. Написать функцию, которая на вход принимает целое число и возвращает факториал
//этого числа.
function factorial(n) {
  let fact = 1;
  for(let i=1; i<=n; i++){
    fact=fact*i;
  }
  return fact;
}

/*
//версия с рекурсией
function factorial(n){
  return n == 0? 1: n*factorial(n-1);
}
*/
console.log("1)");
console.log(factorial(5));

//2. Написать функцию, которая на вход принимает строку и возвращает длину самого
//длинного слова в этой строке.
function longestWord(str){
  return Math.max.apply(null, str.split(" ").map(word => word.length));
}

console.log("2)");
console.log(longestWord("gznm d 3ddsn 123 nc cnscnd csdncbnc dd"));

//3. Написать функцию, которая на вход принимает массив, состоящий из массивов
//целых чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив
//состоящий из наибольшего числа каждого предоставленного подмассива.
function arrayOfLargestNum(mas){
  return mas.map(m => Math.max.apply(null, m));
}

console.log("3)");
console.log(arrayOfLargestNum([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));

//4. Написать функцию, которая на вход принимает строку и целое число
//и обрезает строку (первый аргумент), если она длиннее заданной
//максимальной длины строки (второй аргумент) и возвращает обрезанную строку с «…»
//в конце.
function shortWord(str, num){
  return str.length > num? str.slice(0, num-1) + "…": str;
}

console.log("4)");
console.log(shortWord("ступеньки", 4));

//5. Написать функцию, которая на вход принимает строку и возвращает эту строку в
//формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
function wordsUpperCase(str){
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log("5)");
console.log(wordsUpperCase("ступеньки живут своей жизнью Крутых парней, кек"));

//6. Написать функцию, которая на вход принимает два массива и целое число n. Функция
//должна скопировать каждый элемент первого массива во второй по порядку начиная с
//индекса n второго массива и вернуть полученный массив. Входные массивы не должны
//изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться
// [4, 1, 2, 3, 5].
function copyArray(mas1, mas2, n){
  arr=[];
  return arr.concat(mas2.slice(0, n), mas1, mas2.slice(n, mas2.length));
}

console.log("6)");
console.log(copyArray([1, 2, 3], [4, 5], 1));

//7. Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
//значения"

function arrayWithoutFalsy(mas){
  return mas.filter(Boolean);
}

console.log("7)");
console.log(arrayWithoutFalsy([1, 0, "xvxv", "", false, NaN, "NaN" ,undefined, 43, "dfsd", "", 0, 1, 5]));

//8. Написать функцию, которая на вход принимает массив, состоящий из двух строк.
//Функция должна вернуть true, если строка в первом элементе массива содержит все
//буквы строки во втором элементе массива (регистр игнорируется).
function stringLetters(mas){
  return mas[1].toUpperCase().split('')
            .every(val => mas[0].toUpperCase().split('').includes(val));
}

console.log("8)");
console.log(stringLetters(["lAdBcGGhH", "LAg"]));

//9. Написать функцию которая на вход принимает массив и целое число. Функция должна
//разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их
//в виде двумерного массива.
function splitArray(mas, size){
  while(mas.length)
    arr.push(mas.splice(0, size));
  return arr;
}

console.log("9)");
console.log(splitArray([1,2,3,4,5,6],2))

//10. Используя рекурсию (без использования циклов). Написать функцию, которая
//принимает массив и целое число (n) и заполняет массив числами от n до 1.
function fillArray(mas, n){
  mas.push(n);
  if (n>1) fillArray(mas, n-1);
}

console.log("10)");
massiv = [];
fillArray(massiv, 15);
console.log(massiv);
