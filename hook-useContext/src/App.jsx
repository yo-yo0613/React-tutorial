// useContext() = React Hook that allows you to share values 
//                between multiple levels of components
//                without passing props through each level    

// PROVIDER COMPONENT
// 1. import {createContext} from 'react;
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//     <Child />
//     </MyContext.Provider>


// CONSUMER COMPONENTS
// 1. import React { useContext} from 'react';
//    import { MyComponent } from './MyComponentA';
// 2. const value = useContext(MyComponent);

import React, { useState } from 'react';

import ComponentA from './ComponentA.jsx';

function App() {
  

  return (
    <>
      <ComponentA></ComponentA>
    </>
  )
}

export default App
