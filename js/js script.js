//arrays are not primitive value types
//They are references types
const fruits = ['apple', 'orange', 'kiwi', 'grape'];
const names = ['roman', 'michael', 'nina', 'adonis'];

const data = ['JD', 'Tadlock', 44, '555 coding dr', '777-777-7777', ['pickleball', 'fishing']];

console.log(fruits[2]);
console.log(fruits.length);
console.log(names[1]);
console.log(data[5][1]);

console.log(fruits);

fruits[2] = 'strawberry';

 console.log(fruits);

 //Increase the data age number by one - console.log the original value and the new value after uou increase it

 console.log(data[2]);
 data[2] += 1;
 console.log(data[2]);

 let fullName = 'JD';

 console.log(fullName);

 fullName += 'Tadlock';

 console.log(fullName);



