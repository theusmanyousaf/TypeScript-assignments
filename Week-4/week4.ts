                    // Usman-Yousaf

// 1. Program to convert temprature (from Celsius to Fahrenheit and vice verse)

function CtoF(Ctemp:number): number{
    return (Ctemp * (9/5)) + 32 
}

function FtoC(Ftemp:number): number {
    return (Ftemp - 32) * 5/9
}

console.log(CtoF(-18))
console.log(FtoC(0))

// 2. Program to Calculate Percentage

function PercentageCal(num: number[]): number | string{
    var sum = 0;
    var percentage = 0;
    for(let i= 0; i < num.length; i++){
        if(num[i] >= 0){
            sum += num[i]; 
        }
        else{
            return "Invalid value of marks";
        }
    }
    return percentage = sum / num.length
}

console.log(PercentageCal([93,85,82,80,70,61]))

// 3. Program to convert number of days into weeks and days

function daysConverter(num:number): string{
    if(num >= 0){
        var weeks = Math.floor(num/7);
        var days = num % 7;
        return `${weeks} weeks and ${days} days`
    }
    else{
        return "Invalid Number of Days"
    }
}

console.log(daysConverter(70))

// 4. Discount Calculator based on price of Product

function Discount(price:number): number{
    var discount = 0;
    if(price >= 100){
        return discount = price * 0.1
    }
    else{
        return discount = price * 0.05
    }
}

console.log(Discount(90))

// 5. Age-Category determining program

function ageCategory(age:number): string {
    if(age >= 0 && age <= 12){
        return "Child"
    }
    else if(age >= 13 && age <= 19){
        return "Teenager"
    }
    else{
        return "Adult"
    }
}

console.log(ageCategory(13))

// 6. Program to suggest clothes based on temperature

function clothesSuggestor(temp:number): string{
    if(temp <= 10){
        return "Wear heavy and warm clothes"
    }
    else if(temp > 10 && temp <= 25){
        return "Wear warm clothes"
    }
    else{
        return "Wear light and cool clothes"
    }
}

console.log(clothesSuggestor(34))

// 7. Program that checks a number divisible by 3 or 5 or not

function divisionCheck(num:number): string {
    if(num % 3 === 0){
        if(num % 5 === 0){
            return "Number is divisible by 3 and 5."
        }
        return "Number is divisible by 3."
    }
    else if(num % 5 === 0){
        return "Number is divisible by 5."
    }
    else {
        return "Number is nither divisible by 3 nor 5."
    }
}

console.log(divisionCheck(37));

// 8. Program to check if give year is leap year or not

function leapYearChecker(year:number): string{
    if(year % 4 === 0){
        return "Given year is a Leap Year."
    }
    else{
        return "Given year is not a Leap Year."
    }
}

console.log(leapYearChecker(2022));

// 9. Program which takes an input as number and output a corresponding day of the week

function dayOfWeek(num:number): string{
    if(num == 1){
        return "Monday"
    }
    else if(num == 2){
        return "Tuesday"
    }
    else if(num == 3){
        return "Wednesday"
    }
    else if(num == 4){
        return "Thursday"
    }
    else if(num == 5){
        return "Friday"
    }
    else if(num == 6){
        return "Saturday"
    }
    else if(num == 7){
        return "Sunday"
    }
    else{
        return "Number should be between 1 to 7."
    }
}

console.log(dayOfWeek(3));

// 10. Program to allot tax based on Number of unit consumed by a user

function taxCalculator(unitsConsumed:number): string{
    var unitPrice: number = 12;
    var totalBill: number = unitPrice * unitsConsumed;
    if(unitsConsumed < 100){
        return `Added tax is 0`
    }
    else if(unitsConsumed >= 100 && unitsConsumed < 200){
        return `Added tax is 10% = ${totalBill * 0.10}`
    }
    else if(unitsConsumed >= 200 && unitsConsumed < 300){
        return `Added tax is 15% = ${totalBill * 0.15}`
    }
    else if(unitsConsumed >= 300 && unitsConsumed < 400){
        return `Added tax is 18% = ${totalBill * 0.18}`
    }
    else if(unitsConsumed >= 400 && unitsConsumed <= 500){
        return `Added tax is 20% = ${totalBill * 0.20}`
    }
    else {
        return `Added tax is 25% = ${totalBill * 0.25}`
    }
}

console.log(taxCalculator(200));

