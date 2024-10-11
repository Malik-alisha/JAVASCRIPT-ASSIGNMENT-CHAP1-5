// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
// let num1 = 3;
// let num2 = 5;
// let sum = num1 + num2;

// document.write(`The sum of 3 & 5 is ${sum}`);

// 2.Repeat task 1 for substraction,multiplication,division & modulus. 
// for subtraction.....
// let num1 = 3;
// let num2 = 5;
// let subtract = num1 - num2;

// document.write(`The subtraction of 3 & 5 is ${subtract}`);

// for multiplication......
// let num1 = 3;
// let num2 = 5;
// let multiply = num1 * num2;

// document.write(`The multiplication of 3 & 5 is ${multiply}`);

// for division...........
// let num1 = 3;
// let num2 = 5;
// let divide = num1 / num2;

// document.write(`The division of 3 & 5 is ${divide}`);

// for modulus........
// let num1 = 3;
// let num2 = 5;
// let modulus = num1 % num2;

// document.write(`The modulus of 3 & 5 is ${modulus}`);

// 3.Do the followin using JS mathematic Expressions 
// a.Declare a variable
// b.show the valve of variable in your browser like valve after variable declaration is:??
// c.Initialize the variable with some Number. 
// d.Show the valve of variable in your browser like initial valve 5.
// e.Increment the variable. 
// f.show the valve of variable in your browser like valve after increment is 6
// g.ADD 7 to the variable
// h.Show the value of variable in your browser like value after addition is 13
// i.Decrement the variable. 
// j.Show the value of variable in your browser like valve after decrement is 12
// k.Show the reminder after dividing the variables value by 3
// l.output the reminder is 0

// let myPhone;
// document.write ("Value after variable declaration is " +  myPhone + "<br>");

// myPhone = 5;
// document.write ("Initial value: " + myPhone + "<br>");

// myPhone++;
// document.write ("Value after increment is: " + myPhone + "<br>");

// myPhone += 7;
// document.write ("Value after addition is: " + myPhone + "<br>");

// myPhone --;
// document.write ("Value after decrement is: " + myPhone + "<br>");

// let remainder = myPhone % 3;
// document.write ("The remainder is: " + remainder);

// 4.cost of one movie ticket is 600PKR. Write a script to store ticket price in a variable & calculte the cost of buying 5 ticketsto a movie example output
// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;

// document.write ("Total cost to buying 5 tickets to a movie is: " + totalCost + "PKR");

// 5.write a script to display multiplication table of any number in your browser
// let digit = 4;
// document.write("<h2>Table of 4:</h2> <br>");

// for (var i = 1; i <=10; i++ ) {
//    document.write (`${digit} x ${i} = ${digit *i} <br>`);
// }

// 6.the temperature converter its hoyt out lets make a converter based on the steps here
// a store a celsius temperature into a variable 
// b convert it to fahrenheit &  output Na.CIS Na.F
// C now store a farenheit temperatiure into a variable 
// d convert it to celsius & output NN.f is NN.c
// Formulae.......
// let celTemp = 25; 
// let fahrenTemp = (celTemp * 9/5) + 32;
// document.write(`${celTemp}°C is ${fahrenTemp}°F<br>`);

// let fahrenheit = 70
// let celsius = (fahrenheit - 32) * 5/9;
// document.write(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);

// -------------------QUETION NO 7----------------------
// let priceOfItem1 = 650;
// let priceOfItem2 = 100;
// let quantityOfItem1 = 3;
// let quantityOfItem2 = 7;
// let shippingCharges = 100;

// let totalCostItem1 = priceOfItem1 * quantityOfItem1;
// let totalCostItem2 = priceOfItem2 * quantityOfItem2;

// let grandTotal = totalCostItem1 + totalCostItem2 + shippingCharges;

// document.write ("<h2>Shopping Chart</h2> <br>");
// document.write (`price of item 1 is ${priceOfItem1} <br>`);
// document.write (`quantity of item 1 is ${quantityOfItem1} <br>`);
// document.write (`price of item 2 is ${priceOfItem2}  <br>`);
// document.write (`quantity of item 2 is ${quantityOfItem2} <br>`);
// document.write (`shipping charges is ${shippingCharges}  <br><br>`);
// document.write (`Total cost of your order is ${grandTotal}`);

// -------------------QUETION NO 8----------------------
// let totalMarks = 980;
// let marksObtained = 804;

// let percentage = (marksObtained / totalMarks)*100;

// document.write ("<h2>Marks Sheet;</h2><br>");
// document.write (`Total Marks: ${totalMarks} <br>`);
// document.write (`Marks Obtained: ${marksObtained} <br>`);
// document.write (`percentage: ${percentage.toFixed(13)} % `);

// -------------------QUETION NO 9----------------------
// let usDollars = 10;
// let saudiRiyals = 25;

// let totalPKR = (usDollars *104.80) + (saudiRiyals *28);

// document.write("<h2>Currency in PKR</h2>");
// document.write (`Total Currency in PKR: ${totalPKR}`);

// -------------------QUETION NO 10----------------------
// let number = 15;
// let result  = ((number + 5)* 10)/2;
// document.write("<h2>Arithmetic Operator</h2> <br>");
// document.write (`Initial number: ${number} <br>`);
// document.write (`Result after performing arithmetic operations ${result}`);

// -------------------QUETION NO 11----------------------
// let currentYear = 2024;
// let birthYear = 1999;
// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;

// document.write ("<h2>Age Calculator</h2> <br> <br>");
// document.write ("Current Year:2016 <br>");
// document.write ("Birth Year Year:1992 <br>");
// document.write (`They are either ${age1} or ${age2} years old`);

// -------------------QUETION NO 12----------------------
// let radius = 20;
// let pi = 3.142;
// let circumference = 2 * pi * radius;
// let area = pi *Math.pow(radius,2);

// document.write ("<h2>The Geometrizer </h2><br>");
// document.write (`Radius of a circle is: 20 <br>`);
// document.write (`The circumference is: ${circumference.toFixed(14)} <br>`);
// document.write (`The area is: ${area.toFixed(1)}`);

// -------------------QUETION NO 13----------------------
// let favoriteSnack = " lays";
// let currentAge = 19;
// let EstimatedMaximumAge = 65;
// let  AmountOfsnackPerDay = 3;

// let yearsLeft =  EstimatedMaximumAge - currentAge;
// let totalSnacks = yearsLeft * 1 * AmountOfsnackPerDay;

// document.write ("<h2>The Lifetime Supply Calculator</h2> <br> <br>");

// document.write (`Favorite Snack: ${favoriteSnack} <br> `);
// document.write (`Current age: ${currentAge} <br>`);
// document.write (`Estimated Maximum Age: ${EstimatedMaximumAge} <br>`);
// document.write (`Amount 0f snacks per day: ${AmountOfsnackPerDay} <br>`);
// document.write (`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${ EstimatedMaximumAge}`);




// ------------------------------------------chap 1-5 ASSIGNMENT END----------------------------------------------------



