// // Template literal

// const name = "Nitin";
// const age = 21;
// const address = "Jhapa";

// // Hello, my name is (name) I am (age) years old . I live in (address) at.
// const result =
//   "hello, My name is " +
//   name +
//   " I am " +
//   age +
//   " years old. I live in " +
//   address;

//   console.log(result);

//   Template literals
const name = "Nitin";
const age = 21;
const address = "Indreni chowk";
const description = "Learning JavaScript and MERN stack development.";
const result1 = `Hello, my name is ${name}. I am ${age} years old. I live in ${address} and ${description}`;
console.log(result1);

// 1. Object descturcturing
const course = {
  title: "MERN",
  duraction: "3 months",
  price: 250000,
};
console.log(course.title);

// 2. Array destructuring
const Info = ["Nepal", 98000000, "Grade A"];

const [MyCountry, MyContact, MyGrade] = Info;
console.log(MyCountry);
console.log(MyContact);
console.log(MyGrade);
