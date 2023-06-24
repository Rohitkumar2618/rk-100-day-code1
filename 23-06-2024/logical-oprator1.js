// logical operator for truthy and falsy value


// AND 
console.log(1 && 'test' && 999);  //999

// in that upper case in its show 999 because all are truthy values

console.log(1 && 0 && 999);  // 0

// its give the output 0 because we add falsy value

console.log(false && 0 && null && undefined); //false 

// OR

console.log('you' ||'test' || 999); 
// In that case he not check the further he automatically give the 1st value

console.log('you' || 0 || 999);

// Even we add falsy value in it then also its show the first value in the output;

console.log(''|| 0 || null || undefined);

// but in the falsy if we enter all falsy value they give output as a last element




