
const outer = () => {

    const outervar = `john`;

    const inner = () => {

        const innervar =`johny`; 

 console.log(outervar,innervar);

    }

    return inner()
}

const innerFn = outer();

innerFn();