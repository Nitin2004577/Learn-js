// // Print
// console.log("Hello World");
// // console.error("This is an error message");

// // Variables
// let age = 21;
// let name = "Nitin";
// let isMale = true;

// console.log(age, name, "my Name is Nitin Kumar Shah", isMale);
// // Note: NEVER USE var, use let(nly use when required) Unless COnst

// // let
// let grade = "A+ "; // Declaring a variable
// grade = "A"; // Reassigning value
// console.log(grade);

// // Data Types
// // 1.String  ""Nitin"
// // 2. Number  0
// // 3. Boolean true/false
// // 4. object {name:"Nitin"}
// // 5. Array [11,2,2,2,2,2]

// const address = "Jhapa"; // string

// // Object
// const person = {
//     address: "Jhapa",
//     age: 21,
// };
// console.log(person["age"]);

// // Array always start with index 0
// const marks= [10, 20, 30, 40, "Nitin",true]
// console.log(marks[4]); // Accessing array element

// // conditional statements (if, else, switch)

//    for (start point, condition, increment/decrement) {
//       // code to be executed
//    }

// for (let a = 1; a <= 4; a++) {
//   console.log(a + " Learning JavaScript");
// }

// for (let i =10; i >=1; i--) {
//     console.log(i);
// }


// while loop 
// let a = 1;

// while (a <= 100) {
//     console.log(a + ". Happy Birthday Nitin");
//     a++;
// }


const boys = ["Ram", "Shyam", "Mohan", "Sohan", "Hari", "Nitin", "Ramesh", "Suresh", "Rajesh", "Ajay", "Vijay"];

for (let a = 0; a < boys.length; a++) {
    console.log(boys[a]);
}