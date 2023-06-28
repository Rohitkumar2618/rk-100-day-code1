
const inventary = [
{name:'rk',surname:'D',branch: 'ETC'},
{name:'s',surname:'B',branch: 'ME'},
{name:'a',surname:'P',branch: 'IT'},
{name:'t',surname:'N',branch: 'ETC'},
];


const fnames = inventary.map((fname)=>(fname.name));
const lnames = inventary.map((lname)=>(lname.surname));
console.log(fnames);
console.log(lnames);