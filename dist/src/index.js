import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";

const btn = document.getElementById("btn");
function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}


btn.addEventListener("click", () => {
  //
});
render(<div id="btn"> <App /></div>, document.getElementById("root"));
console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();