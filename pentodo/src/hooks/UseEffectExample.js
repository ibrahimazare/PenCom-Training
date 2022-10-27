// import React, { useEffect, useState } from 'react'
// // UseEffect is a hook that allows you to add side effects to your
// // react app
// // Examples of when useEffect as a hook is usually employed
// /*
// 1. Fetch Data from apis using Axios
// 2. For timers/counters
// 3. Directly updating the DOM
// */

// // A counter to track how many times our component gets rendered/re-rendered

// const UseEffectExample = () => {
//         const [count, setCount] = useState(0);

//         // useState hook to icrement count based on render
//         useEffect(() => {
//             setTimeout(() => {
//                 setCount(() => count + 1);
//             }, 5)
//         } 
//         );

//   return (
//     <div>I rendered {count} times</div>
//   )
// }

// export default UseEffectExample

// Example 2
import axios from "axios";
import React, {useEffect, useState} from "react";

function UseEffectExample() {
        const [data, setData] = useState("");
    useEffect(() => {
        // Download axios from npm to allow API called
        axios.get('https://jsonplaceholder.typicode.com/comments').then
        ((res) => {
            setData(res.data);
            console.log("The API was called.");
        });
    }, []);
    return (
        <div>
            Hello
            <h1></h1>
            <h1></h1>
            <button>

            </button>
        </div>
    )
}

export default UseEffectExample;
