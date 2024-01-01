/*         Assignment of For Loop programs      */
/* 1. Develop a program that calculates and prints the sum of the first 'n' even numbers using a for loop. */
var n = 10;
var sum = 0;
for (var i = 0; i <= 2 * n; i += 2) {
    sum = sum + i;
}
console.log("Sum of First ".concat(n, " Even Numbers is:"), sum);
/* 2. Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers. */
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = []; /* Assuming I would store them in a new array */
for (var i = 0; i < array1.length; i++) {
    if (i % 2 === 0) {
        newArray.push(i);
    }
}
console.log("Even numbers from given array are:", newArray);
/* 3. Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones */
var array2 = [1, 2, 4, 3, 4, 5, 6, 6, 7, 8, 9, 10];
/* in this chunck of code below the index increses while the elemnt of an array is removed from that index,
 then the loop starts from updated array and updated index of the loop,
which somtimes can skips the consecutive element in that array. To avoid that skiping of same index element of updated loop,
we add i-- to the program that will makes the value of i 1 less so that next time the loop updates the value of i.
*/
for (var i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        array2.splice(i, 1);
        i--;
    }
}
console.log('Modified array after itration is:', array2);
/* 4. Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area. */
function areaOfCircle(r) {
    var pi = 3.14;
    var area = pi * Math.pow(r, 2);
    return area;
}
console.log("Area of Circle of given radius is:", areaOfCircle(10));
/* 5. Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array. */
var listOfGrades = [60, 42, 39, 73, 49, 50, 86, 77, 34, 59, 90];
for (var i = listOfGrades.length; i > 0; i--) {
    if (listOfGrades[i] < 50) {
        listOfGrades.splice(i, 1);
    }
}
console.log('Modified list after removing failing grades(below 50) is:', listOfGrades);
/* 6. Write a program that uses a function to find the largest element in an array of numbers. */
var largestnumber = 1;
var arrayOfnumbers = [10, 13, 123, 90, 40, 44, 32, 22, 34, 100, 20];
function largestNumberFinder(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestnumber) {
            largestnumber = arr[i];
        }
    }
    return largestnumber;
}
console.log("Largest number in given array is:", largestNumberFinder(arrayOfnumbers));
