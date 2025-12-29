const name: string = "nitin";
const age: number = 20;
const isMale: boolean = true;

const address: {
  city: string;
  province: string;
  country: string;
  postalCode: number;
  street: string;
} = {
  street: "Jhapa",
  city: "Damak",
  province: "Koshi",
  country: "Nepal",
  postalCode: 12345,
};

// array types
const phoneNumber: number[] = [989898, 98987, 888899];

const students: {
  name: string;
  class: number;
  section: string;
  phone: number[];
}[] = [
  {
    name: "ram",
    class: 10,
    section: "A",
    phone: [989898, 98987, 888899],
  },
  {
    name: "sita",
    class: 11,
    section: "C",
    phone: [989898, 98987, 888899],
  },
  {
    name: "hari",
    class: 12,
    section: "B",
    phone: [989898, 98987, 888899],
  },
];

// any -> dynamic (not recommended to use  )
const myVar: any = true;
// multiple types 
const phone: string | number = "1234567890";

// enum (fixed) types 
const  role: "USER" | "ADMIN" | "MERCHANT" = "USER";

// FUNCTION 
//  Function Type
//  function's params type
//  function's return type

function sum(a: number, b: number): number {
    return a + b;
}
sum(11, 33343);

const greet: | = (name: string):  string =>  {
    return `hello ${name}`;

};
greet("ram");
