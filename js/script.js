// i=0;

// do {
//     console.log(i);
//     i++;
// } while (i<10);

// // Difference

// while (condition) {
//     console.log(i);
//     i++;
// }

// Break & Continue

// for(let i=0; i<10; i++){
//     if(i === 5){
//         console.log("five")
//         continue
//     }

//     console.log(i)
// } 


// for(let i=0; i<10; i++){
//     if(i === 6){
//         console.log("six")
//         break
//     }

//     console.log(i)
// } 


// Functions
function myself(){
    console.log("My name is John Doe")
}


// Function with parameter
function mySelf(name, age) {
    console.log(`my name is ${name} and i am ${age} years old`)
}
  
mySelf("Akpe", 20)
mySelf("Jaye", 25)
mySelf("star", 27)


function add(x,y){
 console.log(x+y)
}

add(1,2)
add(5,2)
add(1,9)

function multiply(x,y){
    console.log(x*y)
   }
   
  multiply(1,2)
  multiply(5,2)

//   Function with return values

function add(x,y){
    return x+y;
   }
   
  let result = add(10,15)

  let newResult = result*5

  console.log(newResult) 

/*when the arrow function is just one line of code, we dont bring  {}*/
//   Arrow functions
let divide =(a,b)=>console.log(a/b);
let squre =(a)=>console.log(a*a);

divide(1,2)
squre(5)
 

// Higher order functions
/*they take a function as a parameter */

// map
let numbers =[0,1,2,3,4,5,6.7,8]

let squares =numbers.map((element) =>element*element)
console.log(squares);


let double = numbers.map((element)=>element+element)

console.log(double)

// filter()
/**looks for more elements in the array */

// even
let evens=numbers.filter((number)=>number%2===0)
 
console.log(evens);

// odd

let odd=numbers.filter((number)=>number%2 !==0)
console.log(odd);

//  find()
/*looks for only one item in the array */

let five = numbers.find((number)=>number=== 5)
console.log(five);

// Array methods
// string
let sentence = "The quick brown fox jumps over the lay dog"

console.log(sentence.length);


// the concat method takes the original string and then adds the new string "at cape coast"
console.log(sentence.concat(" at cape coast"));

console.log(sentence.endsWith("dog"));
// true

console.log(sentence.endsWith("g"));
// true

console.log(sentence.endsWith("b"));

// false

console.log(sentence.includes("c"));

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padEnd(10));
console.log(sentence.padStart(10));
console.log(sentence.repeat(2));
console.log(sentence.replace("dog", "cat"))

console.log(sentence.slice(0, 3));
console.log(sentence.slice(3));

console.log(sentence.split(" "));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.trim());