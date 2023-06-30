
const person = {

    name:'john',
    age:45,
    Details(){
        console.log(this);
    }
}

person.Details();


// another example

function  car (color,brand,wheels){

    this.color = color;
    this.brand = brand ;
     this.wheels = wheels;

     console.log(this);

}


const blueCar = new car ('blue','BMW',4);
const BlackCar = new car ('Black','GT',4);


