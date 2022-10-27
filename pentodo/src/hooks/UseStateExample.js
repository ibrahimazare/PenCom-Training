// React useState Hook
import React, { useState } from 'react'


// const UseStateExample = () => {
//     // UseSate SHOULD be within the main function
//     const [inputValue, setInputValue] = useState("Ibrahim")

//     // Create onChangeMethod function

//     var onChangeMethod = (event) => {
//         const newValue = event.target.value;
//         setInputValue(newValue)
//     }

//   return (
//     <div>
//         <input placeholder='Enter Text..' />
//     </div>
//   )
// }

// export default UseStateExample

/*
step 1: Create your component
step 2: Create your jsx scaffolding
step 3: create or add your handle method (e,g onClick, onChange)
step 4: create your constatnt followed by square brackets and implement useState.
Your constant always two, which are the initial state and the set state
step 5: import useState and set your state to it's initial
step 6: write the method or handler to setNew state
*/

// usState 2
//import React, {useState} from 'react'

const UseStateExample = () => {
  const [food, setFood] = useState("Yam");

  return (
    <div>
      <h1>My best meal is: {food}</h1>
      {/* For REact its usually camel casing ie (onClick) */}
      <button type='button' onClick={() => setFood("Beans")}>Update</button>
    </div>
  )
}
export default UseStateExample;