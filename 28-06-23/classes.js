// class Person {

// constructor(name,age,isWorking){

//     this.name = name;
//     this.age = age;
//     this.isWorking = isWorking;

// }
// }
// const user = new Person ('john - wick',55,'onfire');

// console.log(user);



// wthout using the class function

const  createPerson = (name,age,isWorking)=> ({name,age,isWorking});

const user1 = createPerson('tom-cruise',57,'stuntman');

console.log(user1);


