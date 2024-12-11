// useState() = Re-renders the component when the state value change.

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handing Focus, Animations, and Transitions
//              3. Managing Timers and Intervals
import React , {useState, useEffect, useRef} from 'react';
import MyComponent from './MyComponent.jsx';

function App() {
  
  
  return (
    <>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
