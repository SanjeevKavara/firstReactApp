import { useCallback, useMemo, useState } from 'react';



function Counter() { //this is a functional component that returns a JSX element 
    const [number, setNumber] = useState(30); //this is a hook that returns an array with 2 elements the first element is the state of the component and the second element is a function that will update the state of the component and will re-render the component


    function handleClick(e) { //this function will be called when the button is clicked 

        // number = number + 1; //this will not update the state of the component 

        setNumber(number => number + 1); //this will update the state of the component and will re-render the component // the function passed to the setNumber function will be called with the old value of the state of the component and will return the new value of the state of the component

        console.log(number); //this will print the old value of the state of the component because the state is updated asynchronously 
    }

     const fibx = useCallback(function fib(n){ //this will return the nth number of the fibonacci sequence 

        if(n===1||n===2)
        {
            return 1
        }
    
        return fib(n-1)+fib(n-2)
    },[])
    

   

   const val = useMemo(()=>fibx(number),[number,fibx]) //this will return the value of the fib function with the number as an argument and will re-render the component only when the number changes

    return (
        <>
            <h1>{number} | {val}</h1>
            <button onClick={handleClick}>Click</button>

        </>
    )
}


export default Counter;