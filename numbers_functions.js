// numbers and its functions

// To clear the console we will use console.clear()
console.clear()
var num1 = 'dhanesh'
var num2 = "2.32421"

// it will display the type of the variable EX:- numbers,strings
console.log(typeof(num1))//string
console.log(typeof(num2))//number

//toString method will convert string datatype to normal normal datatypes
console.log(num1.toString())
console.log(num2.toString())

/*parseInt method is used to convert string type numbers into integer 
 and also it used to consider the integer part of the float number*/
console.log(parseInt(num1))
console.log(parseInt(num2))

// parseaFloat function is used to return float numbers from string type values
console.log(parseFloat(num2))

// toFixed function is used to fix the float value into fixed value EX:- (89.9232 => 90)

var floatnumber = 89.9925
console.log(floatnumber.toFixed(3))