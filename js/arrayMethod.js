const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(value);

// Map: [X,y,Z] => [a, b, c]
const mapResult = value.map((data) => data * 5);
const mapResults = value.map((data) => data + 5);
console.log("MAP________________________________");

console.log(mapResult);
console.log(mapResults);

// Filter: [X,y,Z] => [a, b, c]

const filterResult = value.filter((data) => data > 6);  
console.log("FILTER________________________________");
console.log(filterResult); 
