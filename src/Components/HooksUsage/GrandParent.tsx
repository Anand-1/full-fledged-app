import React, { useState, useEffect, useRef } from "react";
import "./GrandParent.css";
import MainNavigation from "../MainNavigation/MainNavigation";
import Parent from "./Parent";

import { MyGlobalContext } from "./ContextUsage";
import UseReducerUnd from "./UseReducerUnd";

const getCopy = (userType: string): string => {
  if (userType.toLowerCase() === "admin") {
    return "Hello Admin User!";
  }
  return "Welcome user!";
};

const GrandParent = () => {
  console.log("Grand Parent rendered");

  //The React useState Hook allows us to track state in a function component.
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const [copy, setCopy] = useState<string>(getCopy("Admin"));

  /*useEffect(
    () => {
      -Side effect logic goes here
      -This function will be executed after the component is mounted
      -and whenever the component is updated or re-rendered.
      return () => {
        // Cleanup logic goes while unmounting
      };
    },
    [
       Dependency array 
    ]
   );
    1. useEffect(() => {
       //Runs on every render , it has no dependency array
       });
    2. useEffect(() => {
       //Runs only on the first render
       }, []);
    3. useEffect(() => {
       //Runs only on the first render
       }, [Dependency]);
   */

  useEffect(() => {
    setTimeout(() => {
      setCounter((count) => count + 1);
    }, 1000);
  }, []);

  // useRef usage
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElement =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <MyGlobalContext.Provider value={{ copy, setCopy }}>
        <MainNavigation />
        <div className="Outermost-component">
          <div>
            <hr />
            <h1>Grand Parent Component</h1>
            <div> Value of Counter in Grand Parent : {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
              Update Counter in Grand Parent by 1
            </button>
            <br />
            <input type="text" ref={inputElement} />
            <h1 onClick={focusInput}>Render Count: {count.current}</h1>
            <div>Copy from Context Value : {copy}</div>
            <hr />
            <Parent todos={todos} />
          </div>
        </div>
      </MyGlobalContext.Provider>
      <UseReducerUnd />
    </>
  );
};

export default GrandParent;

// Hooks allow us to "hook" into React features such as state and lifecycle methods

/*
-------- Actions to check ------------
1. useState : 

1. useeffect scenario test
   - remove dependency array
   - add empty dependency array
   - add some value in dependecy array, adding counter will put it 
     loop , counter update - reload - settimeout- updaetecounter - reload
*/

/* ‘Hooks are functions that let you “hook into” React state
 and lifecycle features from function component. They do not work within a class.
*/
