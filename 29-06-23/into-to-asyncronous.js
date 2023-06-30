
const function1 = ()=>{
  
    console.log('function1');
    function2();

console.log ('fuction one , part 2');

}

const function2 = () => {

    setTimeout(()=>
    console.log('function2'),4000);
}

function1();