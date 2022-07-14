/*
Day 3 HW: 
TODO: Write a function which can print the first 10 digits of the fibonacci sequence
TODO: create a GitHub repository and push your code 
TODO: share the link to the repository on Canvas
*/

function firstTenFibonacci() {
    //Initialize and print the first two numbers
    let num1 = 0
    let num2 = 1
    console.log("Fibonnaci number 1:", num1)
    console.log("Fibonnaci number 2:", num2)

    //Print the remaining 8 numbers using the fibonacci formula
    let i = 0
    while (i < 8) {
        let next = num1 + num2
        console.log("Fibonnaci number %i:", i + 3, next)
        num1 = num2
        num2 = next
        i++
    }
}

firstTenFibonacci()