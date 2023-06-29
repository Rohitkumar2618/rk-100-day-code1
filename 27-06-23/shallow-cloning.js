// in array clonning

// 1st way:Spread Operator

const numbers = [1,2,3,4,5,6];
const copiedNumers = numbers;
const newNumber = [... numbers ];

numbers.push(7);

console.log(numbers === copiedNumers); // true
console.log(copiedNumers === newNumber); // false  

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
console.log(copiedNumers); //[1, 2, 3, 4, 5, 6, 7]
console.log(newNumber); //[1, 2, 3, 4, 5, 6]



// Another way


const numbers1 = [7,8,9,4,5];
const copiedNumers1 = numbers1;
const newNumber1 = numbers1.slice();

numbers1.push(11);

console.log(numbers1 === copiedNumers1); // true
console.log(copiedNumers1 === newNumber1); // false  

console.log(numbers1); 
console.log(copiedNumers1); 
console.log(newNumber1); //[1, 2, 3, 4, 5, 6]


// in terms of object 

const person = {
    Fname:'john',
    Lname:'snow'
}
// first way
const person1 = {...person};

// second way

const person2 = Object.assign({},person)

person.Fname = 'reunion';
console.log(person);
console.log(person1);
console.log(person2);