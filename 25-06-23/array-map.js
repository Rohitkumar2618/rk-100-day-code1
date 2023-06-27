const inventory = [

    {price:5, name:'eggs'},
    {price:40, name:'banana'},
    {price:1500, name:'protein'},
    {price:250, name:'oats'},
];

const price = inventory.map((item) => (item.name));

const name1 = inventory.map((item)=>item.price);


console.log(price);
console.log(name1);
