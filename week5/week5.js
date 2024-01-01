/* 1. a function that takes an array, an index and a value as parameters.
inside the function use splice method to insert the value at specific index
return the modified array. */
// this function deletes no values from the given array
function splicer(anArray, anIndex, aValue) {
    anArray.splice(anIndex, 0, aValue);
    return anArray;
}
console.log(splicer(['usman', 'a', 'program'], 1, 'writes'), '\n');
/* 2. Shopping Cart program using an array.
create a function to add items, remove items and update quantities using splice method.
print contents of cart after each operation. */
var shoppingCart = ['Eggs', 'Rice', 'Cookies'];
// Function for Adding items in ShoppingCart
function addItems(itemIndex, itemName) {
    shoppingCart.splice(itemIndex, 0, itemName);
    return shoppingCart;
}
console.log(addItems(0, 'Meat'));
// Function for removing items from the ShoppingCart
function removeItems(itemIndex, numberOfItemsToRemove) {
    shoppingCart.splice(itemIndex, numberOfItemsToRemove);
    return shoppingCart;
}
console.log(removeItems(1, 1));
// Function for updating items in the ShoppingCart
function updateQuantities(itemIndex, updatedItem) {
    var i = 0;
    while (i < shoppingCart.length) {
        if (itemIndex === i) {
            shoppingCart.splice(i, 1, updatedItem);
        }
        i++;
    }
    return shoppingCart;
}
console.log(updateQuantities(1, "Apples"));
/* 3. A Program that uses a while-loop to print first 25 integers. */
// whenever I use the program inside function the last value of output is undefined. How can I fix it?
console.log("\nFirst 25 Integers are:");
var initialValue = 1;
while (initialValue <= 25) {
    console.log(initialValue);
    initialValue += 1;
}
/* 4. A Program that uses a while-loop to print first 10 even numbers. */
console.log("\nFirst 10 Even Numbers are: ");
var initialVal = 0;
while (initialVal < 20) {
    if (initialVal % 2 === 0) {
        console.log(initialVal);
    }
    initialVal += 1;
}
/* 5. a function that takes a positive interger as parameter
and uses a while loop to calculate and return the factorial of that number. */
function factorialOfNumber(num) {
    if (num > 0) {
        var factorial = 1;
        while (num >= 1) {
            factorial = factorial * num;
            num -= 1;
        }
        return factorial;
    }
    else {
        return 1;
    }
}
console.log('\nFactorial of the given Number is: ', factorialOfNumber(5));
/* 6. Write a program having a array of numbers.
If the number is negative it should remove the negative number from the array. */
var aNumberArray = [1, -2, -5, 3, 4, 5, -6, 7, 8];
var i = aNumberArray.length;
while (i > 0) {
    if (aNumberArray[i] < 0) {
        aNumberArray.splice(i, 1);
    }
    i--;
}
console.log('Array without Negative Numbers is: ', aNumberArray);
/* 7. create a function that takes an array of numbers as parameter.
Use while loop to calculate and return sum of all the number in that array. */
function sumFromArrayValues(num) {
    var i = 0;
    var arraySum = 0;
    while (i < num.length) {
        arraySum += num[i];
        i++;
    }
    return arraySum;
}
console.log('Sum of the numbers in given Array is: ', sumFromArrayValues([1, 2, -3, 4, -5, 6, 7, 8, -9]));
/* 8. A Program that takes a list of temperatures in celsius as input from the user,
and convert each temperature into Fahrenheit and store them in another array.
use while loop to perform the conversion.*/
function arrayTempConverterCtoF(cTempArray) {
    var i = 0;
    var fTempArray = [];
    while (i < cTempArray.length) {
        fTempArray[i] = (cTempArray[i] * 9 / 5) + 32;
        i++;
    }
    return fTempArray;
}
console.log('Array of temperatures in Fahrenheit is: ', arrayTempConverterCtoF([30, 40, 10, -3, 55]));
