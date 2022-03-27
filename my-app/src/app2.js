import { useEffect } from "react";
import React, { useState } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  let [state, setstate] = useState({
    value1: "",
    value2: ""
  });
  /**
   * create two states called value1 and value 2
   */

  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */

  const changeValue1 = (e) => {
    /**
     * get value of input from ref and set first state
     */
  };
  const changeValue2 = (e) => {
    /**
     * get value of input from ref and set second state
     */
  };
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{state.value1}</Title>
        <br />
        change first value:
        <input
          onChange={(e) => {
            e.preventDefault();
            setstate({ value1: e.target.value });
          }}
        />
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{state.value2}</Title>
        <br />
        change second value:
        <input onChange={(e) => setstate({ value2: e.target.value })} />
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default App;