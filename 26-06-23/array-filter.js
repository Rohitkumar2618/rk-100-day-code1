const numbers=['5','4','-3','8','17','-11'];

const pnumbers=numbers.filter((number)=>{return number >= 0});
console.log(pnumbers);

const Nnumbers = numbers.filter((Nnumber)=>
{
    return Nnumber <= 0;
});

console.log(Nnumbers);