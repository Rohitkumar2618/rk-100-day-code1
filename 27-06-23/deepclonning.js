
const person = {

    Fname:'Emma',

    car: {
        brand:'BMW',
        color:'blue',
        Wheels:4
    }
}
// in that way we can change the value inside the obtect under object
const newperson = {...person ,car: {...person.car}};

const oersoncopy = JSON.parse(JSON.stringify(person));

newperson.Fname = 'Mia';
newperson.car.color = 'red';

console.log(newperson.car);