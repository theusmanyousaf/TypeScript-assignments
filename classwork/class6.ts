// i++ post-fix increment operator
// i-- post-fix decrement operator

// ++i pre-fix increment operator
// --i pre-fix decrement operator

/*
let i = 1;
let result = 2+ 4 + i++; // first it solves the expression then increments the value of i
let result2 = 2+ 4 + ++i; // first it increments the value of i then solves the expression
// ++i
// i--
// --i
console.log("i", i);
console.log("result", result);
console.log("result2", result2);*/

// --------------------------------------------------------------------------------------
/*
// For loop

for (let index = 10; index < 20; index++) {
    console.log("Usman",index);
    
}
let inc = 40;

// Do While loop
do{
    console.log("usman");
    inc++;
    
} while (inc<30);*/

// Write a ts program that calculate sum of even numbers between 1 to 100, also print the list of numbers participating in sum.

//     let result = 0;
//     let list:number[] = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         list.push(i);
//         result += i; 
//     }
// }
// console.log("result",result,"\nlist",list);

// function that takes positive integer as parameter and uses a while loop to calculate the factorial of that number.

function factorialOfNumber(num:number): number {
    let factorial:number = 1;
    if(num>0){
        while(num > 0){
            factorial = factorial * num;
            num = num -1;
        } 
        return factorial;
    }
    return factorial;
}

console.log(factorialOfNumber(0));


// function that take an array of numbers as a parameter, 
// use while loop to calculate and return the sum of all the numbers in the array.
let array1:number[] = [1,2,3,4];

function sumOfNumber(arr:number[]){
    let i = 0;
    let sum = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

console.log(sumOfNumber(array1));


