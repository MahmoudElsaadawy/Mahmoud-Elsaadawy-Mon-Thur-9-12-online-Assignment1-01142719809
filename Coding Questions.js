//1
var x = "123";
console.log(Number(x) + 7);

//2
var x = 0;
if (!x) {
  console.log("invalid");
}

//3
var oddNums = [];
for (i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    continue;
  }
  oddNums.push(i);
}
console.log(oddNums);

//4
var testArr = [1, 2, 3, 4, 5];
console.log(testArr.filter(isEven));

function isEven(num) {
  return num % 2 == 0;
}

//5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var mergedArr = [...arr1, ...arr2];

console.log(mergedArr);

//6
var day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}

//7
var arr = ["a", "ab", "abc"];
var arrLen = arr.map(count);
console.log(arrLen);

function count(word) {
  return word.length;
}

//8
var number = 15;
console.log(threeAndFive(number));

function threeAndFive(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "Divisible by both";
  } else {
    return "Not Divisible";
  }
}

//9
var squ = (num) => {
  console.log(num ** 2);
};
squ(5);

//10
const person = { name: "John", age: 25 };
console.log(destruct(person));

function destruct(element) {
  return `${element.name} is ${element.age} years old`;
}

//11
var numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));

function sum(nums) {
  var sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

//12
waiting("Success").then(value => {console.log(value)})

function waiting(message) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(message);
    }, 3000);
  })
}

//13
var arr = [1, 3, 7, 2, 4];
console.log(largestNum(arr));

function largestNum(numbers) {
  num = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > num) {
      num = numbers[i];
    }
  }
  return num;
}

//14
var human = { name: "John", age: 30 };
console.log(keys(human));

function keys(obj) {
  return Object.keys(obj);
}

//15
var paragraph = "The quick brown fox";
console.log(split(paragraph));

function split(input) {
  return input.split(" ");
}

/*
1. What is the difference between forEach and for...of? When would you use each?
  for each can only be used on arrays and you cant use break or return with it
  use for each if you want to use a function and not break the loop
  use for of if you want to exit the loop early or return a value

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
  hoisting i moving the declared functions at the top of the scope before the code execution
  TDZ is when the variable is defined but can not be accessed until it reached the line where it is initialized

3. What are the main differences between == and ===?
  == compares the value only (ex. 10 == "10" true)
  while === compares values and data type (ex 10 === "10" false)

4. Explain how try-catch works and why it is important in async operations.
  it is a way for us to capture an error or a rejection while

5. What’s the difference between type conversion and coercion? Provide examples of each.
  conversion is when we intentionally change the data type (ex Number())
  coercion is when js changes the data type automatically to run the code (ex "5"+2 = "52")
*/

