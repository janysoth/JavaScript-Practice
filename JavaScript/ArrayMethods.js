// .filter()
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 == 0);
const oddNumbers = numbers.filter(num => num % 2 == 1);
console.log(evenNumbers);

// .map()
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// .forEach()
numbers.forEach(num => console.log(num * 2));

// .reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// .some()
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);

// .includes()
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes('banana'));
console.log(fruits.includes('grapes'));

// Example to show the difference between .map and .forEach 

// Using .map() (Transforming Data)
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

const updatedPrices = products.map(product => ({
  ...product,
  price: product.price * 1.1  // Increase price by 10%
}));

console.log(updatedPrices);
/* Output:
[
  { name: "Laptop", price: 1100 },
  { name: "Phone", price: 550 },
  { name: "Tablet", price: 330 }
]
*/

console.log(products);
// Original array remains unchanged

// Using .forEach()-(Performing an Action)
products.forEach(product => console.log(product.name));

/* Output:
Laptop
Phone
Tablet
*/