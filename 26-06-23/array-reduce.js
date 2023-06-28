// in array reduce we can add get the some of all element which are present in the array


const number = [1,2,3,4,5];

const total = number.reduce((acc,val)=>{
return acc+val;

},0);

console.log(total);