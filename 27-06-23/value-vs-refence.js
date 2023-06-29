
const person = {

    Fname:'john',
    Lname:'snow'
}

const person2 = person;

person.Fname = 'johmy';
console.log(person); 
console.log(person2); 

// output will be  Fname"johmy"
// Lname"snow"

// in both the outut because its change by refence not by value