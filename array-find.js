
const values = ['5','8','2','90','7'];

const nmbers = values.find((number)=>{
return number> 5;
});

console.log(nmbers);

// another

const cities = ['New york','Paris','ladakh','Vrindavan'];

const favc = cities.find((city)=>city.startsWith('V'));


console.log(favc);