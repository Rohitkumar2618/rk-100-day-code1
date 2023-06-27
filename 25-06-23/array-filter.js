
const numbers = [-10,0,-2,15,-36,25];

const positiveN = numbers.filter((number) => {
    return  number >= 0;
});

console.log(positiveN);



const negativeV= numbers.filter((number)=> number < 0 );

console.log(negativeV);