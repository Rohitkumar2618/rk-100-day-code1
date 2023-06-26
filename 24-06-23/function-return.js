
function test(){
console.log(1);
return true;
console.log(2);
return false;

}
const bool = test();

console.log(bool); //output 1 true 

// why below the true was not executed 
// because after return true below line was not check compiler 
