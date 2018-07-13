var name = "Jokkul";
console.log(name);



//LOOPS CLASS BELOW:
/*
//it repeats a new one over and over
//first time j++ is same as 0=0+1 ..is it less than 10? then print j
//then go back using 1 -- 1++ - 1=1+1 is it less then 10 then print j again and loop till max counter #
var j = 0;  
var counter = 10;  //(better grammer is vars on seperate lines)
    while(j < counter){            //meaning - while j is less than 10 
    j++;                           //increase j by 1 by adding 1 to it
    console.log(j);                //Now value of j is 1
}
*/


/*
var nameOfArtist="";
while(nameOfArtist !== "craig mack"){
	nameOfArtist = prompt("which artist passed today?").toLowerCase();
	    if(nameOfArtist === "craig mack"){
	    	alert("Craig kicked a brand new Flava in ya ear");
	    	break;  // in the slides he made a mistake breaks are always lowercase and red
	    }
}
*/

/*
//the while is a while loop

while(condition){
	Code block to be executed
}
*/


/*
//FIRST VERSION
//first "the number is i" first i is 0 ..print that
//then do i++ 0=0+1 = 1now ..loop to top ..print out the new 5
//continue only WHILE i is LESS THAN < 5!!
//if i is 5 it stops printing 
var i = 0;
do{
	console.log("The number is " + i);
	i++;
}while(i < 5);
*/

/*
//SECOND way : this way is a count down
var x = 10; //starts at 10
do{
	console.log("The number is " + x); // 9
	x--;  //9-1 = 8 //same as x = x-1
}while(x > 0); //wont do 0 cuz 0 is not greater then 0
*/


//FOR LOOP SECTION BELOW:
/*
//google nested for loops their apparently evil
for(var x = 0; x < 5; x++){
	console.log('The value of x is ===>' + x)
}
*/


/*
//ASK claude for a text about this later
//console.log(myArray.length);
var myArray = [5,6,7];
for(var x = 0; x < myArray.length; x++){
console.log(myArray[x] * 2);  //14
}
*/
/*
//var myArray = [5,6,7];
for(var x = 10; x >= 0; x--){
console.log(x);  //14
}
*/

/*
for(var x = 1; x <= 10; x++){
console.log(x);  //14
}
*/


//needed: https://www.w3schools.com/js/js_assignment.asp
//HOEMWORK DONE:
//WRITE A FOR LOOP THAT PRINTS:
//10   8   6    4  2   - and maybe 0 counting down from 10
/*
for(var x = 10; x >= 0; x-=2){
console.log(x);  //14
}
*/
/*
for(var x = 10; x >= 0; x--){
	if(x % 2 !== 0){
		console.log(x);
	}
}
*/

/*
var oddNum = 12;
while(oddNum > 0){
	oddNum -= 2;
	console.log(oddNum);
	    }
*/


/*
//it repeats a new one over and over
//first time j++ is same as 0=0+1 ..is it less than 10? then print j
//then go back using 1 -- 1++ - 1=1+1 is it less then 10 then print j again and loop till max counter #
var j = -1;  
var counter = 9;
    while(j < counter){ 
    j+=2;
    console.log(j);
}
*/


/*
//var oddNum = 12;
while(mikeyNum > 0 && mikeyNum < mikeynum[4]){
	mikey;
	console.log(oddNum);
	    }
*/

/*
for(var x = 10; x >= 0; x-=2){
console.log(x);  //14
}
*/


/*
var numSum = [1, 2, 3, 4, 5];
var m = 0;
for(var m = 0; m < numSum.length; m++){
	m = m + numSum[m];
}
console.log(m);
*/



/*
// var x = 0 is the starter
// x < 5 is the condition
//x++ is 0 + 1 =  1 and is the increment

for(var x = 0; x < 5; x++){
	console.log(x);
}
*/




/*
var x = 0;          //starter
while(x < 5){       //conditon
	console.log(x);
	x++;            //increment
}
*/




/*
 //WORKS PROPERLY: -- also name my things more specifically
var numSum = [1, 2, 3, 4, 5];
var mikeySum = 0;
for(var m = 0; m < numSum.length; m++){
//    console.log(mikeySum);
	mikeySum += numSum[m];               //sum = sum + numSum[0] //loop
}
console.log(mikeySum);
*/





/*
var myArray = [1, 2, 3, 4, 5];
var sum = 0;
var x = 0;
while(x < myArray.length){
	sum = sum + myArray[x]
    x++;
}
console.log(sum);
*/





/*
var j = -1;  
var counter = 9;
    while(j < counter){ 
    j+=2;
    console.log(j);
}
*/



/*
//index in an array is the position of something in array starting at position[0]
//element is whats in the array such as at index/position[0] below our element is 1
//writing a function that returns the second to last element of an array
//no matter the size of the array
var arrayThree = [1, 2, 3, 4, 5, 6, 7, 73 , 300, 450, 318, 500];

function secondToLast(){
	var result = arrayThree[arrayThree.length - 2];
	return result;
}
console.log(secondToLast());


// you are calling your array -- arrayFour to give u whole length of array - 2 to give u second to last position
var arrayFour = [1, 2, 3, 4, 5, 6, 7];
function seconToLast(){
	return arrayFour[arrayFour.length - 2];
}
console.log(seconToLast());
*/



/*
//it will always grab the second name
var student = ["Justice", "Michaelangelo", "Jokkul", "Isiah", "JoJo", "Amanuel", "Claude", "Jermaine"];
function secondName(){
	return student[1];
}
console.log(secondName());


var studentTwo = ["Justice", "Michaelangelo", "Jokkul", "Isiah", "JoJo", "Harry Potter", "Amanuel", "Claude", "Jermaine", "Mike"];
function secondNameTwo(){
	return studentTwo[studentTwo.length - 3];
}
console.log(secondNameTwo());
*/





//PROBLEM: HOMEWORK - 3/18/2018
var numArray = [2, 4, 6, 7, 8];
// each number sqquared is: 2^2 = 4, 4^2 = 16, 6^2 = 36, 7^2 = 49, 8^2 = 64
//will need a loop
//function square each number
function squareNum(){
  for(x = 0; x <= (numArray.length - 1); x++){
    console.log(Math.pow(numArray[x], 2));
  }
}
console.log(squareNum());






























//PROBLEM: HOMEWORK ORIGINAL for comparison 
var numArrayTwo = [2, 4, 6, 7, 8];
// each number sqquared is: 2^2 = 4, 4^2 = 16,
//will need a loop
//function square each number
//for(x = 0; x < numArray.length; x++)
	function squareNumTwo(){
     for(x = 0; x < numArrayTwo.length; x++)
		return Math.pow(numArrayTwo[x], 2)
	}
//}
console.log(squareNumTwo());









//END OF LOOP CLASS ABOVE

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//QUIZ
//QUESTION 1:
//fix wade/peter switch
/*
var firstName = "Jokkul";
var lastName = "Frostii";
var fullName = firstName + " " + lastName;
console.log("My fullname is " + fullName + ".");
*/

/*
//QUESTION 2:
var numberOne = prompt("Enter a starting number:");
var numberTwo = prompt("Multiplied by this number:");
var numberThree = prompt("Divide by this number:");
var number1 = parseInt(numberOne);
var number2 = parseInt(numberTwo);
var number3 = parseInt(numberThree);
var answer = (number2 * number3) / number1  ;
alert("Your answer " + answer);
*/


/*
//Question 3: 
function rememberRemainder(numberOne, numberTwo, numberThree){
	return (numberOne + numberTwo) % numberThree;
}
console.log("The remainder is " + rememberRemainder(10,5,2));
*/

//Question 4: 
/*
var luckyNumber = "";
//Genorating a random number
var fortuneCookie = Math.floor(Math.random() * 4);
//console.log(randomNumber);
switch(fortuneCookie){
	case 0:
	luckyNumber = 1
	console.log(luckyNumber);
	break; 

    case 1:
	luckyNumber = 2
	console.log(luckyNumber);
	break;

	case 2:
	luckyNumber = 3
	console.log(luckyNumber);
	break;

	case 3:
	luckyNumber = 4
	console.log(luckyNumber);
	break;

    default:
    console.log("not so lucky i guess");
}
alert("Your luckyNumber is " + luckyNumber);
*/




//Question 5:
var gradeGenerate = Math.floor(Math.random() * 100); // generates numbers between 0 and 6
//console.log(gradeGenerate);
//function gFunc(g) {
    var letterGrade = ['A', 'B', 'C', 'D', 'F']; 

      if(gradeGenerate >= 90 && gradeGenerate <=100){
          console.log('Your grade is ' + letterGrade[0]);
      }else if(gradeGenerate >= 80 && gradeGenerate <=89){
	      console.log('Your grade is ' + letterGrade[1]);
      }else if(gradeGenerate >= 70 && gradeGenerate <=79){
	      console.log('Your grade is ' + letterGrade[2]);
      }else if(gradeGenerate >= 60 && gradeGenerate <=69){
	      console.log('Your grade is ' + letterGrade[3]);
      }else if(gradeGenerate >= 1 && gradeGenerate <=59){
	      console.log('Your grade is ' + letterGrade[4]);
      }else{
	      console.log("What grade, you never turned it in...");
      }

//gFunc(gradeGenerate)



/*
//Question 5:  MiKAILAS WAY
var grade = Math.floor(Math.random() * 101); // generates numbers between 0 and 6
console.log(grade);

    var letterGrade = ['A', 'B', 'C', 'D', 'F'];

function gFunc(g){
      if((grade >= 90) && (grade <= 100)){
          console.log(letterGrade[0]);
      }else if((grade >= 80) && (grade <=89)){
	      console.log(letterGrade[1]);
      }else if((grade >= 70) && (grade <=79)){
	      console.log(letterGrade[2]);
      }else if((grade >= 60) && (grade <=69)){
	      console.log(letterGrade[3]);
      }else if((grade >= 1) && (grade <=59)){
	      console.log(letterGrade[4]);
      }else{
	      console.log("What grade, you never turned it in...");
      }
}
gFunc(grade);
*/


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//possible test stuffffffffffff:
/*
 -- If/else and else if -- have w3schools ready and i think ill be good
       **under JS Conditions: If else /else else if link: https://www.w3schools.com/js/js_if_else.asp
       **the === link is called comparison operators: https://www.w3schools.com/js/js_operators.asp
       **Better detail about Comparison & Logical Operators: https://www.w3schools.com/js/js_comparisons.asp  //these are used for True or false
       **
 -- Switches -- im good
 -- Arrays --- i believe  i can do it
 -- Prompts -- do prompts only go wih alerts?? answer: they dont
 -- Alerts ----- ...w3schools open ajust in case
 -- Console logs --- i believe i know what the console.log(); does
 -- function syntax -- like wqhat does a function look like/ function grammer
 -- .toString(); -- 
 -- all array methods -- i believe im okay
*/

//------------------------------------


/*
//ARRAYS
//to call a spot in an array it is: console.log(fruits =[#]);
//console.log( ); to log/print out something---- then in the consoles paranthesis
//aka these: '()' you put in th name of the variable for the whole array and use these: '[]' to call a specific...element? in the array
//wat u put in the '[]' is the number spot on the array but be careful the first item starts at '0'
//so if u want the FIRST ITEM its '[0]'
//if you want the FIFTH ITEM its '[4]' and so on
var fruits = ['Dragon', 'Apple', 'Mango'];
console.log("The first fruit is " + fruits[0] + " and third fruit is " + fruits[2]);
//              0         1         2            ---- position reference
*/

/*
var fruit = ['Bananas', 'Oranges', 'Apples', 'Mangos'];
console.log(fruit.shift()); //removes first element in an array and returns the element
console.log(fruit); // number of things in array and lists new array
console.log(fruit.unshift('dragonfruit')); //adds a new element at the beginning of the array (so dragon is fruits[0] now)
console.log(fruit);
console.log(fruit.length);
*/

//ARRAY METHODS
/*
console.log(fruit.push('Dragon Fruits')); // it tells you in a libne above your new array how many are in it
console.log(fruit); // lists all the fruit and th enew fruit i .push in
console.log(fruit.length);
console.log("After pusher..I'm your pusher...");
console.log(fruit[3]);
console.log(fruit.toString()); // function tht belongs to an object calling upon the array
// the job of the toString is to put the array written as a string seperated by commas 
// AKA List the whole array as "comma seperated values"
console.log(fruit.join('=')); // lists array seperated by whatever you place in ur ('~~')
//pops out the last element in the array each time
console.log(fruit.pop());
console.log(fruit);
console.log(fruit.pop());
console.log(fruit);
*/


//Notes for quiz aqbove my line
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Ask a user for their FirstName, LastName, UserName & Password
//Then alert them..
//Welcome to mysite mr (FirstName, LastName) Your username is ____  and password is _____
/*
var FirstName = prompt("Please enter FirstName");
var LastName = prompt("Please enter lastname");
var UserName = prompt("Please create username");
var Password = prompt("Please create Password");
var number1 = parseInt(FirstName);
var number2 = parseInt(LastName);
var number3 = parseInt(UserName);
var number4 = parseInt(Password);
var answer = FirstName+ " " + LastName;
var Answer = UserName;
var answerS = Password;
alert("Welcome to my site Mr. " + answer + ". Your username is: " + Answer + " and your password is: " + answerS + ".");
*/


//ask a user for 3 items one at a time 
//eg: (Apples, Oranges, Mango)
//then alert the user "The second item you entered was________"
//loophole: USE AN ARRAY!!!
/*
var itemArray1 = prompt("Please enter 1st item: ");
var itemArray2 = prompt("Please enter 2nd item: ");
var itemArray3 = prompt("Please enter 3rd item: ");
var answer = [itemArray1, itemArray2, itemArray3];
alert("The second item you entered was " + answer[1]);
*/


/*
//ZEES WAY
var item = [prompt("type item 1"), prompt("type item 2"), prompt("type item 3")];
alert("the second item in your list was " + item[1] + ".");
*/

/*DELETE THIS ------------
//ARRAY TEST
var fruits = ['Dragon', 'Apple', 'Mango'];
console.log("The first fruit is " + fruits[0] + " and third fruit is " + fruits[2]);
//              0         1         2

var fruit = ['Bananas', 'Oranges', 'Apples', 'Mangos'];
console.log(fruit.shift()); //removes first element in an array and returns the element
console.log(fruit); // number of things in array and lists new array
console.log(fruit.unshift('dragonfruit')); //adds a new element at the beginning of the array (so dragon is fruits[0] now)
console.log(fruit);
console.log(fruit.length);
*/





/*
var FirstName = prompt("Please enter FirstName");
var LastName = prompt("Please enter lastname");
var UserName = prompt("Please create username")
var Password = prompt("Please create Password")
var number1 = parseInt(FirstName);
var number2 = parseInt(LastName);
var number3 = parseInt(UserName);
var number4 = parseInt(Password);
var answer = FirstName+ " " + LastName;
var Answer = UserName;
var answerS = Password;
alert("Welcome to Potions Mr. " + answer + ". Your job is to learn not Lollgagg. My name is Mr. " + Answer + " and where do i find a bezoar" + answerS + ".");
*/


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//CALCULATOR HOWEWORK IM DONE YAY
//create a Calculator that adds, subtracts, divides, 
//gives the remainder of the division of two numbers 
//and multiplies two numbers

/*
//Addition calculator:
var numberOne = prompt("Addition: Enter a number");
var numberTwo = prompt("Enter another number");
var number1 = parseInt(numberOne);
var number2 = parseInt(numberTwo);
var answer = number1 + number2;
alert(answer);
*/

/*
//Subtraction calculator:
var numberOne = prompt("Subtraction: Enter a number");
var numberTwo = prompt("Enter another number");
var number1 = parseInt(numberOne);
var number2 = parseInt(numberTwo);
var answer = number1 - number2;
alert(answer);
*/


/*
//Remainder modulus calculator:
var numberOne = prompt("Remainder: Enter a number");
var numberTwo = prompt("Enter another number");
var number1 = parseInt(numberOne);
var number2 = parseInt(numberTwo);
var answer = number1 % number2;
alert(answer);
*/


/*
//Division calculator:
var numberOne = prompt("Division: Enter a number");
var numberTwo = prompt("Enter another number");
var number1 = parseInt(numberOne);
var number2 = parseInt(numberTwo);
var answer = number1 / number2;
alert(answer);
*/

/*
//Multiplication calculator:
var numberOne = prompt("Multiplication: Enter a number");
var numberTwo = prompt("Enter another number");
var number1 = parseInt(numberOne);
var number2 = parseInt(numberTwo);
var answer = number1 * number2;
alert(answer);
*/

//END OF HOMEWORK LINE
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Randomly generate a number that corresponds to a letter grade use the switch statement that checks the value of your variable and prints out you got a 'D'
//SWITCH STATEMENT
//takes a value like 0 then takes a break
/*
var letterGrade = "D";
//Genorating a random number
var randomNumber = Math.floor(Math.random() * 6);
//console.log(randomNumber);
switch(randomNumber){
	case 0:
	letterGrade = "A"
	console.log(letterGrade);
	break; //if u give me random number 0 make it sunday and log out sunday and then break cuz done
    case 1:
	letterGrade = "B"
	console.log(letterGrade);
	case 2:
	letterGrade = "C"
	console.log(letterGrade);
	break;
	case 3:
	letterGrade = "D"
	console.log(letterGrade);
	break;
	case 4:
	letterGrade = "F"
	console.log(letterGrade);
	break;
    default:
    console.log("Wade/Peter");
    break;
}
*/

/*
var randomNum = Math.random();
 var makeItWholeNumber = Math.floor(Math.random() * 7); // generates numbers between 0 and 6
console.log(makeItWholeNumber);
*/

/*
//IF ELSE and ELSE IF statements below
var hour = 14;
if(hour < 18){
	console.log("is is not yet 6 o'clock");
}else{
	console.log("it is 6 o'clock or past 6pm");
}
*/

// = putting something into something 
//== checking if something is true?
//=== for sure check??
//!== is 'not equal to' even if its equal to it wont  say its equal>
/*
var hour = 1; 
if(hour < 1){                                 //if one is less then 1 then log below 
	console.log("is is not yet 1 o'clock");
}else if(hour === 2){                        // if 1 is equal to 1 then log nxt line
	console.log("it is 1 pm sharp")
}else{                                        // or else if those previous two arent true log nxt line below
	console.log("it is 1 o'clock or past 6pm");
}
*/

/*
var grade = 'justice';
if(grade === 'j'){
	console.log('Lady Justice is her new nickname');
}else if(grade !== 'Just'){
	console.log('No justice just us');
}else{
	console.log('Just ice');
}
*/
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//HOMEWORK
//w3schools.com --- start at JavaScript syntax and stop at type conversion
// do not click try it urself TYPE IT URSELF!!!
//SKIP: anything above syntax
// use console.log();   DUHHHH
//KEEP GOING DO TONNIGHT AND DO JAVASCRIPT CODE ACADEMy

//int sum = 34 + 113;
//int difference = 91 - 205;
//int product = 2 * 8; 
//int quotient = 45 / 3;


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//SYNTAX TAB:
//var x, y;  //How to declare variables
//x = 5; y = 6;  // How to assign values
//z = x + y; //How to compute values
//--------------------------
//Literals = numbeers are written with or without decimals
//10.50 or 1001
//---------------------
//Strings are text wrtitten within double or single quotes
//"Michaelangelo"  or  'Raphael'
//-----------------------------

//JavaScript Variables
/*
var x;
x = 6
console.log(x)
*/
//------------------------

//JavaScript Operators
//uses arithmetic operators ( + - * / )
/*
var x;
x = (5 + 6) * 10;
console.log(x);
//uses an 'assignment operator' ( = ) to 'assign' values to variables
//JoJo Note:: a = spidermans age, b = wade wilsons age 
var a, b;
a = 16;
b = 35;
console.log(a);
*/
//---------------------

//JavaScript Expressions
//An expression is a combination of values, variables, and operators, which computes to a value
//The computation is called an evaluation
//For example, 5 * 10 evaluates to 50:
/*
var a;
a = 5 * 10;
console.log(a);
//Expressions can also contain variable values:
var b;
x = 5;
b = x * 10;
console.log(b);
//The values can be of various types, such as numbers and strings.
//For example, "John" + " " + "Doe", evaluates to "John Doe":
var name;
name = "John " + "Doe";
console.log(name);
*/
//-------------------

//JavaScript Keywords
//JavaScript keywords are used to identify actions to be performed
//The var keyword tells the browser to create variables:
/*
var a, b;
a = 42 + 16;
b = a - 35;
console.log(b);
*/
//--------------------

//Javascript Comments
//Not all JavaScript statements are "executed".
//Code after double slashes // or between /* and */ is treated as a comment.
//Comments are ignored, and will not be executed:
/*
var x = 5; //I WILL be executed
//var x = 6; I will NOT be executed
console.log(x);
*/
//----------------------------

//JavaScript Identifiers
//Identifiers are names.
//In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).
//The rules for legal names are much the same in most programming languages.
//In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).
//Subsequent characters may be letters, digits, underscores, or dollar signs.
//Numbers are not allowed as the first character.
//This way JavaScript can easily distinguish identifiers from numbers.
//--------------------------------------

//JavaScript is Case Sensitive
//All JavaScript identifiers are case sensitive. 
//The variables lastName and lastname, are two different variables.

















/*
var lastname, lastName;
lastName = "Michaelangelo ";
lastname = "Hamato ";
console.log(lastname + lastName);
*/



























//JavaScript does not interpret VAR or Var as the keyword var.
//------------------------------------

//JavaScript and Camel Case
//Historically, programmers have used different ways of joining multiple words into one variable name:

//Hyphens:
//first-name, last-name, master-card, inter-city.
//   --   Hyphens are not allowed in JavaScript. They are reserved for subtractions.

//Underscore:
//first_name, last_name, master_card, inter_city.

//Upper Camel Case (Pascal Case):
//FirstName, LastName, MasterCard, InterCity.

//Lower Camel Case:
//JavaScript programmers tend to use camel case that starts with a lowercase letter:
//firstName, lastName, masterCard, interCity.
//------------------------------------------------------------
//JavaScript Character Set
//JavaScript uses the Unicode character set.
//Unicode covers (almost) all the characters, punctuations, and symbols in the world.
//For a closer look, please study our Complete Unicode Reference.
//Unicode Reference link: https://www.w3schools.com/charsets/ref_html_utf8.asp

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//JAVASCRIPT COMMENTS TAB LEFT OFF HERE 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




// console.log(a + b); //sum of two variables
// console.log(a - b); //difference of two variables
// console.log(a * b); //product of two variables
// console.log(a / b); //quotient of two variables

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/*
//JavaScript Variables: 
//Variables are containers for data values
var x = 50;
var y = 60;
var z = x + y;
console.log("The answer is " + z);
*/


/*
//variable holds the - ask zee for definition
var name = "justice";
console.log(name);

var age = 12;
console.log(age);
*/









//ALLL BELOW THIS LINE IS NOTES FROM BEFORE MARCH 14th 2018!!!!!!!!!!!!!!!!!!!!!!!
/*
TEST 30mins
------------1. Create an array called fruits.
------------------2. Add 3 fruits to it
3. Console log "The first fruit is (first) 
and the third fruit is (  )"
4. Create a function that takes two parameters (price, discount)
AND calculates the final price of the product after discounts
INVOKE/Call your function so it prints out: "The price of the product 
after a (10%) discount is ($90)"
*/


/*
function multiply(x, y){
	return x * y
}
console.log(multiply(6, 2));


//String Function
function myStringFunction(){
	return 'Rest in peace Craig Mack'
}
console.log(myStringFunction());
*/



/*
//~~~~~~~~
var z = 100;
function multiplyByZ(x, y){
	return x * y * z
}
console.log(multiplyByZ(2,4));
*/



/*
//Ternary Condition Operator
var currentAge=21;
var drinkingStatus = (currentAge >= 21) ? 'can drink' : 'cannot drink';
console.log(drinkingStatus);
// u change the value nxt to currentAge= #
// slow down when spelling dam
*/




/*
//SWITCH STATEMENT
//takes a value like 0 then takes a break
var dayOfWeek = "";
//Genorating a random number
var randomNumber = Math.floor(Math.random() * 7);
//console.log(randomNumber);
switch(randomNumber){
	case 0:
	dayOfWeek = "Sunday"
	console.log(dayOfWeek);
	break; //if u give me random number 0 make it sunday and log out sunday and then break cuz done
    case 1:
	dayOfWeek = "Monday"
	console.log(dayOfWeek);
	break;
	case 2:
	dayOfWeek = "Tuesday"
	console.log(dayOfWeek);
	break;
	case 3:
	dayOfWeek = "Wednesday"
	console.log(dayOfWeek);
	break;
	case 4:
	dayOfWeek = "Thursday"
	console.log(dayOfWeek);
	break;
	case 5:
	dayOfWeek = "Friday"
	console.log(dayOfWeek);
	break;
	case 6:
	dayOfWeek = "Saturday"
	console.log(dayOfWeek);
	break; 
    default:
    console.log("Saturday");
    break;
}
*/









/* gives decimal numbers
var rand = Math.random();
console.log(rand);
*/

//adding a floor makes it a whole number
//multiplying the math.random() by 7 gives numbers between 1 and 6
///var rand = Math.floor(Math.random() * 319);
///console.log(rand);


/*
//Else If... COntinuation of IF STATEMENT
var nameOfArtist = "Raphael";
if(nameOfArtist === "Donatello"){
	console.log("Science is important guys!");
}else if(nameOfArtist === "Raphael"){
	console.log("Raphael: STOP SAYING THAT >:[");
}else{
	console.log("COWABUNGA DUDES *pizza emoji*");
}
*/



/*
//IF STATEMENT PRACTICE -- with jojos variables
var nameOfArtist = "D Piddy";
if(nameOfArtist === "Michaelangelo"){
	console.log("D piddy is the ba-bomb!!");
}else{
	console.log("COWABUNGA DUDES *pizza emoji*");
}
*/








/*
//If Statement Practice
//if gucci man is equal to craig mack it will print "craig kicked the..." ELSE (as in if not equal) print "Get the Bag"
var nameOfArtist = "Gucci Mane";

if(nameOfArtist === "Craig Mack"){
	console.log("Craig kicked a brand new Flava in ya ear");
}else{
	console.log("Get the bag");
}
*/

/*
//ARRAY TEST
var fruits = ['Dragon', 'Apple', 'Mango'];
console.log("The first fruit is " + fruits[0] + " and third fruit is " + fruits[2]);
//              0         1         2

var fruit = ['Bananas', 'Oranges', 'Apples', 'Mangos'];
console.log(fruit.shift()); //removes first element in an array and returns the element
console.log(fruit); // number of things in array and lists new array
console.log(fruit.unshift('dragonfruit')); //adds a new element at the beginning of the array (so dragon is fruits[0] now)
console.log(fruit);
console.log(fruit.length);
*/





/*
console.log(fruit.push('Dragon Fruits')); // it tells you in a libne above your new array how many are in it
console.log(fruit); // lists all the fruit and th enew fruit i .push in
console.log(fruit.length);
console.log("After pusher..I'm your pusher...");

console.log(fruit[3]);
console.log(fruit.toString()); // function tht belongs to an object calling upon the array
// the job of the toString is to put the array written as a string seperated by commas 
// AKA List the whole array as "comma seperated values"
console.log(fruit.join('=')); // lists array seperated by whatever you place in ur ('~~')
//pops out the last element in the array each time
console.log(fruit.pop());
console.log(fruit);
console.log(fruit.pop());
console.log(fruit);
*/
//do they the shift method on your fruit //unshift// and length




/*
var two = 2
console.log(two++) // not showing 3 yet this way

var two = 2
two++
console.log(two) // not showing 3 yet this way

var two = 2
console.log(++two) // not showing 3 yet this way
*/


// function calc(price, discount){
// 	//calculate the discount
// 	//price after the discount means (price - discount) = price after discount
// 	return
// }
// console.log(calc());

/*
//MY WAY FROM MY HEAD -- JOKKUL
var price = 200;
function discountCalc(x, y){
	return ("The price of the product after a ") + (x / 100) + ("% discount is $") + (y -((x / 100) * y)) ;
}

console.log(discountCalc(20, 100));
*/



/*
//function discountCalculate()
function discountCalculate(price, discount){
	var discountPercent = discount / 100;  //10% or .10
	var monetaryDiscount = price * discountPercent; //$10
//	return price - monetaryDiscount; //$100 - $10
    return ("The price of the product after a ") + discount + ("% discount is $") + (price - monetaryDiscount);
}
console.log(discountCalculate(100, 10));
*/


/*
//function discountCalculate()
function discountCalculate(price, discount){
	var discountPercent = discount / 100;  //10% or .10
	var monetaryDiscount = price * discountPercent; //$10
	var finalPrice = price - monetaryDiscount // final price
//	return price - monetaryDiscount; //$100 - $10
    return ("The price of the product after a ") + discount + ("% discount is $") + finalPrice;
}
console.log(discountCalculate(100, 10));
*/



//---------------------------------------------
//-----------------------------------------------
/* Mikaila "Function Test"
write a function that takes 3 parameters
it then multiplies the first two parameters together
divides them by the third number
*/

// function calculationFunction(num1,num2,num3){
// 	return num1 * num2 / num3;
// }
// //the above function does the same as 10 * 30 / 5
// //But with the ability to change the numbers
// //and calculate whatever u want
// console.log(calculationFunction(2,6,3))

//-----------------------------------------------
 // begin of multi line comment 54--

// var priceOfJordans = 200;
// function discountCalc(x){
// 	return ("The discount is $") + (x / 100) * 200;
// }

// console.log(discountCalc(54));
// function discountCalc()
//10% of 200 = 20
//Create a function that calulates the discount
// that mikaila passes to your function and prints out
// the discount is _____


// function addTwo(aNumber){
// 	return 2 + aNumber;
// }

// console.log(addTwo(10));


// //Function
// //Creating / Declaring a function
// function multiply(numberOne, numberTwo){
// 	return numberOne * numberTwo;
// }

// function division(numberOne, numberTwo){
// 	return numberOne / numberTwo;
// }

// console.log(multiply(2,4));
// console.log(division(4,2));





//"Function Test"
//function test(numberOne, numberTwo, numberThree){
//	return (numberOne * numberTwo) / numberThree;
//}

//console.log(test(10,30,5));
//end of "Function Test"


// //Object
// var myFavPerson = {
// 	firstName: "Tom H.",
// 	age:34,
// 	favoriteMovie: "Crimson Peak"
// };
// console.log("my favorite person is " + myFavPerson.firstName + 
// 	" and age is " + myFavPerson.age);



// //CamelCasing
// var today = "friday";
// var areWeMillionaires = true;
// if((today == "friday") && (areWeMillionaires = false) ){
// 	console.log("It is friday so this prints");
// }else{
// 	console.log("we are millionaires");
// } //look at JavaScript Logical Operators w3schools.com

// var five = 5;
// var stringFive = "5";
// console.log(five !== stringFive); 
// //3 equals does a fact check with letter 5 and number 5
// //check JavaScript Operators --scrollTo Comparison Operators w3schools.com

// var yo = "Loki" + 5;
// console.log(yo); //this is a string of text not actual additon

// var p = 10;
// p *= 5; //10 = 10 + 5;
// console.log (p); //this is a shortcut


// var firstName = "Jokkul";
// var lastName = "Frostii";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// var l = 20;
// var w = 50;
// var Area = l * w;
// console.log("The area of a rectangle is " + Area)
// //console.log(w/l);

// var mod = 318 % 25;
// console.log(mod);

// var add = 5;
// add--;
// console.log(add);




// //w3schools array
// var cars = ["Saab","Volvo","BMW"];
// console.log(cars.length);
// //.length tells how many items in the array// its a method

// //First Arrays
// var donuts = ["Plain", "Glazed", "Strawberry", "Frosted"];
// console.log(donuts[3]);
// //               0 -       1           2           3
// // these are position #'s -- always start at 0
// //put number in console.log([#]); to grab the item in the array
// //the items in array are elements ex: Plain
// //position = number position in array

// // My Array
// var otaku = ["Fujoshi-BL", "Cosplay", "Deadpool"];
// console.log(otaku[0]);
// console.log(otaku[2]);
// //in javascript arrays are objects


// //Test Array
// var numbersArray = [2,4,6,8];
// console.log(numbersArray[1] * numbersArray[2]);
// console.log(numbersArray[3] - numbersArray[0]);
// //multiply 2nd and 3rd element and print result
// //subtract the first element from the last element

//-----------------------------------------

















/*Function*/
// //Creating / Declaring a function
// function printName(name){
// 	console.log(name);
// }

// //using / invoking / calling the function
// printName("Deadykins Poolywooly");
// printName("HiddlesGang");
// printName("FUJOSHI >8O"); 
// //An "argument" is the input when you call a function 




//int sum = 34 + 113;
//int difference = 91 - 205;
//int product = 2 * 8; 
//int quotient = 45 / 3;



/*
strings:  console.log('New York City');
Numbers:  console.log(40.7);
Booleqans:  console.log(true);
Null: console.log(null);
-------------------------------
Add: +
Subtract: -
Multiply: *
Divide: /
------------------------
console.log(3 + 4); // Equals 7
console.log(5 - 1); // Equals 4
console.log(4 * 2); // Equals 8
console.log(9 / 3); // Equals 3
------------------------------
*/

