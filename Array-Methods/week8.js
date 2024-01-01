/* 1. Write a program that uses filter to remove all negative numbers from an array of numbers */
var mixedNumArray = [1, -2, -3, 4, 5, -6, 7, -8, -9, 10];
var positiveNumArray = mixedNumArray.filter(function (positive) {
    if (positive > 0) {
        return true;
    }
});
console.log("problem 1 Output:", positiveNumArray);
/* 2. Given an array of numbers [1, 2, 3, 4, 5],
use the map method to create a new array where each number is multiplied by 2. */
var givenArray = [1, 2, 3, 4, 5];
var reqArray = givenArray.map(function (num) { return num * 2; });
console.log("problem 2 Output:", reqArray);
/* 3. Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
use the filter method to create a new array containing only the fruits with more than 5 characters. */
var givenArray2 = ["apple", "banana", "cherry", "date", "grape"];
var outputArray = givenArray2.filter(function (value) {
    if (value.length > 5) {
        return true;
    }
});
console.log("Problem 3 Output:", outputArray);
/* 4. Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
use the map and filter methods together to create a new array containing the squares of even numbers. */
var numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = numsArray.map(function (value) { return Math.pow(value, 2); }).filter(function (value) {
    if (value % 2 === 0) {
        return true;
    }
});
console.log("Problem 4 Output:", newArray);
/* 5. Given an array of temperatures in Celsius [0, 10, 20, 30, 40],
use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32. */
var celTempArray = [0, 10, 20, 30, 40];
var fahrenheitArray = celTempArray.map(function (celsius) { return (celsius * 9 / 5) + 32; });
console.log("Problem 5 Output:", fahrenheitArray);
/* 6. Given an array of numbers [3, 6, 9, 12, 15, 18],
use the map and filter methods together to create a new array containing the doubled values of odd numbers. */
var numsArray2 = [3, 6, 12, 15, 18];
var newArray2 = numsArray2.filter(function (value) {
    if (value % 2 !== 0) {
        return true;
    }
}).map(function (value) { return value * 2; });
console.log("Problem 6 Output:", newArray2);
/* 7. Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"],
use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!". */
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach(function (value) {
    console.log("".concat(value, "!"));
});
