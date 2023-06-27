

const name = ['john','bob','rock','reo'];

console.log(name);

name.push('rk');
console.log(name);


name.pop();
console.log(name);


name.shift();
console.log(name);


name.unshift('tokio');
console.log(name);

name.splice(0,2,'me','you');
console.log(name);


const noname= name.slice(3);
console.log(noname);
