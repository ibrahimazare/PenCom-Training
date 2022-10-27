import React from 'react';
import UseStateExample from '../hooks/UseStateExample';
import UseEffectExample from '../hooks/UseEffectExample';

const Hooks = () => {
    return (

        /* 
        React Hooks are functions that let you "HOOK" into React Features.
        1. UseState
        UseState is used to add State to react components.
        UseState could be used for buttons, onclicks, onchange methods etc
        */
        <div>
          {/*  <UseStateExample /> */}
            <UseEffectExample />
        </div>
    )
}

export default Hooks;