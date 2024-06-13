import { useState } from "react";

export default function Counter() {

    const [count,setCount]=useState(0);
    function add(){
       const addedValue=count+1;
        setCount(addedValue);
    }

    const reduce=()=>{
        if(count>0){
            const reducedValue=count-1;
        setCount(reducedValue);
        }
         }
    function reset(){
        setCount(0);  
    }
    return (
        <div>
            <h1>Counter:{count} </h1>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}