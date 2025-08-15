import { useState } from "react";

// export default function Counter(){
//     let count=0;

//     function incCount(){
//         count +=1;
//         console.log(count);
//     }
//     return(
//         <div>
//             <h3>Count = {count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     );
// }
export default function Counter(){
    //let arr=useState(0);
    //console.log(arr);
    //let [stateVariable,setStateVariable]=useState(10);
    let [count , setCount]=useState(0);
    console.log("Component is rendered!");
    console.log(`Count = ${count}`);

    let incCount = () =>{
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        //case1
        setCount((currCount)=>{
            return currCount + 1;
        });
        setCount((currCount)=>{
            return currCount + 1;
        });

        //Case2
        //setCount(25);



        console.log(`inside incCount , Count = ${count}`);
        //console.log(count);
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}