console.clear()

// variable Hoisting
// console.log(num1)
// num1=10;
// console.log(num1)
// var num1;

// function Hoisting
// sum(5,10)
// sum(30,22)

var sum=function(num1, num2)
{
    total=num1+num2
    var total
    console.log(total)
}
sum(90, 8)